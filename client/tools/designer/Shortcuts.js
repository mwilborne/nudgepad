Designer.trackShortcuts  = function (key) {
  mixpanel.track('I used the Designer keyboard shortcut ' +  key)
}

Designer.shortcuts = {}

Designer.shortcuts['ctrl+a'] = Designer.stage.selectAll
Designer.shortcuts['meta+a'] = Designer.stage.selectAll

Designer.shortcuts['meta+p'] = function () { window.open(Designer.stage.activePage + '.html?' + new Date().getTime(), 'published') }


Designer.deleteShortcut = function () { Designer.stage.selection.delete(); Designer.stage.commit() }
Designer.shortcuts['delete'] = Designer.deleteShortcut
Designer.shortcuts['backspace'] = Designer.deleteShortcut

Designer.shortcuts['ctrl+d'] = Designer.stage.selection.duplicate
Designer.shortcuts['meta+d'] = Designer.stage.selection.duplicate

Designer.editSourceToggle = function () { (Designer.stage.selection.elements().length ? Designer.stage.selection.editSource() : Designer.stage.editSource())}
Designer.shortcuts['ctrl+u'] = Designer.editSourceToggle
Designer.shortcuts['meta+u'] = Designer.editSourceToggle

Designer.shortcuts['meta+backspace'] = Designer.menu.delete

Designer.shortcuts['meta+o'] = Designer.menu.spotlight
Designer.shortcuts['ctrl+o'] = Designer.menu.spotlight

Designer.shortcuts['ctrl+n'] = Designer.menu.blank
Designer.shortcuts['meta+n'] = Designer.menu.blank

Designer.shortcuts['esc'] = Designer.stage.selection.clear

Designer.shortcuts['shift+n'] = Designer.menu.duplicate

Designer.shortcuts['up'] = function (){Designer.stage.selection.move(0, -1)}
Designer.shortcuts['left'] = function (){Designer.stage.selection.move(-1, 0)}
Designer.shortcuts['down'] = function (){Designer.stage.selection.move(0, 1)}
Designer.shortcuts['right'] = function (){Designer.stage.selection.move(1, 0)}

Designer.shortcuts['shift+up'] = function (){Designer.stage.selection.move(0, -10)}
Designer.shortcuts['shift+left'] = function (){Designer.stage.selection.move(-10, 0)}
Designer.shortcuts['shift+down'] = function (){Designer.stage.selection.move(0, 10)}
Designer.shortcuts['shift+right'] = function (){Designer.stage.selection.move(10, 0)}

Designer.shortcuts['alt+left'] = Designer.stage.back
Designer.shortcuts['alt+right'] = Designer.stage.forward

Designer.shortcuts['ctrl+z'] = Designer.stage.undo
Designer.shortcuts['meta+z'] = Designer.stage.undo
Designer.shortcuts['meta+shift+z'] = Designer.stage.redo
Designer.shortcuts['meta+y'] = Designer.stage.redo
Designer.shortcuts['ctrl+y'] = Designer.stage.redo

Designer.shortcuts['shift+/'] = function () {
  var html = $('#DesignerShortcuts').html()
  PreviewBox.toggle(html)
}

