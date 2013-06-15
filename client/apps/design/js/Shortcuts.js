
/**
 * We manually add some shortcuts to certain functions.
 * This clearly could be cleaned up.
 */
Design.shortcuts = {}
Design.shortcuts['meta+shift+p'] = Design.stage.selection.patchPrompt

Design.shortcuts['ctrl+a'] = Design.stage.selectAll
Design.shortcuts['meta+a'] = Design.stage.selectAll

Design.shortcuts['meta+p'] = function () { window.open(Design.stage.activePage, 'published') }


Design.shortcuts['meta+shift+left'] = Design.stage.selection.alignLeft
Design.shortcuts['meta+shift+right'] = Design.stage.selection.alignRight
Design.shortcuts['meta+shift+up'] = Design.stage.selection.alignTop
Design.shortcuts['meta+shift+down'] = Design.stage.selection.alignBottom

Design.shortcuts['meta+shift+v'] = Design.stage.selection.distributeVertical
Design.shortcuts['meta+shift+h'] = Design.stage.selection.distributeHorizontal
Design.shortcuts['shift+d'] = Design.stage.selection.distributeHorizontal

Design.shortcuts['alt+o'] = nudgepad.explorer.quickEdit

Design.shortcuts['meta+shift+s'] = nudgepad.edit_settings

Design.deleteShortcut = function () { Design.stage.selection.remove(); Design.stage.commit() }
Design.shortcuts['delete'] = Design.deleteShortcut
Design.shortcuts['backspace'] = Design.deleteShortcut

Design.shortcuts['ctrl+d'] = Design.stage.selection.duplicate
Design.shortcuts['meta+d'] = Design.stage.selection.duplicate

Design.editSourceToggle = function () { ($('.selection').length ? Design.stage.selection.editSource() : Design.stage.editSource())}
Design.shortcuts['ctrl+u'] = Design.editSourceToggle
Design.shortcuts['meta+u'] = Design.editSourceToggle

Design.shortcuts['meta+shift+u'] = nudgepad.codePanel.toggle

Design.shortcuts['meta+e'] = Design.stage.selection.editProperty


Design.shortcuts['meta+l'] = Design.stage.selection.editLoop

Design.contextMenuToggle = function () {$('#pagesContextMenu').toggle()}
Design.shortcuts['ctrl+i'] = Design.contextMenuToggle
Design.shortcuts['meta+i'] = Design.contextMenuToggle


Design.shortcuts['shift+space'] = function () {
  var command = prompt('Enter a command')
  if (!command)
    return false
  if (command.match(/^(w|width) (.*)/)) {
    var match = command.match(/^(w|width) (.*)/)
    Design.stage.selection.css('width ' + match[2])
  }
}

Design.shortcuts['meta+shift+m'] = function () {nudgepad.explorer.edit('/public/manifest.webapp')}

Design.shortcuts['meta+backspace'] = Design.trash

Design.shortcuts['meta+o'] = Design.spotlight
Design.shortcuts['ctrl+o'] = Design.spotlight


Design.shortcuts['ctrl+n'] = Design.blank
Design.shortcuts['meta+n'] = Design.blank

Design.shortcuts['esc'] = Design.stage.selection.clear

Design.shortcuts['shift+n'] = Design.duplicate

Design.shortcuts['up'] = function (){Design.stage.selection.move(0, -1)}
Design.shortcuts['left'] = function (){Design.stage.selection.move(-1, 0)}
Design.shortcuts['down'] = function (){Design.stage.selection.move(0, 1)}
Design.shortcuts['right'] = function (){Design.stage.selection.move(1, 0)}

Design.shortcuts['shift+t'] = function (){ $('.nudgepadTimeline').toggle()}

Design.shortcuts['shift+v'] = Design.stage.toggleView

Design.shortcuts['shift+up'] = function (){Design.stage.selection.move(0, -10)}
Design.shortcuts['shift+left'] = function (){Design.stage.selection.move(-10, 0)}
Design.shortcuts['shift+down'] = function (){Design.stage.selection.move(0, 10)}
Design.shortcuts['shift+right'] = function (){Design.stage.selection.move(10, 0)}

Design.shortcuts['alt+left'] = Design.stage.back
Design.shortcuts['alt+right'] = Design.stage.forward

Design.shortcuts['ctrl+z'] = Design.stage.undo
Design.shortcuts['meta+z'] = Design.stage.undo
Design.shortcuts['meta+shift+z'] = Design.stage.redo
Design.shortcuts['meta+y'] = Design.stage.redo
Design.shortcuts['ctrl+y'] = Design.stage.redo
Design.shortcuts['meta+shift+c'] = Design.stage.selection.cssPrompt