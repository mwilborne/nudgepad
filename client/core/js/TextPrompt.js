var TextPrompt = {}

TextPrompt.ace = true

TextPrompt.callback = function () {}

TextPrompt.save = function () {
  // allow to save without closing
  var value = TextPrompt.value()
  if (TextPrompt.callback && TextPrompt.callback(value) === false)
    return true
  TextPrompt.close()
}

TextPrompt.close = function () {
  $('.TextPrompt').remove()
  // temporary
  if (!TextPrompt.onclose)
    return null
  
  TextPrompt.onclose()
  TextPrompt.onclose = null
}

TextPrompt.open = function (message, defaultValue, filename, callback) {
  
  $('body').append($('#TextPrompt').html())
  
  TextPrompt.callback = callback
  
  var dimmer = $('#TextPromptDimmer')

  dimmer.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  
  dimmer.on('click', TextPrompt.close)
  var height = Math.round($(window).height() * .8)
  
  if (TextPrompt.ace) {
    
    $('#TextPromptTextarea').parent().hide()
    
    $('#AcePromptHolder').height(height)
    
//    $('#TextPromptTextarea')
//      .replaceWith('<div id="TextPromptTextarea" style="position: absolute;top: 0;left: 0; height: ' + height + 'px;"></div>')
//      .html(defaultValue)
    
    
    var mode = filename.match(/\.([^\.]+)$/)[1]
    if (mode === 'js')
      mode = 'javascript'
    
    TextPrompt.editor = ace.edit("AcePrompt")
    TextPrompt.editor.setTheme("ace/theme/monokai")
    TextPrompt.editor.setShowPrintMargin(false)
    TextPrompt.editor.getSession().setMode("ace/mode/" + mode)
    TextPrompt.editor.setValue(defaultValue)
    TextPrompt.editor.focus()
    TextPrompt.editor.clearSelection()
  }
  
  else {
    
    var textArea = $('#TextPromptTextarea')
    textArea.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
      event.stopPropagation()
    })
    
    $('#TextPromptTextarea').css('height', height + 'px')
    $('#TextPromptTextarea').val(defaultValue).focus()
    
  }
  

  
}

TextPrompt.value = function (value) {
  if (!value) {
    if (TextPrompt.ace)
      return TextPrompt.editor.getValue()
    else
      return $('#TextPromptTextarea').val()
  }
  else {
    if (TextPrompt.ace)
      return TextPrompt.editor.setValue(value)
    else
      return $('#TextPromptTextarea').val(value)
  }
}

