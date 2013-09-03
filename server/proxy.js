var request = require('request')
var http = require('http')
var fs = require('fs')
var mkdirp = require('mkdirp')
var path = require('path')

// Todo: Fix download method. Perhaps its time to upgrade our Node!

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest)
  console.log('downloading %s', url)
  var request = http.get(url, function(response) {
    console.log('piping %s', url)
    response.pipe(file)
    file.on('finish', function() {
      file.close()
      cb()
    })
    file.on('unpipe', function() {
      file.close()
      cb()
    })
  }).on('error', function(e) {
    cb("Got error: " + e.message)
  })
}

module.exports = function (app) {
  
  app.post(app.pathPrefix + 'proxy', app.checkId, function(req, res, next) {
    
    var url = req.body.url
    request.get(url, function (error, response) {
      if (error)
        return res.send(error, 400)
      return res.send(response.body)
    })
  })
  
  app.post(app.pathPrefix + 'proxyDownload', app.checkId, function(req, res, next) {
    
    var url = req.body.url
    var filepath = app.paths.project + req.body.path
    
    
    mkdirp(path.dirname(filepath), function (err) {
        if (err)
          return res.send(err, 400)
        
        download(url, filepath, function (error) {
          console.log('returned %s', url)
          if (error)
            res.send(error, 400)
          else
            res.send('ok')
        })
    })
    
    
  })
  
}

