Events.shortcut.onfire = function (key) {
  mixpanel.track('I used the keyboard shortcut ' +  key)
}

/**
 * We manually add some shortcuts to certain functions.
 * This clearly could be cleaned up.
 */
nudgepad.bind_shortcuts = function () {
  
  Events.shortcut.shortcuts['meta+shift+p'] = Design.stage.selection.patchPrompt
  
  Events.shortcut.shortcuts['ctrl+a'] = Design.stage.selectAll
  Events.shortcut.shortcuts['meta+a'] = Design.stage.selectAll
  
  Events.shortcut.shortcuts['meta+p'] = function () { window.open(Design.stage.activePage, 'published') }
  

  Events.shortcut.shortcuts['meta+shift+left'] = Design.stage.selection.alignLeft
  Events.shortcut.shortcuts['meta+shift+right'] = Design.stage.selection.alignRight
  Events.shortcut.shortcuts['meta+shift+up'] = Design.stage.selection.alignTop
  Events.shortcut.shortcuts['meta+shift+down'] = Design.stage.selection.alignBottom
  
  Events.shortcut.shortcuts['meta+shift+v'] = Design.stage.selection.distributeVertical
  Events.shortcut.shortcuts['meta+shift+h'] = Design.stage.selection.distributeHorizontal
  Events.shortcut.shortcuts['shift+d'] = Design.stage.selection.distributeHorizontal
  
  Events.shortcut.shortcuts['alt+o'] = nudgepad.explorer.quickEdit
  
  Events.shortcut.shortcuts['meta+shift+s'] = nudgepad.edit_settings
  
  var deleteMethod = function () { Design.stage.selection.remove(); Design.stage.commit() }
  Events.shortcut.shortcuts['delete'] = deleteMethod
  Events.shortcut.shortcuts['backspace'] = deleteMethod
  
  Events.shortcut.shortcuts['ctrl+d'] = Design.stage.selection.duplicate
  Events.shortcut.shortcuts['meta+d'] = Design.stage.selection.duplicate
  
  var editSourceToggle = function () { ($('.selection').length ? Design.stage.selection.editSource() : Design.stage.editSource())}
  Events.shortcut.shortcuts['ctrl+u'] = editSourceToggle
  Events.shortcut.shortcuts['meta+u'] = editSourceToggle
  
  Events.shortcut.shortcuts['meta+shift+u'] = nudgepad.codePanel.toggle
  
  Events.shortcut.shortcuts['meta+e'] = Design.stage.selection.editProperty
  
  
  
  Events.shortcut.shortcuts['meta+l'] = Design.stage.selection.editLoop
  
  var contextMenuToggle = function () {$('#pagesContextMenu').toggle()}
  Events.shortcut.shortcuts['ctrl+i'] = contextMenuToggle
  Events.shortcut.shortcuts['meta+i'] = contextMenuToggle
  

  Events.shortcut.shortcuts['shift+space'] = function () {
    var command = prompt('Enter a command')
    if (!command)
      return false
    if (command.match(/^(w|width) (.*)/)) {
      var match = command.match(/^(w|width) (.*)/)
      Design.stage.selection.css('width ' + match[2])
    }
  }
  
  Events.shortcut.shortcuts['meta+shift+m'] = function () {nudgepad.explorer.edit('/public/manifest.webapp')}
  
  Events.shortcut.shortcuts['meta+backspace'] = Design.trash
  
  Events.shortcut.shortcuts['meta+o'] = Design.spotlight
  Events.shortcut.shortcuts['ctrl+o'] = Design.spotlight
  
  
  Events.shortcut.shortcuts['ctrl+n'] = Design.blank
  Events.shortcut.shortcuts['meta+n'] = Design.blank
  
  Events.shortcut.shortcuts['esc'] = Design.stage.selection.clear
  
  Events.shortcut.shortcuts['shift+n'] = Design.duplicate
  
  Events.shortcut.shortcuts['up'] = function (){Design.stage.selection.move(0, -1)}
  Events.shortcut.shortcuts['left'] = function (){Design.stage.selection.move(-1, 0)}
  Events.shortcut.shortcuts['down'] = function (){Design.stage.selection.move(0, 1)}
  Events.shortcut.shortcuts['right'] = function (){Design.stage.selection.move(1, 0)}
  
  Events.shortcut.shortcuts['shift+t'] = function (){ $('.nudgepadTimeline').toggle()}
  
  Events.shortcut.shortcuts['shift+v'] = Design.stage.toggleView
  
  Events.shortcut.shortcuts['shift+up'] = function (){Design.stage.selection.move(0, -10)}
  Events.shortcut.shortcuts['shift+left'] = function (){Design.stage.selection.move(-10, 0)}
  Events.shortcut.shortcuts['shift+down'] = function (){Design.stage.selection.move(0, 10)}
  Events.shortcut.shortcuts['shift+right'] = function (){Design.stage.selection.move(10, 0)}
  
  Events.shortcut.shortcuts['alt+left'] = Design.stage.back
  Events.shortcut.shortcuts['alt+right'] = Design.stage.forward
  
  Events.shortcut.shortcuts['ctrl+z'] = Design.stage.undo
  Events.shortcut.shortcuts['meta+z'] = Design.stage.undo
  Events.shortcut.shortcuts['meta+shift+z'] = Design.stage.redo
  Events.shortcut.shortcuts['meta+y'] = Design.stage.redo
  Events.shortcut.shortcuts['ctrl+y'] = Design.stage.redo
  Events.shortcut.shortcuts['meta+shift+c'] = Design.stage.selection.cssPrompt
  
}
