var fs = require('fs'),
    mkdirp = require('mkdirp')

module.exports = function (app) {
  
  // Receive any uploads
  app.post(app.pathPrefix + 'upload', app.checkId, function(req, res, next) {
    // remove spaces from filenames
    console.log(req.body)
    if (!req.body.filename)
      return res.send(400, 'No filename submitted')
    var filename = req.body.filename.replace(/ /g, '')
    console.log('Receiving upload: %s', filename)
    var path = req.query.path || ''
    // remove space from paths
    path = path.replace(/ /g, '')
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
  
  // Manual uploader for non drag and drop uploads
  app.post(app.pathPrefix + 'uploadManual', app.checkId, function(req, res, next) {
    
    var path = req.body.path || ''
    path = path.replace(/ /g, '/') + '/'
    var uploaded = req.files.uploads[0]
    // if its a single file, turn it into array.
    if ('path' in uploaded)
      uploaded = [uploaded]
    
    for (var i in uploaded) {
      // Clean up file name
//      var name = uploaded[i].name.toLowerCase().replace(/[^a-z0-9- _\.]/gi, '').replace(/ /g, '_')
      // remove spaces from filenames
      var name = uploaded[i].name.replace(/ /g, '')
    
      fs.rename(uploaded[i].path, app.paths.project + path + name, function (name) {})
    }
    res.redirect('/nudgepad/tools/files/uploader.html')
    
    
  })
  
}

