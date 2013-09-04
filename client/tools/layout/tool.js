var Layout = new Tool('Layout')
Layout.set('description', 'Layout pages quickly.')
Layout.set('beta', true)
Layout.set('icon', 'th')

Layout.on('ready', function () {
  var template = $('.LayoutCell').clone()
  $('#LayoutStage').on('click', '.splitHorizontal', function () {
    var clone = template.clone()
    clone.css('height', '50%')
    $(this).parent().parent().append(clone)
    var clone2 = template.clone()
    clone2.css('height', '50%')
    $(this).parent().parent().append(clone2)
    $(this).parent().remove()
  })
  $('#LayoutStage').on('click', '.splitVertical', function () {
    var clone = template.clone()
    clone.css('width', '50%')
    $(this).parent().parent().append(clone)
    var clone2 = template.clone()
    clone2.css('width', '50%')
    $(this).parent().parent().append(clone2)
    $(this).parent().remove()
  })
  $('#LayoutStage').on('click', '.layoutText', function () {
    var cell = $(this).parent().parent()
    cell
      .attr('contenteditable', true)
      .css('line-height', cell.height() + 'px')
    $(this).parent().remove()
    cell.focus()
  })
  $('#LayoutStage').on('slidestart', '.LayoutCell', function () {
    $(this).css('background', 'red')
    return false
  })
  $('#LayoutStage').on('slideend', '.LayoutCell', function (event, mouseup) {
    
    var x1 = Events.slide.mousedown.x
    var y1 = Events.slide.mousedown.y
    var x2 = mouseup.x
    var y2 = mouseup.y
    
    var matches = $('.LayoutCell').getElementsByLine(x1, y1, x2, y2)
    matches.forEach(function (match) {
      // dont merge parent elements
      if ($(match).find('.LayoutCell').length)
        return true
      $(match).css('background', 'blue')
    })
    return false
  })
  
})

Layout.template = '<!doctype html>\
<html>\
  <head>\
  <title id="title">Untitled</title>\
  <style id="style">\
  #LayoutPage {\
  font-family: Helvetica;\
  font-weight: 200;\
  padding: 0;\
  margin: 0;\
  font-size: 100px;\
  }\
  .LayoutCell {\
    position: relative;\
    color: grey;\
    width: 100%;\
    height: 100%;\
    text-align: center;\
    font-size: 0.75em;\
    margin: 0;\
    padding: 0;\
    box-sizing: border-box;\
    float: left;\
  }\
  </style>\
  </head>\
  <body id="LayoutPage">BODY</body>\
</html>'

Layout.publish = function () {
  var template = Layout.template
  var html = $('#LayoutStage').clone()
  html.find('.LayoutCellControls').remove()
  html.find('.LayoutCell').removeAttr('contenteditable')
  html = html.html()
  html = template.replace(/BODY/, html)
  var filename = prompt('Enter a filename', 'layout.html')
  if (!filename)
    return false
  expressfs.writeFileAndOpen(filename, html, 'published')
}

Layout.splitVertical = function () {
  $('.selected')
    .append('<div class="LayoutCell" style="width: 50%;"></div><div class="LayoutCell" style="width: 50%;"></div>')
}

Layout.splitHorizontal = function () {
  $('.selected')
    .append('<div class="LayoutCell" style="height: 50%;"></div><div class="LayoutCell" style="height: 50%;"></div>')
}


