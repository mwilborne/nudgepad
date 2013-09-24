var fs = require('fs'),
    Space = require('space')

module.exports = function (app) {
  
  var watchers = new Space()
  
  var watchFile = function (filename) {
    console.log('adding listener to %s', filename)
    var mtime = 0
    fs.watch(filename, function () {
      fs.stat(filename, function (err, stats) {
        if (err)
          return true
        if (mtime === stats.mtime.getTime())
          return true
        mtime = stats.mtime.getTime()
        console.log('%s changed %s', filename, mtime)
        watchers.get(filename).each(function (key, socket_id) {
          console.log('emitting to %s', socket_id)
          app.SocketIO.sockets.sockets[socket_id].emit('change', filename)
        })
      })
    })
  }
  
  app.SocketIO.sockets.on('connection', function (socket) {
    
    socket.on('unwatch', function () {
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
      watchers.get(filename).push(socket.id)
      fn('you are now watching ' + filename)
    })
    
    socket.on('watchers', function (filename, fn) {
      fn('i got your message. here are the watchers: ' + watchers.toString())
    })
  
  })

}
