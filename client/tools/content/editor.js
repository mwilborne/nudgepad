Content.Editor = {}

Content.Editor.filter = function () {
  if (this.div.tag === 'script')
    return ''
  // Remove JS
  _.each(this.div.attrs, function (value, key, obj) {
    if (key.match(/^on/))
      delete obj[key]
  })
  return this.div.toHtml()
}

Content.Editor.open = function (filename) {
  var page = Content.get('pages ' + filename)
  
  var html = ''
  page.each(function (id, scrap) {
    html += '\n  ' + scrap.toHtml(Content.Editor.filter)
  })

  $('#ContentStage').contents().find('body').html(html)
  
  $('#ContentStage').contents().find('body').on('click', 'a', function (event) {
    event.preventDefault()
    return false
  })
  
  Content.Editor.text = ''
  
  $('#ContentStage').contents().find('body').on('click', '*', function (event) {
    var text = $(this).text()
    if (!text.length)
      return true
    Content.Editor.text = text
    $(this).attr('contenteditable', true)
    $(this).focus()
    $(this).on('blur', function () {
      var newPage = new Scraps.Page(page.toString().replace(text, $(this).text()))
      expressfs.writeFile('nudgepad/pages/' + filename, newPage.toString())
      Content.set('pages ' + filename, newPage)
      expressfs.writeFile(filename.replace('.space', '.html'), newPage.toHtml())
      page = newPage
    })
  })
  
  //  var host = document.querySelector('#ContentStage')
  //  var root = host.webkitCreateShadowRoot()
  //  root.innerHTML = page.toHtml()  
//  $('#ContentStage')[0].innerHTML = html
}

