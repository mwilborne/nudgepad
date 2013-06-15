/**
 * Prompt the worker for input. Pops a modal.
 *
 * @param {string} Name of any instructional message.
 * @param {string} Default value to prefill the prompt with.
 * @param {function} Function to run with whatever the worker entered.
 */
var TextPrompt = function (message, default_value, onsubmit, onkeypress, submitLabel) {
  var text_area = $('<textarea id="nudgepadEditorTextarea" class="nudgepad"></textarea>')
  text_area.val(default_value)
  var modal_screen = $('<div id="nudgepadEditorModalScreen" class="nudgepad"/>')
  modal_screen.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  text_area.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  if (onkeypress)
    text_area.on('keypress', onkeypress)
    
  var save_button = $('<div id="nudgepadEditorSaveButton" class="nudgepad">' + (submitLabel || 'Save') + '</div>')
  var cancel_button = $('<div id="nudgepadEditorCancelButton" class="nudgepad">Cancel</div>')
  
  var button_container = $('<div id="nudgepadEditorButtonContainer" class="nudgepad"></div>')
  modal_screen.on('click', function () {
    cancel_button.trigger('click')
  })
  
  cancel_button.on('click', function () {
    save_button.remove()
    text_area.remove()
    modal_screen.remove()
    button_container.remove()
    cancel_button.remove()
  })
  
  save_button.on('click', function () {
    if (onsubmit)
      onsubmit(text_area.val())
    
    save_button.remove()
    text_area.remove()
    modal_screen.remove()
    button_container.remove()
    cancel_button.remove()
  })
  
  // Firefox fix
  // replace false with isMozilla
  if (false) {
    text_area.css({
      width: $(window).width() - 100,
      height: $(window).height() - 200
    })
  }
  
  $('body').append(modal_screen)
  $('body').append(text_area)
  $('body').append(save_button)
  $('body').append(cancel_button)
  $('body').append(button_container)
  text_area.focus()
}
