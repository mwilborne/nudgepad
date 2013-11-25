var Files = new Tool('Files')
Files.dir = ''

Files.on('open', function () {
  if (Query.path)
    Files.dir = Query.path
})

Files.on('ready', function () {
  Files.refresh()
  Files.updateHidden()
  
  Files.watcher = socketfs.watch('', function (data) {
    Files.set('files', new Space(data.content))
    Files.renderExplorer()
  }, function () {
    
  })
})

Files.on('close', function () {
  if (Files.watcher)
    Files.watcher.unwatch()
  if (Files.watcherEditor)
    Files.watcherEditor.unwatch()
})

Files.openPath = function (value) {
  Files.dir = value
  Files.renderExplorer()
  if (Files.watcher)
    Files.watcher.unwatch()
  Files.watcher = socketfs.watch(value.trim().replace(/ /g,'/'), function (data) {
    if (value.trim())
      Files.get('files ' + value.trim()).reload(data.content)
    else
      Files.get('files').reload(data.content)
    Files.renderExplorer()
  }, function () {

  })
  // history.pushState('Files', 'Nudgepad - Files', '/nudgepad?tool=Files&path=' + value)
}

Files.parseFilename = function (path) {
  var parts = path.split(/( |\/)/g)
  return parts[parts.length - 1]
}

Files.toggleHidden = function () {
  if (store.get('FilesShowHidden'))
    store.remove('FilesShowHidden')
  else
    store.set('FilesShowHidden', 'true')
  Files.renderExplorer()
  Files.updateHidden()
}

Files.updateHidden = function () {
  $('#FilesHiddenToggle').html('')
  if (store.get('FilesShowHidden'))
    $('#FilesHiddenToggle').append('&#10003; ')
  $('#FilesHiddenToggle').append('Show Hidden Files')
}

Files.isImage = function (filename) {
  if (filename.match(/\.png|jpeg|jpg|gif$/i))
    return true
  return false
}

Files.newFile = function () {
  var newName = prompt('Enter the filename')
  if (!newName)
    return false
    
  var path = (Files.dir ? Files.dir + ' ' : '')
  expressfs.create((path + newName).replace(/ /g, '/'), '')
}

Files.newFolder = function () {
  var newName = prompt('Enter the folder name')
  if (!newName)
    return false
    
  var path = (Files.dir ? Files.dir + ' ' : '')
  expressfs.mkdir((path + newName).replace(/ /g, '/'))
}

Files.renderExplorer = function () {
  
  var files = Files.get('files')
  if (!files)
    return false
  if (Files.dir)
    files = files.get(Files.dir)

  if (!files)
    return false

  var explorer = '<table id="FilesExplorer">'
  explorer += '<tr class="FilesExplorerHeader"><td>Filename</td><td></td><td></td><td></td><td></td><td>Size</td><td>Age</td></tr>'
  
  var path = (Files.dir ? Files.dir + ' ' : '')
  
  // Sort files into this order: folders, then files.
  // if A is a Folder and B is a File, A before B.
  // if A and B are same type, A before B.
  
  var folders = _.filter(files.getProperties(), function(key) {
    return !files.get(key).get('timeSinceLastChange')
  }).sort()
  
  var theFiles = _.filter(files.getProperties(), function(key) {
    return files.get(key).get('timeSinceLastChange')
  }).sort()
  
  var filenames = folders.concat(theFiles)
  
  filenames.forEach(function (filename) {
    
    if (!store.get('FilesShowHidden') && filename.substr(0,1) == '.')
      return true
    
    var file = files.get(filename)
    var row = '<tr'
    // if is file
    if (file.get('timeSinceLastChange')) {
      row += ' class="FilesExplorerFile" value="' + filename + '" path="' + path + filename + '">'
      
      if (Files.isImage(filename))
        row += '<td class="FilesExplorerPreview">' + filename + '</td>'
      else
        row += '<td class="FilesExplorerEdit">' + filename + '</td>'
      
      if (!path.match(/^nudgepad/))
        row += '<td class="FilesHiddenAction FilesExplorerVisit"><a target="published" href="/' + path.replace(/ /g, '/') + filename + '?' + new Date().getTime() + '">Visit</a></td>'
      else
        row += '<td></td>'
      row += '<td class="FilesHiddenAction FilesExplorerRename">Rename</td>'
      row += '<td class="FilesHiddenAction FilesExplorerDuplicate">Duplicate</td>'
      row += '<td class="FilesHiddenAction FilesExplorerRemove">Delete</td>'
      row += '<td>' + (file.get('size')) + '</td>'
      row += '<td>' + moment(parseFloat(file.get('mtime'))).fromNow() + '</td>'
    } else {
      row += ' class="FilesExplorerFolder" value="' + filename + '" path="' + path + filename + '">'
      row += '<td class="FilesExplorerFolderName">' + filename + '</td>'
      row += '<td></td>'
      row += '<td></td>'
      row += '<td class="FilesHiddenAction FilesExplorerRename">Rename</td>'
      row += '<td class="FilesHiddenAction FilesExplorerRemoveFolder">Delete</td>'
      row += '<td></td><td></td>'
    }
    row += '</tr>'
    explorer += row
  })
  explorer += '</table>'
  var breadcrumb = '<li><a class="cursor" onclick="Files.openPath(\'\')">' + document.location.host + '</a></li>'
  if (path) {
    var parent = ''
    path.split(/ /g).forEach(function (v, i) {
      breadcrumb += '<li><a class="cursor" onclick="Files.openPath(\'' + parent + v + '\')">' + v + '</a></li>'
      parent += v + ' '
    })
    
  }
  $('#FilesExplorerPath').html(breadcrumb)
//  $('#FilesExplorerPath').find('li').last().addClass('active')
  
  
  $('#FilesExplorerHolder').html(explorer)
}

