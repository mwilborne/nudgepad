var Flasher = {}

Flasher.timeout = false

Flasher.flash = function (message, time) {
  Blinker.change(message)
  clearTimeout(Flasher.timeout)
  $('#Flasher').html(message)
  Popup.open('#Flasher')
  $('#Flasher').css('left', ($(window).width() - $('#Flasher').width())/2)
  if (time)
    Flasher.timeout = setTimeout("$('#Flasher').hide()", time)
}
