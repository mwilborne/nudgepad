/**
 * @special Singleton
 */
var Explorer = {}
Explorer.paths = {}
Explorer.paths.project = '/nudgepad/projects/' + document.location.host  + '/'
Explorer.paths.private = Explorer.paths.project + 'private/'

/**
 * Create file ONLY if it does not exist
 */
Explorer.create = function (path, content, callback) {
  var req = {}
  req.path = path
  req.content = content || ''
  $.post('/nudgepad.explorer.create', req, function (data) {
    callback(data)
  })
}

Explorer.downloadTimelines = function () {
  $.get('/nudgepad.project.timelines', {}, function (data) {
    var space = new Space(data)
    if (Project.get('timelines'))
      Project.get('timelines').patch(space)
  })
}

/**
 * Edit a text file
 *
 * @param {string} File you want to edit
 */
Explorer.edit = function (path) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.fs.readFile', req, function (data) {
    TextPrompt.open('Editing ' + path, data, function (val) {
      var req = {}
      req.path = path
      req.content = val + ''
      $.post('/nudgepad.explorer.save', req, function (err) {
        if (err)
          console.log(err)
        else
          Alerts.success(path + ' saved')
      })
    })
  })
}

Explorer.getFolder = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.explorer.getFolder', req, function (data) {
    if (callback)
      callback(data)
  })
}

