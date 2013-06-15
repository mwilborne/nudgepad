nudgepad.error = function (message) {
  $('#nudgepadWorkerError').html(message)
  Popup.open('#nudgepadWorkerError')
  return false
}

