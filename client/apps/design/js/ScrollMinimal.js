// adapted from http://stackoverflow.com/questions/4217962/scroll-to-an-element-using-jquery
$.fn.scrollMinimal = function(smooth) {
  var cTop = this.position().top
  var cHeight = this.outerHeight(true)
  var windowTop = $('#DesignStage').scrollTop()
  var visibleHeight = $('#DesignStage').height()

  if (cTop < windowTop) {
    if (smooth) {
      $('#DesignStage').animate({'scrollTop': cTop}, 'slow', 'swing')
    } else {
      $('#DesignStage').scrollTop(cTop)
    }
  } else if (cTop + cHeight > windowTop + visibleHeight) {
    if (smooth) {
      $('#DesignStage').animate({'scrollTop': cTop - visibleHeight + cHeight}, 'slow', 'swing')
    } else {
      $('#DesignStage').scrollTop(cTop - visibleHeight + cHeight)
    }
  }
};

