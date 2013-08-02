var fs = require('fs'),
    Space = require('space'),
    async = require('async'),
    mkdirp = require('mkdirp'),
    exec = require('child_process').exec,
    _ = require('underscore')

module.exports =  function  (app) {
  
  
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
    fs.writeFile(app.paths.project + path, req.body.content, 'utf8', function (err) {
      if (err) return res.send(err)
      res.send('')
    })

  })
  
}
