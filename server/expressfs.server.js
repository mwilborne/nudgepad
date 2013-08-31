var fs = require('fs'),
    exec = require('child_process').exec

module.exports = function (app, options) {
  
  options = options || {}
  var prefix = options.prefix || '/'
  
  /**
   * Create a file ONLY if it does not already exist
   */
  app.post(prefix + 'expressfs.create', function(req, res, next) {
    var path = req.body.path
    fs.exists(path, function (exists) {
      if (exists)
        return res.send(path + ' already exists')
      fs.writeFile(path, req.body.content || '', 'utf8', function (err) {
        if (err)
          return res.send(err)
        res.send('')
      })
    })
  })

  app.post(prefix + 'expressfs.exists', function(req, res, next) {
    var path = req.body.path
    fs.exists(path, function (exists) {
      if (exists)
        res.send(path + ' exists')
      else
        res.send(path + ' does NOT exist')
    })
  })
  
  app.post(prefix + 'expressfs.mkdir', function(req, res, next) {
    var path = req.body.path
    fs.mkdir(path, function (err) {
      if (err) return res.send(err)
      res.send('')
    })
  
  })
  
  app.post(prefix + 'expressfs.readFile', function(req, res, next) {
    var path = req.body.path
    fs.readFile(path, 'utf8', function (err, contents) {
      res.send(contents)
    })
  })
  
  app.post(prefix + 'expressfs.rename', function(req, res, next) {
    var oldPath = req.body.oldPath
    var newPath = req.body.newPath
    fs.rename(oldPath, newPath, function (err) {
      if (err) return res.send(err)
      res.send('')
    })
  
  })
  
  app.post(prefix + 'expressfs.rmdir', function(req, res, next) {
    
    var path = req.body.path
    exec('rm -rf ' + path, function () {
      res.send('')
    })
  
  })
  
  app.post(prefix + 'expressfs.unlink', function(req, res, next) {
    var path = req.body.path
    fs.unlink(path, function (err) {
      if (err) return res.send(err)
      res.send('')
    })
  
  })
  
  app.post(prefix + 'expressfs.writeFile', function(req, res, next) {
    var path = req.body.path
    var encoding = 'utf8'
    if (req.body.encoding === 'base64')
      encoding = 'base64'
    fs.writeFile(path, req.body.content, encoding, function (err) {
      if (err)
        return res.send(err)
      if (req.body.redirect)
        return res.redirect(req.body.redirect)
      res.send('')
    })
  
  })

}
