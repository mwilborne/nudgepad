var Layout = new Tool('Layout')
Layout.set('description', 'Layout pages quickly.')
Layout.set('beta', true)

Layout.on('open', function () {
  var template = $('.LayoutCell').clone()
  $(document).on('click', '.splitHorizontal', function () {
    var clone = template.clone()
    clone.css('height', '50%')
    $(this).parent().parent().append(clone)
    var clone2 = template.clone()
    clone2.css('height', '50%')
    $(this).parent().parent().append(clone2)
    $(this).parent().remove()
  })
  $(document).on('click', '.splitVertical', function () {
    var clone = template.clone()
    clone.css('width', '50%')
    $(this).parent().parent().append(clone)
    var clone2 = template.clone()
    clone2.css('width', '50%')
    $(this).parent().parent().append(clone2)
    $(this).parent().remove()
  })
  $(document).on('click', '.layoutText', function () {
    var cell = $(this).parent().parent()
    cell
      .attr('contenteditable', true)
      .css('line-height', cell.height() + 'px')
    $(this).parent().remove()
    cell.focus()
  })
})

Layout.publish = function () {
  var template = $('#LayoutTemplate').html()
  var html = $('#LayoutStage').clone()
  html.find('.LayoutCellControls').remove()
  html.find('.LayoutCell').removeAttr('contenteditable')
  html = html.html()
  html = template.replace(/BODY/, html)
  var filename = prompt('Enter a filename', 'layout.html')
  if (!filename)
    return false
  fs.writeFileAndOpen(filename, html)
}

Layout.splitVertical = function () {
  $('.selected')
    .append('<div class="LayoutCell" style="width: 50%;"></div><div class="LayoutCell" style="width: 50%;"></div>')
}

Layout.splitHorizontal = function () {
  $('.selected')
    .append('<div class="LayoutCell" style="height: 50%;"></div><div class="LayoutCell" style="height: 50%;"></div>')
}


