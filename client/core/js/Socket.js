// Open socket
// why oh why do they have this query thing?
var Socket

$(document).on('ready', function (){
  
  Socket = io.connect('/', {query : $.param( Screen.toObject() ) })
  socketfs.main(Socket)

  Socket.on('project.append', function (space) {
    
    space = new Space(space)
    var key = space.get('key')
    console.log('project.append received on %s', key)
    ProjectReceiving = true
    Project.append(key, new Space(space.get('value')))
    Project.trigger('incoming-append', key, new Space(space.get('value')))
    ProjectReceiving = false
    Alerts.activity('File ' + Space.pathBranch(key) + ' appended', 1000)
  })
  
  Socket.on('project.create', function (space) {
    
    space = new Space(space)
    var key = space.get('key')
    console.log('project.create received on %s', key)
    ProjectReceiving = true
    Project.create(key, new Space(space.get('value')))
    ProjectReceiving = false
    Alerts.activity('New file ' + key + ' received', 1000)
  })
  
  Socket.on('project.delete', function (key) {
    
    console.log('project.delete received on %s', key)
    ProjectReceiving = true
    Project.delete(key)
    ProjectReceiving = false
    Alerts.activity('File ' + key + ' deleted', 1000)
  })
  
  Socket.on('project.set', function (space) {
    
    space = new Space(space)
    var key = space.get('key')
    console.log('project.set received on %s', key)
    ProjectReceiving = true
    Project.set(key, new Space(space.get('value')))
    ProjectReceiving = false
    Alerts.activity('File ' + key + ' updated', 1000)
  })
  
  Socket.on('project.rename', function (space) {
    
    space = new Space(space)
    var oldName = space.get('oldName')
    var newName = space.get('newName')
    console.log('project.rename received on %s', oldName)
    ProjectReceiving = true
    Project.rename(oldName, newName)
    ProjectReceiving = false
    Alerts.activity('File ' + oldName + ' renamed to ' + newName, 1000)
  })
  
  Socket.on('screens.create', function (space) {
    
    space = new Space(space)
    Screens.set(space.get('id'), space)
    Alerts.activity(space.get('name') + ' opened a new screen', 1000)
  })
  
  Socket.on('screens.delete', function (id) {
    
    var space = Screens.get(id)
    if (!space)
      return true
    Alerts.activity(space.get('name') + ' closed a screen', 1000)
    Screens.delete(id)
  })
  
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
  
  Socket.on('file', function (space) {
    Project.trigger('file', space)
  })
  
  Socket.on('uploadComplete', function (file) {
    Project.trigger('uploadComplete', file)
  })

})
