var fs = require('fs'),
    Space = require('space'),
    Tail = require('tail').Tail,
    dirtospace = require('dirtospace'),
    async = require('async')

module.exports = function (app) {
  
  var Files = new Space()
  
  var cleanup = function () {
    Files.each(function (filename, value) {
      if (value.get('watchers') && !value.get('watchers').length()) {
        fs.unwatchFile(filename)
        value.delete('watchers')
        value.delete('watcherFn')
      }
      if (value.get('tails') && !value.get('tails').length()) {
        value.get('tailFn').unwatch()
        value.delete('tails')
        value.delete('tailFn')
      }
      if (!value.get('tails') && !value.get('watchers'))
        Files.delete(filename)
    })
  }
  
  app.SocketIO.sockets.on('connection', function (socket) {
    
    socket.on('disconnect', function () {
      
      Files.each(function (filename, value) {
        value.delete('watchers ' + socket.id)
        value.delete('tails ' + socket.id)
      })
      cleanup()
    })
  
    socket.on('inspect', function (filename, fn) {
      fn(Files.toString())
    })
    
    socket.on('resetGlobal', function (message, fn) {
      Files.each(function (filename, value) {
        
        // A no op if it does not exist
        fs.unwatchFile(filename)
        if (value.get('tailFn'))
          value.get('tailFn').unwatch()
        
      })
      Files = new Space()
      fn('reset')
    })
      
    socket.on('tail', function (filename, fn) {
      
      fs.exists(filename, function (exists) {
        if (!exists)
          return fn(filename + ' does not exist')
        
        if (!Files.get(filename))
          Files.set(filename, new Space())
        
        var file = Files.get(filename)
        if (!file.get('tailFn')) {
          tail = new Tail(filename)
          tail.on("line", function(data) {
            var tails = Files.get(filename + ' tails') || new Space()
            tails.each(function (socketId) {
              if (!app.SocketIO.sockets.sockets[socketId])
                return true
              app.SocketIO.sockets.sockets[socketId].emit('tail', { filename : filename, content : data})
            })
          })
          file.set('tailFn', tail)
        }
        else if (file.get('tails ' + socket.id))
          return fn('you are already tailing ' + filename)
        
        file.set('tails ' + socket.id, new Date().getTime())
        fn('you are now tailing ' + filename)
      })
      
    })
    
    socket.on('untail', function (filename, fn) {
      Files.delete(filename + ' tails ' + socket.id)
      cleanup()
      fn('You are no longer tailing ' + filename)
    })
    
    socket.on('unwatch', function (filename, fn) {
      Files.delete(filename + ' watchers ' + socket.id)
      cleanup()
      fn('You are no longer watching ' + filename)
    })
    
    socket.on('watch', function (filename, fn) {
      
      fs.exists(filename, function (exists) {
        if (!exists)
          return fn(filename + ' does not exist')
        
        if (!Files.get(filename))
          Files.set(filename, new Space())
        
        var file = Files.get(filename)
        if (!file.get('watcherFn')) {
          
          
          fs.watch(filename, function () {
            
            fs.stat(filename, function (err, stats) {
              if (err)
                return true
  
              // File has not changed
              if (file.get('mtime') === stats.mtime.getTime())
                return true
              file.set('mtime', stats.mtime.getTime())
              if (stats.isDirectory()) {
                dirtospace(filename.replace(/\/$/, '') + '/', function (err, string) {
                  if (err)
                    return true
                  var watchers = Files.get(filename + ' watchers')
                  if (watchers) {
                    watchers.each(function (socketId) {
                      if (!app.SocketIO.sockets.sockets[socketId])
                        return true
                      app.SocketIO.sockets.sockets[socketId].emit('change', { filename : filename, content : string})
                    })
                  }
                  
                })
              }
              else {
                fs.readFile(filename, 'utf8', function (err, content) {
                  var watchers = Files.get(filename + ' watchers')
                  if (watchers) {
                    watchers.each(function (socketId) {
                      if (!app.SocketIO.sockets.sockets[socketId])
                        return true
                      app.SocketIO.sockets.sockets[socketId].emit('change', { filename : filename, content : content})
                    })
                  }
                })
              }
            })
            
          })
          
          file.set('watcherFn', true)
        }
        else if (file.get('watchers ' + socket.id))
          return fn('you are already watching ' + filename)
        
        file.set('watchers ' + socket.id, new Date().getTime())
        fn('you are now watching ' + filename)
      })
      
    })
  
  })

}
