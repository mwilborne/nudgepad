var PreviewBox = function (html) {
  
  $('#PreviewBoxContainer').html(html)
  $('.PreviewBox').show().css('display', '-webkit-flex')
  $('.PreviewBox').on('click', function (event) {
    $('.PreviewBox').hide()
    $(this).off( event )
  })
  
}
