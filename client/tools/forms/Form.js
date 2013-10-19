Forms.Form = function (filename) {
  this.filename = filename
  this.page = new Scraps.Page()
}

Forms.Form.prototype = new Space()

Forms.Form.prototype.create = function (callback) {
  this.page = new Scraps.Page($('#FormsTemplate').text())
  var form = this
  this.save(function () {
    form.open()
  })
}

Forms.Form.prototype.open = function (callback) {
  var form = this
  expressfs.readFile(this.filename, function (data) {
    form.page = new Scraps.Page($.htmlToScraps(data))
    form.render()
    store.set('FormsFilename', form.filename)
  })
}

Forms.Form.prototype.publish = function (callback) {
  var htmlString = html_beautify(this.page.toHtml({wrap: true}), {
    'indent-size' : 2,
    'indent-char' : ' ',
    'indent-inner-html' : true
  })
  expressfs.writeFileAndOpen(this.filename, htmlString, callback)
}

Forms.Form.prototype.render = function (filename) {
  $( '#FormsStage' ) .html( this.page.toHtml({filter : Forms.filter, wrap : true}) )
  $( '#FormsSource' ) .val( this.page.toConciseString() )
  $('#FormsEditor').show()
}

Forms.Form.prototype.save = function (callback) {
  var htmlString = html_beautify(this.page.toHtml({wrap: true}), {
    'indent-size' : 2,
    'indent-char' : ' ',
    'indent-inner-html' : true
  })
  expressfs.writeFile(this.filename, htmlString, callback)
}

