// Nudgepad App navigation
nudgepad.navigation = {}

nudgepad.navigation.open = function (name, dontRecord) {


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

nudgepad.navigation.openAppFromQueryString = function () {
  
  // Get query string. If nothing, set default to Launch app
  var name = ParseQueryString().app || 'Launch'
  nudgepad.navigation.open(name, true)
}

// Revert to a previously saved state
window.addEventListener('popstate', function (event) {
  nudgepad.navigation.openAppFromQueryString()
})
