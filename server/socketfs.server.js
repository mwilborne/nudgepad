var fs = require('fs'),
    Space = require('space'),
    _ = require('underscore'),
    async = require('async')

module.exports = function (app) {
  
  var watchers = new Space()
  var mtimes = new Space()
  
  function fileStats (path, spaceCount, callback) {
    
    spaceCount = spaceCount + 1
    var spaces = strRepeat(' ', spaceCount)

    fs.stat(path, function (err, stat) {

      // Quit on error
      if (err)
        return callback(err)

      if (stat.isDirectory())
        return dirStats(path + '/', spaceCount, callback)

      var str = ''
      str += spaces + 'mtime ' + stat.mtime.getTime() + '\n'
      str += spaces + 'size ' + (stat.size/1000000).toFixed(1) + 'MB\n'
      str += spaces + 'bytes ' + stat.size + '\n'
      str += spaces + 'age ' + ((new Date().getTime() - stat.ctime.getTime())/86400000).toFixed(1) + 'D\n'
      str += spaces + 'freshness ' + ((new Date().getTime() - stat.mtime.getTime())/1000).toFixed(0) + 'S\n'
      str += spaces + 'timeSinceLastChange ' + ((new Date().getTime() - stat.mtime.getTime())/86400000).toFixed(1) + 'D\n'
      str += spaces + 'oneliner ' + stat.size + ' ' + stat.mtime.getTime() + '\n'
      callback(false, str)
    })

  }
  
  var strRepeat = function (string, count) {
    var str = ''
    for (var i = 0; i < count; i++) {
      str += ' '
    }
    return str
  }

  function dirStats (path, spaceCount, callback) {
    
    var spaces = strRepeat(' ', spaceCount)

    fs.readdir(path, function (err, files) {

      if (err)
        return callback(err)

      var str = ''
      var paths = _.map(files, function (value){return path + value})

      async.mapSeries(paths, function (path, callback) {
        fileStats(path, spaceCount, callback)
      }, function(err, stats){

        if (err)
          return callback(err)

        // stats is now an array of stats for each file
        for (var i in files) {
          str += spaces + files[i] + '\n' + stats[i]
        }

        callback(false, str)
      })    

    })

  }
  
  var sendDirectoryChange = function (filename) {
    console.log('dir change: %s', filename)
    dirStats(filename.replace(/\/$/, '') + '/', 0, function (err, string) {
      
      if (err) {
        console.log('error getting dirstats for %s : %s', filename, err)
        return true
      }
        
      
      watchers.get(filename).each(function (socketId) {
        console.log('emitting to %s', socketId)
        if (!app.SocketIO.sockets.sockets[socketId]) {
          console.log('tried to emit to %s but not found', socketId)
          return true
        }
        app.SocketIO.sockets.sockets[socketId].emit('change', { filename : filename, content : string})
      })
    })
    
  }
  
  var sendFileChange = function (filename) {
    fs.readFile(filename, 'utf8', function (err, content) {
      watchers.get(filename).each(function (socketId) {
        console.log('emitting to %s', socketId)
        if (!app.SocketIO.sockets.sockets[socketId]) {
          console.log('tried to emit to %s but not found', socketId)
          return true
        }
        console.log(content)
        app.SocketIO.sockets.sockets[socketId].emit('change', { filename : filename, content : content})
      })
    })
  }
  
  var onFileChange = function (filename) {
    fs.stat(filename, function (err, stats) {
      if (err)
        return true
      
      // File has not changed
      if (mtimes.get(filename) === stats.mtime.getTime())
        return true
      mtimes.set(filename, stats.mtime.getTime())
      console.log('%s changed %s', filename, stats.mtime.getTime())
      if (stats.isDirectory())
        sendDirectoryChange(filename)
      else
        sendFileChange(filename)
    })
  }
  
  var watchFile = function (filename) {
    console.log('adding listener to %s', filename)
    fs.watch(filename, function () { onFileChange(filename)})
  }
  
  app.SocketIO.sockets.on('connection', function (socket) {
    
    socket.on('unwatch', function (filename, fn) {
      if (!watchers.get(filename))
        return fn('no one is watching ' + filename)
      if (!watchers.get(filename).get(socket.id))
        return fn('you are not watching ' + filename)
      watchers.get(filename).delete(socket.id.toString())
      if (!watchers.get(filename))
        fs.unwatchFile(filename)
      fn('you are no longer watching ' + filename)
    })
    
    socket.on('disconnect', function () {
      watchers.every(function (key, value) {
        if (value === socket.id)
          this.delete(key)
      })
    })
    
    socket.on('watch', function (filename, fn) {
      console.log('%s watching %s', socket.id, filename)
      if (!watchers.get(filename)) {
        watchers.set(filename, new Space())
        watchFile(filename)
      }
      if (watchers.get(filename + ' ' + socket.id))
        return fn('you are already watching ' + filename)
      watchers.get(filename).set(socket.id, new Date().getTime())
      fn('you are now watching ' + filename)
    })
    
    socket.on('watchers', function (filename, fn) {
      fn('i got your message. here are the watchers: ' + watchers.toString())
    })
  
  })

}
