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
    
  
  if (this.oncopy)
    window.removeEventListener('copy', this.oncopy, false)
    
  if (this.oncut)
    window.removeEventListener('cut', this.oncut, false)
  
  if (this.onpaste)
    window.removeEventListener('paste', this.onpaste, false)

  if (this.ondrop)
    window.removeEventListener('drop', this.ondrop, false)

  if (this.onresize)
    window.removeEventListener('resize', this.onresize, false)

  if (this.onkeydown)
    $("body").off("keydown", this.onkeydown)

  Events.shortcut.shortcuts = {}
  
  if (this.onclose)
    this.onclose()

  this._open = false
  App.openApp = false
  
  $('.App').hide()
  
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
  
  $('.App#' + this.name).show()
  
  App.openApp = this
  this._open = true
  
  // todo: i think we can remove selection
  nudgepad.trigger('selection')
  
  if (this.oncopy)
    window.addEventListener('copy', this.oncopy, false)
  
  if (this.oncut)
    window.addEventListener('cut', this.oncut, false)

  if (this.onpaste)
    window.addEventListener('paste', this.onpaste, false)

  if (this.ondrop)
    window.addEventListener('drop', this.ondrop, false)

  if (this.onresize)
    window.addEventListener('resize', this.onresize, false)
    
  if (this.onkeydown)
    $("body").on("keydown", this.onkeydown)  
  
  if (this.shortcuts)
    Events.shortcut.shortcuts = this.shortcuts
  

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