Files.refresh = function () {
  expressfs.dirStats('', function (data){
    Files.set('files', new Space(data))
    Files.renderExplorer()    
  })
}


/**
 * Edit a text file
 *
 * @param {string} File you want to edit
 */
Files.edit = function (path, callback) {
  Events.shortcut.disableShortcutsIfInputHasFocus = false
  Events.shortcut.shortcuts['meta+s'] = function () {
    expressfs.writeFile(path, TextPrompt.value().toString(), function () {
      Files.editorValue = TextPrompt.value().toString()
      Alerts.success(path + ' saved', 1000)
    })
  }

  expressfs.readFile( path, function (data) {
    var filename = Files.parseFilename(path)
    Files.editorValue = data
    Files.watcherEditor = socketfs.watch(filename, function (data) {
      if (data.content !== TextPrompt.value()) {
        console.log(filename + ' has changed')
        if (Files.editorValue !== TextPrompt.value())
          Alerts.error('Warning! ' + filename + ' has changed and differs from what you have here. We recommend copying your work to the clipboard just in case.')
        else {
          Files.editorValue = data.content
          TextPrompt.value(data.content)
        }
      }
    })
    TextPrompt.onclose = function () {
      if (Files.watcherEditor)
        Files.watcherEditor.unwatch()
    }
    TextPrompt.open('Editing ' + path, data, path, function (val) {

      expressfs.writeFile(path, val.toString(), function (err) {
        if (err)
          console.log(err)
        else
          Alerts.success(path + ' saved')
        if (callback)
          callback()
        Events.shortcut.shortcuts = {}
        Events.shortcut.disableShortcutsIfInputHasFocus = true
      })
    })
  })
}

$(document).on('click', '.FilesExplorerEdit', function () {
  var filepath = $(this).parent().attr('path').replace(/ /g, '/')
  Files.edit(filepath, Files.renderExplorer)
})

$(document).on('click', '.FilesExplorerPreview', function () {
  var path = $(this).parent().attr('path').replace(/ /g, '/')
  PreviewBox.open('<img src="' + path + '">')
})

$(document).on('click', '.FilesExplorerRename', function () {
  var newName = prompt('Rename this file', $(this).parent().attr('value'))
  if (!newName)
    return false
  var path = (Files.dir ? Files.dir + ' ' : '')
  expressfs.rename($(this).parent().attr('path').replace(/ /g, '/'), (path + newName).replace(/ /g, '/'))
})

$(document).on('click', '.FilesExplorerDuplicate', function () {
  var newName = prompt('Duplicate this file', $(this).parent().attr('value'))
  if (!newName)
    return false
  var path = (Files.dir ? Files.dir + ' ' : '')
  expressfs.cp($(this).parent().attr('path').replace(/ /g, '/'), (path + newName).replace(/ /g, '/'))
})

$(document).on('click', '.FilesExplorerRemove', function (event) {
  var name = $(this).parent().attr('value')
  if (!event.metaKey && !confirm('Are you sure you want to delete ' + name + '?'))
    return false
  expressfs.unlink($(this).parent().attr('path').replace(/ /g, '/'), function () {
    Alerts.success(name + ' deleted')
  })
})

$(document).on('click', '.FilesExplorerRemoveFolder', function () {
  var name = $(this).parent().attr('value')
  if (!event.metaKey && !confirm('Are you sure you want to delete ' + name + '?'))
    return false
  var path = $(this).parent().attr('path').replace(/ /g, '/')
  expressfs.rmdir(path, function () {
    Alerts.success(name + ' deleted')
  })
})

$(document).on('click', '.FilesExplorerFolderName', function () {
  Files.openPath($(this).parent().attr('path'))
})


