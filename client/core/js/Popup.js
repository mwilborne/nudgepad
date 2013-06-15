var Popup = {}

/**
 * @param {object} mouseup event
 */
Popup.hide = function (event) {

  if (event.which !== 1)
    return true
  console.log('hide')
  $('.nudgepadPopup').hide()
  console.log(event)
  $('body').off('mouseup touchend', Popup.hide)
  Popup.isOpen = false
  return true
}

Popup.isOpen = false

Popup.open = function (element) {
  $(element).addClass('nudgepadPopup').show()
  if (!Popup.isOpen) {
    $('body').on('mouseup touchend', Popup.hide)
    Popup.isOpen = true
  }
  
  return true
}

