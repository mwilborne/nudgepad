/**
 * An app is just a page. should be contained in 1 file.
 * it has an id and a view.
 * head
 *  title title
 *
 */
function App(name) {
  this.name = name
  this._open = false
  App.apps.push(name)
}

App.apps = []

App.openApp = null

App.prototype.close = function (name) {

  // Return false if already closed
  if (!this._open)
    return false
    
  
  this._open = false
  App.openApp = false
  
  $('.nudgepadApp').hide()
  
  if (name)
    window[name].open()
  
}

/**
 * @return {bool}
 */
App.prototype.isOpen = function () {
  return this._open
}

App.prototype.open = function () {

  // Return false if already open
  if (this._open)
    return false
  
  // Close Any open app bar app
  if (App.openApp)
    return App.openApp.close(this.name)
  
  // On open event
  if (this.onopen)
    this.onopen()
  
  $('#nudgepad' + ToProperCase(this.name) + 'App').show()
  
  App.openApp = this
  this._open = true
  
  // todo: i think we can remove selection
  nudgepad.trigger('selection')
  
  // On ready event
  if (this.onready)
    this.onready()

  mixpanel.track('I opened the ' + this.name + ' app')

}

/**
 */
App.prototype.restart = function () {
  this.close()
  this.open()
}

App.prototype.toggle = function () {
  if (this._open)
    this.close()
  else
    this.open()
}

