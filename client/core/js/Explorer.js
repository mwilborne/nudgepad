/**
 * @special Singleton
 */
nudgepad.explorer = {}

nudgepad.explorer.create = function (path, callback) {
  var req = {}
  req.path = path
  req.content = ''
  $.post('/nudgepad.explorer.save', req, function (err) {
    callback()
  })
}

nudgepad.explorer.downloadTimelines = function () {
  $.get('/nudgepad.site.timelines', {}, function (data) {
    var space = new Space(data)
    space.delete(Design.stage.activePage) // We already have the open page
    site.get('timelines').patch(space)
  })
}

/**
 * Sync the clients site with the server.
 *
 * @param {function}
 */
nudgepad.explorer.getSite = function (callback) {
  var activePage = store.get('activePage') || 'home'
  $.get('/nudgepad.site', { activePage : activePage, id : nudgepad.id }, function (space) {
    site = new Space(space)
    var online = site.get('collage').keys.length + 1
    var title = nudgepad.domain + '. ' + online + ' user' + (online > 1 ? 's' : '') + ' online.'
    Blinker.default = title
    document.title = title
    callback()
  })
}

nudgepad.explorer.quickEdit = function () {
  nudgepad.explorer.edit(prompt('Enter path to file you want to edit', 'public/nudgepad.site.css'))
}

nudgepad.explorer.remove = function (path, callback) {
  var req = {}
  req.path = path
  $.post( 'nudgepad.explorer.remove', req, function (data) {
    callback()
  })
}

nudgepad.explorer.rename = function (oldPath, newPath, callback) {
  var req = {}
  req.oldPath = oldPath
  req.newPath = newPath
  if (!newPath)
    return nudgepad.error('No name provided')
  $.post('/nudgepad.explorer.rename', req, function (err) {
    callback()
  })
}

/**
 * Edit a text file
 *
 * @param {string} File you want to edit
 */
nudgepad.explorer.edit = function (path) {
  var req = {}
  req.path = path
  $.post( 'nudgepad.explorer.get', req, function (data) {
    nudgepad.textPrompt('Editing ' + path, data, function (val) {
      var req = {}
      req.path = path
      req.content = val + ''
      $.post('/nudgepad.explorer.save', req, function (err) {
        console.log(err)
      })
    })
  })
}



