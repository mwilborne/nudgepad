var Alerts = {}

Alerts.timeout = false

Alerts.error = function (message) {
  $('#AlertsError').html(message)
  Popup.open('#AlertsError')
  return false
}

Alerts.success = function (message, time) {
  clearTimeout(Alerts.timeout)
  $('#Alerts').html(message)
  Popup.open('#Alerts')
  $('#Alerts').css('left', ($(window).width() - $('#Alerts').width())/2)
  if (time)
    Alerts.timeout = setTimeout("$('#Alerts').hide()", time)
}

Alerts.activity = Alerts.success
