var Develop = new App('Develop')

Develop.files = ''
Develop.log = ''
Develop.path = ''
Develop.pathPretty = ''
Develop.status = ''

Develop.clone = function () {
  var domain = prompt('Enter a domain name', 'copyof' + nudgepad.domain)
  if (!domain)
    return false
  // TODO: make tld come from server and dont compute it here, which
  // is incorrect
  // tld equals the part that domain and nudgepad.domain have in common
  var newDomainReversed = domain.split("").reverse().join("")
  var currentDomainReversed = nudgepad.domain.split("").reverse().join("")
  var tld = ''
  for (var i = 0 ; i < currentDomainReversed.length ; i++) {
    if (newDomainReversed.substr(i, 1) === currentDomainReversed.substr(i, 1))
      tld = newDomainReversed.substr(i, 1) + tld
  }
  // chop common domain part
  tld = tld.replace(/^[^\.]*\./, '')
  // Panel is the domain running the nudgepad panel server
  var panel = site.get('hostname')
  
  $.get('/nudgepad.export', {}, function (data) {
    
    
    var newForm = $('<form>', {
        'action': 'http://' + panel + '/create',
//        'target': '_blank',
        'method' : 'post'
    })
    .append($('<input>', {
        'name': 'domain',
        'value': domain,
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'email',
        'value': nudgepad.cookie.email,
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'timestamp',
        'value': new Date().getTime(),
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'relaxed',
        'value': 'true',
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'clone',
        'value': data,
        'type': 'hidden'
    }))
    newForm.submit()
    
  })
  
}

Develop.createFile = function () {
  var name = prompt('Name your file')
  if (!name)
    return false
  nudgepad.explorer.create(Develop.pathPretty + name, Develop.refresh)
}

Develop.home = function () {
  Develop.path = ''
  Develop.pathPretty = ''
  Develop.renderExplorer()
}

Develop.import = function () {
  nudgepad.textPrompt('Import a Site ', '', function (val) {
    $.post('/nudgepad.import', {space : val}, function (err) {
      nudgepad.notify('Imported. Please restart')
    })
  })
}

Develop.onopen = function () {
//  $('.nudgepad#zip').attr('href', '/nudgepad.backup/' + nudgepad.domain + '.zip')
  if (!Develop.log)
    Develop.refresh()
}

Develop.renderExplorer = function () {
  
  var files = Develop.files
  if (Develop.path)
    files = files.get(Develop.path)
  
  var explorer = '<table id="nudgepadExplorer">'
  explorer += '<tr class="explorerHeader"><td>Filename</td><td></td><td></td><td>Size</td><td>Age</td></tr>'
  
  var filenames = files.keys
  for (var i in filenames) {
    // its a folder
    var name = filenames[i]
    var item = files.values[name]
    var row = '<tr'
    if (item.get('timeSinceLastChange')) {
      row += ' class="explorerFile" value="' + name + '">'
      row += '<td class="explorerEdit standardCell">' + name + '</td>'
      row += '<td class="explorerRename standardCell">Rename</td>'
      row += '<td class="explorerRemove standardCell">Delete</td>'
      row += '<td class="standardCell">' + (item.get('size')) + 'KB</td>'
      row += '<td class="standardCell">' + moment(item.get('mtime')).fromNow() + '</td>'
    } else {
      row += ' class="explorerFolder" value="' + name + '">'
      row += '<td class="explorerFolderName standardCell" colspan=5>' + name + '</td>'
    }
    row += '</tr>'
    explorer += row
  }
  explorer += '</table>'
  Develop.explorer = explorer
  $('.nudgepad#explorerPath').text(nudgepad.domain + '/' + Develop.pathPretty)
  $('.nudgepad#explorerHolder').html(Develop.explorer)
}

Develop.refresh = function () {
  $.get('/nudgepad.status', {}, function (data) {
    Develop.status = data
    $('.nudgepad#statusArea').text(Develop.status)
  })
  $.get('/nudgepad.logs', {}, function (data) {
    Develop.log = data
    $('.nudgepad#logHolder').html(data)
    $('#logHolder').scrollTop($('#logHolder').height())
  })
  $.get('/nudgepad.explorer.list', {}, function (data) {
    Develop.files = new Space(data)
    Develop.renderExplorer()
    
  })
}

