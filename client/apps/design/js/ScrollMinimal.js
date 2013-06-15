// adapted from http://stackoverflow.com/questions/4217962/scroll-to-an-element-using-jquery
$.fn.scrollMinimal = function(smooth) {
  var cTop = this.position().top
  var cHeight = this.outerHeight(true)
  var windowTop = $('#nudgepadStage').scrollTop()
  var visibleHeight = $('#nudgepadStage').height()

  if (cTop < windowTop) {
    if (smooth) {
      $('#nudgepadStage').animate({'scrollTop': cTop}, 'slow', 'swing')
    } else {
      $('#nudgepadStage').scrollTop(cTop)
    }
  } else if (cTop + cHeight > windowTop + visibleHeight) {
    if (smooth) {
      $('#nudgepadStage').animate({'scrollTop': cTop - visibleHeight + cHeight}, 'slow', 'swing')
    } else {
      $('#nudgepadStage').scrollTop(cTop - visibleHeight + cHeight)
    }
  }
};

