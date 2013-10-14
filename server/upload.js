var fs = require('fs'),
    mkdirp = require('mkdirp')

module.exports = function (app) {
  
  // Receive any uploads
  app.post(app.pathPrefix + 'upload', app.checkId, function(req, res, next) {
    var filename = req.body.filename
    console.log('Receiving upload: %s', filename)
    var path = req.query.path || ''
    if (path) {
      mkdirp(app.paths.project + path, function (err) {
        if (err)
          return res.send(err)
        fs.rename(req.files.myFile.path, app.paths.project + path + filename, function (err) {
          res.send(req.body.filename + ' uploaded')  
        })
      })
    }
    else {
      fs.rename(req.files.myFile.path, app.paths.project + path + filename, function (err) {
        res.send(req.body.filename + ' uploaded')  
      })
    }

  })
  
}

