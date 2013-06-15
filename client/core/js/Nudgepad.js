// Shim window.console for IE.
if (!window.console)
 window.console = {log: function() {}}

/**
 * The Editor. The main nudgepad namespace.
 *
 * @special Singleton
 */
var nudgepad = {}
nudgepad.id = new Date().getTime()
nudgepad.tab = new Space('id ' + nudgepad.id)
nudgepad.tab.set('device', platform.name + (platform.product ? '/' + platform.product : ''))

nudgepad.setColor = function () {
  if (nudgepad.tab.get('color'))
    return true
  var colors = ['red', 'green', 'violet', 'yellow', 'blue', 'orange', 'indigo']
  var used = []
  site.values.collage.each(function (key, value) {
    if (value.get('color'))
      used.push(value.get('color'))
  })
  var freeColors = _.difference(colors, used)
  if (freeColors.length < 1)
    freeColors.push('black')
  nudgepad.tab.set('color', freeColors[0])
}

nudgepad.tab.on('patch', function () {
  site.set('collage ' + nudgepad.id, this)
  nudgepad.emit('collage.update', this)
})


nudgepad.isTesting = false

// Nudgepad Events
nudgepad.events = {
  'selection' : [],
  'stage' : [],
  'page' : [],
  'disconnect' : [],
  'collage.update' : [],
  'ping' : [],
  'main' : [],
  'patch' : [],
  'ready' : [],
  'public' : [],
  'uploadComplete' : []
}

/**
 * Requests the data from the server and loads the editor.
 */
nudgepad.main = function (callback) {
  
  nudgepad.domain = document.location.host
  
  // Load plugins
  nudgepad.cookie = parseCookie(document.cookie)
  nudgepad.name = ParseName(nudgepad.cookie.email)
  nudgepad.tab.set('email', nudgepad.cookie.email)
  nudgepad.tab.set('name', nudgepad.name)
  
  
  // In case we open multiple tabs
  window.name = 'nudgepad'
  
  // TODO: on capture phase, capture block clicks, check if shiftkey is held,
  // if shiftkey is not held, prevent any events from firing on click?
  // document.body.addEventListener('mouseup', PopupHider.hide, true)
  
  nudgepad.query = ParseQueryString()
  // Fetch all files in the background.
  nudgepad.explorer.getSite(function () {
    
    
    // Open socket
    nudgepad.socket = io.connect('/')

    nudgepad.socket.on('public', function (space) {
      nudgepad.trigger('public', space)
    })

    nudgepad.socket.on('uploadComplete', function (file) {
      nudgepad.trigger('uploadComplete', file)
    })

    nudgepad.socket.on('patch', function (space) {
      nudgepad.trigger('patch', space)
    })

    nudgepad.socket.on('connect_failed', function (error) {
      console.log('Connect failed')
      console.log(error)
      $('#nudgepadConnectionStatus').html('Connection to server failed...').show()
    })

    nudgepad.socket.on('error', function (error) {
      console.log(error)
      $('#nudgepadConnectionStatus').html('Connecting to server...').show()
    })

    nudgepad.socket.on('disconnect', function (message) {
      nudgepad.trigger('disconnect', message)
    })
    
    nudgepad.socket.on('collage.update', function (patch) {
      site.values.collage.patch(patch)
      nudgepad.trigger('collage.update')
      
    })
    
    nudgepad.socket.on('collage.delete', function (id) {
      var tabName = site.get('collage ' + id)
      nudgepad.notify(tabName.get('name') + ' closed a tab')
      site.values.collage.delete(id)
      nudgepad.trigger('collage.update')
    })
    
    nudgepad.socket.on('collage.create', function (patch) {
      patch = new Space(patch)
      site.values.collage.patch(patch)
      var id = patch.keys[0]
      nudgepad.notify(patch.get(id + ' name') + ' opened a tab')
    })

    nudgepad.socket.on('ack', function (message) {
      nudgepad.trigger('ping', message)
    })

    nudgepad.socket.on('connect', function (message) {
      console.log('connected to server %s', message)
      $('#nudgepadConnectionStatus').html('Connected!').fadeOut()
      nudgepad.restartCheck()
    })
    
    nudgepad.warnBeforeReload = true
    
    window.onbeforeunload = function(e) {
      if (nudgepad.warnBeforeReload)
        return nudgepad.reloadMessage()
    }
    
    $('body').scrollTop(0)
    $('body').scrollLeft(0)

    nudgepad.navigation.openAppFromQueryString()
    
    $('#nudgepadLoadingScreen').hide()
    
    // fetch other timelines in background for now
    // SLOW
    nudgepad.explorer.downloadTimelines()
    
    nudgepad.trigger('main')
    
    mixpanel.track('I opened NudgePad')
    
    if (nudgepad.query.newSite && !store.get('opens')) {
      store.set('opens', 1)
      var howLongItTookToCreateThisSite = new Date().getTime() - nudgepad.query.timestamp
      mixpanel.track('I created a new website', {
        'time' : howLongItTookToCreateThisSite
      })
      console.log('It took %sms to create this site', howLongItTookToCreateThisSite)
      
    }
      
    if (callback)
      callback()
    
  })
}

/**
 * Sends an patch to the server via websockets/scoketio.
 *
 * @param {string} Event name
 * @param {Space}
 */
nudgepad.emit = function (event, space) {
  if (nudgepad.isTesting)
    return null
  
  nudgepad.socket.emit(event, space.toString(), function (data) {
    console.log(data)
  })
}

/**
 * Remove an event listener
 *
 * @param {string} Name of the event.
 * @param {function} fn to unbind
 */
nudgepad.off = function (event, fn) {
  
}

/**
 * @param {string} Name of the event. Need to make some docs for these
 * @param {function}
 */
nudgepad.on = function (eventName, fn) {
  nudgepad.events[eventName].push(fn)
}

/**
 * Removes all dom elements.
 */
nudgepad.quit = function () {
  $('.scrap,.nudgepad').remove()
}


/**
 * Fire a Nudgepad event.
 *
 * @param {string} Name of the event.
 * @param {space} Object
 */
nudgepad.trigger = function (eventName, space) {
  for (var i in nudgepad.events[eventName]) {
    nudgepad.events[eventName][i](space)
  }
}
