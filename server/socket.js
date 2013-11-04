var Space = require('space'),
    parseCookie = require('cookie').parse,
    ParseName = require('./ParseName.js')

module.exports = function (app, httpServer) {
  
  /********* SOCKET EVENTS **********/ 
  
  app.SocketIO.set('authorization', function (data, accept) {
  
    if (!data.headers.cookie)
      return accept('No cookie transmitted.', false)
    
    var cookie = parseCookie(data.headers.cookie)
  
    app.team.get(cookie.nudgepadEmail, function (err, maker) {
      if (err)
        return accept('Invalid user "' + cookie.nudgepadEmail + '" transmitted. Headers:' + data.headers.cookie, false)
      
      // Wrong key
      if (maker.get('key') !== cookie.nudgepadKey)
        return accept('Invalid key transmitted.', false)

      data.cookie = cookie
      var space = new Space(data.query)
      data.screenId = space.get('id')
      app.Screens.set(data.screenId, space)
      return accept(null, true)
      
    })
  

  })
  
  app.SocketIO.sockets.on('connection', function (socket) {
    
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
