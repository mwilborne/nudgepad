var Alerts = {}

Alerts.timeout = false

Alerts.clear = function () {
  $('#Alerts').hide()
}

Alerts.error = function (message) {
  $('#Alerts').html('<div class="alert alert-danger">' + message + '</div>').show()
  Popup.open('#Alerts')
  return false
}

Alerts.success = function (message, time) {
  clearTimeout(Alerts.timeout)
  $('#Alerts').html('<div class="alert nudgepadPopup alert-success">' + message + '</div>').show()
  Popup.open('#Alerts')
}

Alerts.activity = Alerts.success
