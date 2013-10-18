Pages.Page = function (filename) {
  this.filename = filename
  return this
}

Pages.Page.prototype = new Space()

Pages.Page.prototype.open = function (callback) {
  var page = this
  expressfs.readFile(this.filename, function (data) {
    page.reload($.htmlToScraps(data))
    page.render()
    store.set('PagesFilename', page.filename)
  })
}

Pages.Page.prototype.publish = function () {
  var htmlString = html_beautify(new Scraps.Page(this.toString()).toHtml({wrap: true}), {
    'indent-size' : 2,
    'indent-char' : ' ',
    'indent-inner-html' : true
  })
  expressfs.writeFileAndOpen(this.filename, htmlString)
}

Pages.Page.prototype.render = function () {
  var page = new Scraps.Page(this.toString())
  var html = page.toHtml({wrap: true, filter : function () {
    // dont render scripts
    if (this.div.tag === 'script')
      this.div.draft = true
    this.div.attr('data-index', this.index)
    this.div.addClass('PagesScrap')
  }})
  var body = $('#PagesStage').contents().find('body')
  body.html(html)
  body.on('click', '*', function (event) {
    
    if ($(this).is('a'))
      event.preventDefault()

    // only select leafs
    if ($(this).find('.PagesScrap').length)
      return true
    if (!$(this).hasClass('PagesScrap'))
      return true
    var text = $(this).text()
    if (!text.length)
      return true
    $(this).attr('contenteditable', true)
    $(this).focus()
    $(this).on('blur', function () {
      $(this).removeAttr('contenteditable')
      var content = $(this).html()
      var index = $(this).attr('data-index')
      console.log(index)
      if (Pages.page.getByIndexPath(index) instanceof Space)
        Pages.page.getByIndexPath(index).set('content', content)
      // concise
      else
        Pages.page.setByIndexPath(index, content)
    })
  })
  $('#PagesStage').css('visibility', '')
  //   var options = {}
  // $( "#PagesStage" ).droppable(options)
}

Pages.Page.prototype.save = function () {
  
}

Pages.Page.prototype.toConciseString = function () {
  return new Scraps.Page(this.toString()).toConciseString()
}

Pages.Page.prototype.toHtml = function () {
  var htmlString = html_beautify(new Scraps.Page(this.toString()).toHtml({wrap: true}), {
    'indent-size' : 2,
    'indent-char' : ' ',
    'indent-inner-html' : true
  })
  return htmlString
}