$(document).on('click', 'td.explorerEdit', function () {
  nudgepad.explorer.edit(Develop.pathPretty + $(this).parent().attr('value'))
})

$(document).on('click', 'td.explorerRename', function () {
  var newName = prompt('Rename this file', $(this).parent().attr('value'))
  if (!newName)
    return false
  nudgepad.explorer.rename(Develop.pathPretty + $(this).parent().attr('value'),
    Develop.pathPretty + newName, Develop.refreshFiles)
})

$(document).on('click', 'td.explorerRemove', function () {
  var name = $(this).parent().attr('value')
  if (!confirm('Are you sure you want to delete ' + name + '?'))
    return false
  nudgepad.explorer.remove(Develop.pathPretty + name, Develop.refresh)
})

$(document).on('click', 'td.explorerFolderName', function () {
  if (Develop.path)
    Develop.path += ' ' + $(this).parent().attr('value')
  else
    Develop.path = $(this).parent().attr('value')
  Develop.pathPretty = Develop.path.replace(' ', '/') + '/'
  Develop.renderExplorer()
})

var visibleContent;

$(document).on('click', '.devToggleOption', function () {
  visibleContent = $(this).text().toLowerCase() + 'Content'
  if(!$(this).hasClass('devSelect')) {
    $('div').removeClass('devSelect');
    $(this).addClass('devSelect')
    $('.devAppContent').hide()
    $('#' + visibleContent).show()
  }
})


// todo: add console history

/**
 * Prompt the worker for input. Pops a modal.
 */
Develop.console = function () {
  mixpanel.track('I opened the console')
  var output = $('<pre id="nudgepadEditorConsole"></pre>')
  var input = $('<input id="nudgepadEditorInput" type="text"/>')
  var checkbox = $('<input type="checkbox" id="nudgepadEditorCheckbox"/>')
  var label = $('<label for="nudgepadEditorCheckbox" id="nudgepadEditorLabel">Shell</label>')
  var modal_screen = $('<div id="nudgepadEditorModalScreen"/>')
  modal_screen.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  output.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })

//  if (onkeypress)
//    output.on('keypress', onkeypress)
    
  var send_button = $('<div id="nudgepadEditorSaveButton">Send</div>')
  var cancel_button = $('<div id="nudgepadEditorCancelButton">Close</div>')
  
  var button_container = $('<div id="nudgepadEditorButtonContainer"></div>')
  modal_screen.on('click', function () {
    cancel_button.trigger('click')
  })
  
  cancel_button.on('click', function () {
    send_button.remove()
    output.remove()
    modal_screen.remove()
    button_container.remove()
    cancel_button.remove()
    label.remove()
    checkbox.remove()
    input.remove()
  })
  
  send_button.on('click', function () {
    
    var command = input.val()
    var endpoint = 'nudgepad.console'
    if (checkbox.is(':checked'))
      endpoint = 'nudgepad.exec'
    
    $.post(endpoint, {command : command}, function (result) {
      output.append('>' + command.replace(/\n/g, '> \n') + '\n')
      output.append(result + '\n')
      output.scrollTop($('pre')[0].scrollHeight + '')
      input.val('')
      input.focus()
    }, null, function (error, message) {
      mixpanel.track('I used the console and got an error')
      output.append('>' + command.replace(/\n/g, '> \n') + '\n')
      output.append('ERROR\n')
      output.append(error.responseText + '\n')
      output.scrollTop($('pre')[0].scrollHeight + '')
      input.val('')
      input.focus()
    })
    
  })
  
  input.on('enterkey', function () {
    send_button.click()
  })
  
  $('body').append(modal_screen)
  $('body').append(checkbox)
  $('body').append(label)
  $('body').append(output)
  $('body').append(input)
  $('body').append(send_button)
  $('body').append(cancel_button)
  $('body').append(button_container)
  input.focus()
}

