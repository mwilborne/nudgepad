var fs = {}

fs.exists = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.exists', req, function (data) {
    if (data.match(/ does NOT exist/))
      callback(false)
    else
      callback(true)
  })
}

fs.mkdir = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.mkdir', req, function (data) {
    callback()
  })
}

fs.readFile = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.readFile', req, function (data) {
    if (callback)
      callback(data)
  })
}

fs.rename = function (oldPath, newPath, callback) {
  var req = {}
  req.oldPath = oldPath
  req.newPath = newPath
  if (!newPath)
    return Alerts.error('No name provided')
  $.post('/nudgepad.fs.rename', req, function (err) {
    callback()
  })
}

fs.rmdir = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.rmdir', req, function (data) {
    callback()
  })
}

fs.unlink = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.unlink', req, function (data) {
    callback()
  })
}

fs.writeFile = function (path, content, callback) {
  var req = {}
  req.path = path
  req.content = content
  $.post('/nudgepad.fs.writeFile', req, function (err) {
    if (callback)
      callback()
  })
}


