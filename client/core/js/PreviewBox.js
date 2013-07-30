var PreviewBox = {}
PreviewBox.template = null

PreviewBox.close = function (event) {
  $(PreviewBox.template).remove()
  PreviewBox.template = null
}

PreviewBox.open = function (html) {
  var string = $('#PreviewBoxTemplate').html()
  var template = $(string.trim())
  template.find('#PreviewBoxContainer')
    .html(html)
  template.find('#PreviewBoxWhiteBox')
    .on('click mouseup mousedown slide slidestart slideend', function (event) {
      event.stopPropagation()
    })
  
  template.on('click', function (event) {
    PreviewBox.close()
  })
  $('body').append(template)
  PreviewBox.template = template
}

PreviewBox.toggle = function (html) {
  if (PreviewBox.template)
    PreviewBox.close()
  else
    PreviewBox.open(html)
}
