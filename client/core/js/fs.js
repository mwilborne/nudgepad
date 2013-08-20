var fs = {}

// Create file ONLY if it does not exist
fs.create = function (path, content, callback) {
  var req = {}
  req.path = path
  req.content = content || ''
  $.post('/nudgepad.fs.create', req, callback)
}

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
  $.post( '/nudgepad.fs.mkdir', req, callback)
}

fs.readFile = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.readFile', req, callback)
}

fs.rename = function (oldPath, newPath, callback) {
  var req = {}
  req.oldPath = oldPath
  req.newPath = newPath
  if (!newPath)
    return Alerts.error('No name provided')
  $.post('/nudgepad.fs.rename', req, callback)
}

fs.rmdir = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.rmdir', req, callback)
}

fs.unlink = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.unlink', req, callback)
}

fs.writeFile = function (path, content, callback) {
  var req = {}
  req.path = path
  req.content = content
  $.post('/nudgepad.fs.writeFile', req, callback)
}

fs.writeFileAndOpen = function (path, content, callback) {
  var form = $('<form target="published" method="post" action="nudgepad.fs.writeFile"></form>')
  var input = $('<input name="path">')
  input.val(path)
  var input2 = $('<input name="content">')
  input2.val(content)
  var input3 = $('<input name="redirect">')
  input3.val(path + '?' + new Date().getTime())
  form.append(input)
  form.append(input2)
  form.append(input3)
  form.submit()
}

fs.writeFileBase64 = function (path, content, callback) {
  var req = {}
  req.path = path
  req.content = content
  req.encoding = 'base64'
  $.post('/nudgepad.fs.writeFile', req, callback)
}
