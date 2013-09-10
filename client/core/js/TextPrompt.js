var TextPrompt = {}

TextPrompt.callback = function () {}

TextPrompt.save = function () {
  // allow to save without closing
  if (TextPrompt.callback && TextPrompt.callback($('#TextPromptTextarea').val()) === false)
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

TextPrompt.open = function (message, default_value, callback) {
  
  $('body').append($('#TextPrompt').html())
  
  TextPrompt.callback = callback
  
  var textArea = $('#TextPromptTextarea')
  var dimmer = $('#TextPromptDimmer')

  dimmer.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  
  textArea.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  
  dimmer.on('click', TextPrompt.close)
  $('#TextPromptTextarea').css('height', Math.round($(window).height() * .8) + 'px')
  $('#TextPromptTextarea').val(default_value).focus()
}

