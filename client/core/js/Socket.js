// Open socket
// why oh why do they have this query thing?
var Socket

$(document).on('ready', function (){
  
  Socket = io.connect('/', {query : $.param( Screen.toObject() ) })
  socketfs.main(Socket)
  
  
  Socket.on('screens.get', function (space) {
    Screens._patch(space)
  })
  
  Socket.on('screens.set', function (space) {
    space = new Space(space)
    var key = space.get('key')
    var value = space.get('value')
    Screens.set(key, value)
  })
  
  Socket.on('ack', function (message) {
    $('#ConnectionStatus').hide()
  })
  
  Socket.on('connect', function () {
    console.log('connected to server: %s', document.location.host)
    $('#ConnectionStatus').html('Connected!').fadeOut()
    nudgepad.restartCheck()
  })
  
  Socket.on('connect_failed', function (error) {
    console.log('Connect failed')
    console.log(error)
    $('#ConnectionStatus').html('Connection to server failed...').show()
  })
  
  Socket.on('disconnect', function (message) {
    $('#ConnectionStatus').html('Disconnected from server. Attempting to reconnect...').show()
  })
  
  Socket.on('error', function (error) {
    console.log('Socket error: %s', error)
    $('#ConnectionStatus').html('Connecting to server...').show()
  })

})
