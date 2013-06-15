var Flasher = {}

Flasher.timeout = false

Flasher.flash = function (message, time) {
  Blinker.change(message)
  clearTimeout(Flasher.timeout)
  $('#nudgepadNotify').html(message)
  nudgepad.popup.open('#nudgepadNotify')
  $('#nudgepadNotify').css('left', ($(window).width() - $('#nudgepadNotify').width())/2)
  if (time)
    Flasher.timeout = setTimeout("$('#nudgepadNotify').hide()", time)
}
