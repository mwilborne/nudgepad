/**
 * @special Singleton
 */
var Explorer = {}
Explorer.paths = {}
Explorer.paths.project = '/nudgepad/projects/' + document.location.host  + '/'
Explorer.paths.nudgepad = Explorer.paths.project + 'nudgepad/'

Explorer.folderToSpace = function (path, callback) {
  var req = {}
  req.path = path
  $.post( '/nudgepad.explorer.folderToSpace', req, function (data) {
    if (callback)
      callback(data)
  })
}


