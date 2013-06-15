Design.codePanel = {}

Design.codePanel.livePreview = false
Design.codePanel.livePreviewTimeout = false
Design.codePanel.livePreviewStart = function () {
  clearTimeout(Design.codePanel.livePreviewTimeout)
  Design.codePanel.livePreviewTimeout = setTimeout('Design.codePanel.livePreview()', 500)
}
Design.codePanel.livePreview = function () {
  var space = new Space($('#DesignCodePanel').val())
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

Design.codePanel.close = function () {
  $('#DesignCodePanel').hide()
  $('#DesignStage').css('padding-left', Design.codePanel.currentPadding)
  nudgepad.off('selection', Design.codePanel.load)
  nudgepad.off('stage', Design.codePanel.load)
}

Design.codePanel.isOpen = function () {
  return $('#DesignCodePanel:visible').length > 0
}

Design.codePanel.load = function () {
  var textarea = $('#DesignCodePanel')
  // todo: allow for just showing of selection
//  if (Design.stage.selection.exists()) {
//    Design.stage.selection.clear()
//    Design.stage.selection.capture()
//    Design.stage.selection.save()
//    textarea.val(Design.stage.selection.toSpace().toString())
//  } else
  textarea.val(Design.page.toString())
}

Design.codePanel.open = function () {
  var textarea = $('#DesignCodePanel')
  textarea.show()
  Design.codePanel.currentPadding = $('#DesignStage').css('padding-left')
  $('#DesignStage').css('padding-left', '40%')
  Design.codePanel.load()
  textarea.on('keyup', Design.codePanel.livePreviewStart)
  textarea.on('blur', Design.stage.commit)
  textarea.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  nudgepad.on('selection', Design.codePanel.load)
  nudgepad.on('stage', Design.codePanel.load)
}

Design.codePanel.toggle = function () {
  if (Design.codePanel.isOpen())
    Design.codePanel.close()
  else
    Design.codePanel.open()
}
