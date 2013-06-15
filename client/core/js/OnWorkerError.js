nudgepad.error = function (message) {
  $('#WorkerError').html(message)
  Popup.open('#WorkerError')
  return false
}

