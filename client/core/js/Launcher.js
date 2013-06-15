// Nudgepad App navigation
var Launcher = {}

Launcher.open = function (name, dontRecord) {


  if (window[name])
    window[name].open()
  else
    return false

  if (dontRecord)
    return null
  
  if (nudgepad.isTesting)
    return null

  history.pushState(name, 'Nudgepad - ' + name, '/nudgepad?app=' + name)
}

Launcher.openAppFromQueryString = function () {
  
  // Get query string. If nothing, set default to Launch app
  var name = ParseQueryString().app || 'Launch'
  Launcher.open(name, true)
}

// Revert to a previously saved state
window.addEventListener('popstate', function (event) {
  Launcher.openAppFromQueryString()
})
