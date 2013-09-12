/**
 * @special Singleton
 */
var Explorer = {}
Explorer.paths = {}
Explorer.paths.project = '/nudgepad/projects/' + document.location.host  + '/'
Explorer.paths.nudgepad = Explorer.paths.project + 'nudgepad/'

/**
 * Edit a text file
 *
 * @param {string} File you want to edit
 */
Explorer.edit = function (path, callback) {
  expressfs.readFile( path, function (data) {
    TextPrompt.open('Editing ' + path, data, path, function (val) {
      expressfs.writeFile(path, val.toString(), function (err) {
        if (err)
          console.log(err)
        else
          Alerts.success(path + ' saved')
        if (callback)
          callback()
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


