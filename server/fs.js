var fs = require('fs'),
    Space = require('space'),
    async = require('async'),
    mkdirp = require('mkdirp'),
    exec = require('child_process').exec,
    _ = require('underscore')

module.exports =  function  (app) {
  
  /**
   * Create a file ONLY if it does not already exist
   */
  app.post(app.pathPrefix + 'fs.create', app.checkId, function(req, res, next) {
    var path = app.paths.project + req.body.path.replace(/ /g, '/')
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
  
  app.post(app.pathPrefix + 'fs.exists', app.checkId, function(req, res, next) {
    var path = req.body.path.trim().replace(/ /g, '/')
    fs.exists(app.paths.project + path, function (exists) {
      if (exists)
        res.send(path + ' exists')
      else
        res.send(path + ' does NOT exist')
    })
  })


  app.post(app.pathPrefix + 'fs.mkdir', app.checkId, function(req, res, next) {
    var path = req.body.path
    fs.mkdir(app.paths.project + path, function (err) {
      if (err) return res.send(err)
      res.send('')
    })

  })
  
  app.post(app.pathPrefix + 'fs.readFile', app.checkId, function(req, res, next) {
    var path = req.body.path.trim().replace(/ /g, '/')
    fs.readFile(app.paths.project + path, 'utf8', function (err, contents) {
      res.send(contents)
    })
  })
  

  app.post(app.pathPrefix + 'fs.rename', app.checkId, function(req, res, next) {
    var oldPath = req.body.oldPath.replace(/ /g, '/')
    var newPath = req.body.newPath.replace(/ /g, '/')
    fs.rename(app.paths.project + oldPath, app.paths.project + newPath, function (err) {
      if (err) return res.send(err)
      res.send('')
    })

  })
  
  app.post(app.pathPrefix + 'fs.rmdir', app.checkId, function(req, res, next) {
    
    var path = req.body.path
    // todo: remove and .s
    path = app.paths.project + path
    exec('rm -rf ' + path, function () {
      res.send('')
    })

  })

  app.post(app.pathPrefix + 'fs.unlink', app.checkId, function(req, res, next) {
    var path = req.body.path
    fs.unlink(app.paths.project + path, function (err) {
      if (err) return res.send(err)
      res.send('')
    })

  })
  
  app.post(app.pathPrefix + 'fs.writeFile', app.checkId, function(req, res, next) {
    var path = req.body.path.replace(/ /g, '/')
    // todo: make sure path exists. if not, create it.
    var encoding = 'utf8'
    if (req.body.encoding === 'base64')
      encoding = 'base64'
    fs.writeFile(app.paths.project + path, req.body.content, encoding, function (err) {
      if (err) return res.send(err)
      res.send('okay')
    })

  })
  
}
