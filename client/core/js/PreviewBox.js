var PreviewBox = {}

PreviewBox.close = function () {
  $('.PreviewBox').hide()
}

PreviewBox.open = function (html) {
  
  $('#PreviewBoxContainer').html(html)
  $('.PreviewBox').show().css('display', '-webkit-flex')

}

PreviewBox.toggle = function (html) {
  if ($('.PreviewBox:visible').length > 0)
    PreviewBox.close()
  else
    PreviewBox.open(html)
}
