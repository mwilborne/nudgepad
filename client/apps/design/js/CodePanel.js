nudgepad.codePanel = {}

nudgepad.codePanel.livePreview = false
nudgepad.codePanel.livePreviewTimeout = false
nudgepad.codePanel.livePreviewStart = function () {
  clearTimeout(nudgepad.codePanel.livePreviewTimeout)
  nudgepad.codePanel.livePreviewTimeout = setTimeout('nudgepad.codePanel.livePreview()', 500)
}
nudgepad.codePanel.livePreview = function () {
  var space = new Space($('#nudgepadCodePanel').val())
  if (Design.stage.selection.exists()) {
    Design.stage.selection.clear()
  }
//    Design.page.patch(Design.stage.selection.captured.diff(space))
//    Design.stage.render()
//  } else {
    Design.page = new Page(space)
    Design.stage.render()
//  }
}

nudgepad.codePanel.close = function () {
  $('#nudgepadCodePanel').hide()
  $('#nudgepadStage').css('padding-left', nudgepad.codePanel.currentPadding)
  nudgepad.off('selection', nudgepad.codePanel.load)
  nudgepad.off('stage', nudgepad.codePanel.load)
}

nudgepad.codePanel.isOpen = function () {
  return $('#nudgepadCodePanel:visible').length > 0
}

nudgepad.codePanel.load = function () {
  var textarea = $('#nudgepadCodePanel')
  // todo: allow for just showing of selection
//  if (Design.stage.selection.exists()) {
//    Design.stage.selection.clear()
//    Design.stage.selection.capture()
//    Design.stage.selection.save()
//    textarea.val(Design.stage.selection.toSpace().toString())
//  } else
  textarea.val(Design.page.toString())
}

nudgepad.codePanel.open = function () {
  var textarea = $('#nudgepadCodePanel')
  textarea.show()
  nudgepad.codePanel.currentPadding = $('#nudgepadStage').css('padding-left')
  $('#nudgepadStage').css('padding-left', '40%')
  nudgepad.codePanel.load()
  textarea.on('keyup', nudgepad.codePanel.livePreviewStart)
  textarea.on('blur', Design.stage.commit)
  textarea.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  nudgepad.on('selection', nudgepad.codePanel.load)
  nudgepad.on('stage', nudgepad.codePanel.load)
}

nudgepad.codePanel.toggle = function () {
  if (nudgepad.codePanel.isOpen())
    nudgepad.codePanel.close()
  else
    nudgepad.codePanel.open()
}
