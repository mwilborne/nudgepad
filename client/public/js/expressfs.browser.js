var expressfs = {}
expressfs.prefix = '/'
expressfs.rootPath = ''

expressfs.appendFile = function (path, content, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  req.content = content
  $.post(expressfs.prefix + 'expressfs.appendFile', req, function (err) {
    if (callback)
      callback()
  })
}

// Create file ONLY if it does not exist
expressfs.cp = function (source, destination, callback) {
  var req = {}
  req.source = expressfs.rootPath + source
  req.destination = expressfs.rootPath + destination
  $.post( expressfs.prefix + 'expressfs.cp', req, callback)
}

// Create file ONLY if it does not exist
expressfs.create = function (path, content, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  req.content = content || ''
  $.post( expressfs.prefix + 'expressfs.create', req, callback)
}

expressfs.downloadDirectory = function (path, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  $.post( expressfs.prefix + 'expressfs.downloadDirectory', req)
    .done(callback)
    .fail(callback)
}

expressfs.exists = function (path, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  $.post( expressfs.prefix + 'expressfs.exists', req, function (data) {
    if (data.match(/ does NOT exist/))
      callback(false)
    else
      callback(true)
  })
}

expressfs.mkdir = function (path, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  $.post( expressfs.prefix + 'expressfs.mkdir', req, function (data) {
    if (callback)
      callback()
  })
}

expressfs.readdir = function (path, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  $.post( expressfs.prefix + 'expressfs.readdir', req)
    .done(function (data) {
      if (callback)
        callback(JSON.parse(data))
    })
    .fail(callback)
}

expressfs.readFile = function (path, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  $.post( expressfs.prefix + 'expressfs.readFile', req)
    .done(callback)
    .fail(callback)
}

expressfs.rename = function (oldPath, newPath, callback) {
  var req = {}
  req.oldPath = expressfs.rootPath + oldPath
  req.newPath = expressfs.rootPath + newPath
  if (!newPath)
    return console.log('No name provided')
  $.post(expressfs.prefix + 'expressfs.rename', req, function (err) {
    callback()
  })
}

expressfs.rmdir = function (path, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  $.post( expressfs.prefix + 'expressfs.rmdir', req, function (data) {
    callback()
  })
}

expressfs.unlink = function (path, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  $.post( expressfs.prefix + 'expressfs.unlink', req, function (data) {
    callback()
  })
}

expressfs.writeFile = function (path, content, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  req.content = content
  $.post(expressfs.prefix + 'expressfs.writeFile', req, function (err) {
    if (callback)
      callback()
  })
}

expressfs.writeFileAndOpen = function (path, content, target, callback) {
  var form = $('<form target="' + target + '" method="post" action="' + expressfs.prefix + 'expressfs.writeFile' + '"></form>')
  var input = $('<input name="path">')
  input.val(expressfs.rootPath + path)
  var input2 = $('<textarea name="content"></textarea>')
  input2.val(content)
  var input3 = $('<input name="redirect">')
  input3.val(path + '?' + new Date().getTime())
  form.append(input)
  form.append(input2)
  form.append(input3)
  form.submit()
}

expressfs.writeFileBase64 = function (path, content, callback) {
  var req = {}
  req.path = expressfs.rootPath + path
  req.content = content
  req.encoding = 'base64'
  $.post(expressfs.prefix + 'expressfs.writeFile', req, callback)
}



