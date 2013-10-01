var request = require('request')
var http = require('http')
var fs = require('fs')
var mkdirp = require('mkdirp')
var path = require('path')
var exec = require('child_process').exec
var Space = require('space')

// Todo: Fix download method. Perhaps its time to upgrade our Node!

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest)
  console.log('downloading %s', url)
  var request = http.get(url, function(response) {
    console.log('piping %s', url)
    response.pipe(file)
    file.on('finish', function() {
      console.log('closing %s', url)
      file.close()
      cb()
    })
    file.on('end', function() {
      console.log('closing %s', url)
      file.close()
      cb()
    })
    file.on('unpipe', function() {
      console.log('unpiping %s', url)
      file.close()
      cb()
    })
    response.on('end', function() {
      return cb()
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
  
  app.post(app.pathPrefix + 'proxy.advanced', app.checkId, function(req, res, next) {
    var space = new Space(req.body.space)
    var url = space.get('url')
    var method = space.get('method')
    var headers = {}
    var form = space.get('form')
    if (space.get('headers'))
      headers = space.get('headers').toObject()
    console.log(space.toString())
    request(
      {
        method : method,
        uri: url,
        form: form,
        headers : headers
      }, function (error, response) {
      console.log(error)
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
  
  // Import a zip file
  app.post(app.pathPrefix + 'proxyZip', app.checkId, function (req, res, next) {
    var url = req.body.url
    download(url, app.paths.project + 'import.zip', function (error) {
      if (error)
        return res.send(error, 400)
      else {
        console.log('Unzipping import.zip')
        exec('unzip -o import.zip', {cwd : app.paths.project}, function (error, stdout, stderr) {
            console.log('Unzip results: %s %s %s', error, stdout, stderr)
            fs.unlink(app.paths.project + 'import.zip')
            res.send('Done')
        })
      }
    })
  })
  
}

