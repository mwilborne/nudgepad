var socketio = require('socket.io'),
    Space = require('space'),
    Marking = require('markings'),
    parseCookie = require('cookie').parse,
    ParseName = require('./ParseName.js')

module.exports = function (app, httpServer) {
  
  /********* SOCKET IO STUFF **********/ 
  app.SocketIO = socketio.listen(httpServer)
  
  // 3 is max
  app.SocketIO.set('log level', 0)
  
  /********* SOCKET EVENTS **********/ 
  
  app.SocketIO.set('authorization', function (data, accept) {
  
    if (!data.headers.cookie)
      return accept('No cookie transmitted.', false)
    
    var cookie = parseCookie(data.headers.cookie)
  
    var maker = app.Project.get('makers ' + cookie.email)
    if (!maker)
      return accept('Invalid maker "' + cookie.email + '" transmitted. Headers:' + data.headers.cookie, false)
  
    // Wrong key
    if (maker.get('key') !== cookie.key)
      return accept('Invalid key transmitted.', false)
    
    data.cookie = cookie
    var space = new Space(data.query)
    data.screenId = space.get('id')
    app.Screens.set(data.screenId, space)
    return accept(null, true)
    
  })
  
  app.SocketIO.sockets.on('connection', function (socket) {
    
    socket.on('project.append', function (space, fn) {
      var change = new Space(space)
      
      var key = change.get('key')
      var value = new Space(change.get('value'))
      var filename = key.split(/ /g)[0] + ' ' + key.split(/ /g)[1]
      
      app.Project.set(key, value)
      var file = app.Project.get(filename)
      file.save(function (error) {
        if (error) {
          console.log('Error: %s', error)
          return error
        }
      })
      
      fn('project.append to ' + key)
      // Broadcast to everyone else
      socket.broadcast.emit('project.append', space)      
    })
    
    socket.on('project.create', function (space, fn) {
      var change = new Space(space)
      
      var key = change.get('key')
      var value = new Space(change.get('value'))
      var filepath = app.paths['private'] + key.replace(' ', '/') + '.space'
      
      console.log('creating %s', file)
      var file = new Marking(filepath, value)
      file.create(function (error) {
        if (error) {
          console.log('Error: %s', error)
          return error
        }
      })
      app.Project.set(key, file)
      
      
      fn('project.create ' + key)
      // Broadcast to everyone else
      socket.broadcast.emit('project.create', space)      
    })
    
    socket.on('project.delete', function (key, fn) {
      // Delete File
      var file = app.Project.get(key)
      file.trash(function (error) {
        if (error) {
          console.log('Error: %s', error)
          return fn('error')
        }
        fn('project.delete ' + key)
        // Broadcast to everyone else
        socket.broadcast.emit('project.delete', key)
      })
      app.Project.delete(key)
  
    })
    
    socket.on('project.rename', function (space, fn) {
      var change = new Space(space)
      
      var oldName = change.get('oldName')
      var newName = change.get('newName')
      
      var file = app.Project.get(oldName)
      var filepath = app.paths['private'] + newName.replace(' ', '/') + '.space'
      file.rename(filepath, function (error) {
        if (error) {
          console.log('Error: %s', error)
          return error
        }
      })
      app.Project.rename(oldName, newName)
      
      fn('project.rename ' + oldName + ' => ' + newName)
      // Broadcast to everyone else
      socket.broadcast.emit('project.rename', space)      
    })
    
    socket.on('project.set', function (space, fn) {
      var change = new Space(space)
      
      var key = change.get('key')
      var value = new Space(change.get('value'))
      
      // we know this will be like pages filename
      var levels = key.split(/ /g)
      var folder = app.Project.get(levels[0])
      var path = levels[0] + ' ' + levels[1]
      var file = app.Project.get(path)
      var filepath = app.paths['private'] + levels[0] + '/' + levels[1] + '.space'
      
  
      console.log('updating %s', path)
      file.clear()
      file.patch(value)
      file.save(function (error) {
        if (error) {
          console.log('Error: %s', error)
          return error
        }
      })
      
      
      fn('project.set ' + key)
      // Broadcast to everyone else
      socket.broadcast.emit('project.set', space)      
    })
    
    socket.on('disconnect', function () {
      if (socket.handshake.screenId) {
        app.Screens.delete(socket.handshake.screenId)
        socket.broadcast.emit('screens.delete', socket.handshake.screenId)
      }
    })
    
    socket.on('screens.set', function (space, fn) {
      var change = new Space(space)
      var key = change.get('key')
      var value = change.get('value')
      
      app.Screens.set(key, value)
      
      fn('screens.set ' + key)
      // Broadcast to everyone else
      socket.broadcast.emit('screens.set', space)      
    })
    
    // send the person all the other screens
    socket.emit('screens.get', app.Screens.toString())
    socket.broadcast.emit('screens.create', app.Screens.get(socket.handshake.screenId).toString())

  
  })
}
