/**
 * @special Singleton
 */
var Explorer = {}
Explorer.paths = {}
Explorer.paths.project = '/nudgepad/projects/' + document.location.host  + '/'
Explorer.paths.private = Explorer.paths.project + 'private/'

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
  expressfs.readFile( path, function (data) {
    TextPrompt.open('Editing ' + path, data, function (val) {
      expressfs.writeFile(path, val.toString(), function (err) {
        if (err)
          console.log(err)
        else
          Alerts.success(path + ' saved')
      })
    })
  })
}

Explorer.folderToSpace = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.explorer.folderToSpace', req, function (data) {
    if (callback)
      callback(data)
  })
}


