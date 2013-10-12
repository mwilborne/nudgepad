// Nudgepad Tool navigation
var Launcher = {}

// Issue #291 Allow keeping of someone in 1 Tool for a project.
Launcher.locked = null

Launcher.open = function (name, dontRecord) {

  if (Launcher.locked)
    return window[Launcher.locked].open()

  if (window[name])
    window[name].open()
  else
    return false

  if (dontRecord)
    return null
  
  if (nudgepad.isTesting)
    return null

  history.pushState(name, 'Nudgepad - ' + name, '/nudgepad?tool=' + name)
}

Launcher.openToolFromQueryString = function () {
  
  // Get query string. If nothing, set default to Home tool
  var name = ParseQueryString().tool || 'Files'
  Launcher.open(name, true)
}
