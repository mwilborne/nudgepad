var Forms = new Tool('Forms')

Forms.menu = {}
Forms.menu.autopublish = true

Forms.menu.create = function () {
  
  expressfs.createUntitled('', 'html', $('#FormsTemplate').text(), function (filename) {  
    Forms.menu.open(filename)
  })
  
}

Forms.filter = function () {
  // dont render scripts
  if (this.div.tag === 'script')
    this.div.draft = true
  this.div.attr('data-index', this.index)
  this.div.addClass('Scrap')
}

Forms.menu.open = function (filename) {
  console.log('opening %s', filename)
  Forms.form = new Forms.Form(filename)
  Forms.form.open()
}

Forms.menu.openPrompt = function () {
  var filename = prompt('Enter a filename')
  if (!filename)
    return false
  Forms.menu.open(filename)
}

Forms.menu.updateMenu = function (data) {
  var files = new Space(data)
  $('.openPage').remove()
  files.each(function (key, value) {
    if (!key.match(/\.html?$/i))
      return true
    $('#FormsFileMenu').append('<li><a class="cursor openPage" onclick="Forms.menu.open(\'' + key + '\')">' + key + '</a></li>')
  })
}

Forms.on('close', function () {
  if (Forms.dirWatcher)
    Forms.dirWatcher.unwatch()
})

Forms.on('ready', function () {
  
  $( ".draggable" ).draggable({ revert: true })
    
  $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        var Script = $(ui.draggable).find('script')
        var text = Script.html().trim()
        var space = new Space($('#FormsSource').val())
        if (space.get('body form')) {
          space.get('body form').concat(text)
          $('#FormsSource').val(space.toString())
        }
        else
          $('#FormsSource').val($('#FormsSource').val() + text + '\n')

        Forms.form.page.reload($('#FormsSource').val()).loadScraps()
        $( this ) .html( Forms.form.page.toHtml({wrap: true, filter: Forms.filter}) )
        if (Forms.menu.autopublish)
          Forms.form.save()
      }
  })
  
  $('#FormsSource').on('keyup', function () {
    Forms.form.page.reload($('#FormsSource').val()).loadScraps()
    $( '#FormsStage' ) .html( Forms.form.page.toHtml({wrap: true, filter : Forms.filter}) )
  })
  
  $('#FormsSource').on('blur', function () {
    if (Forms.menu.autopublish)
      Forms.form.save()
  })
  
  $('#FormsStage').on('click', '*', function (event) {

    if ($(this).is('a'))
      event.preventDefault()

    // only select leafs
    if ($(this).find('.Scrap').length)
      return true
    if (!$(this).hasClass('Scrap'))
      return true
    var text = $(this).text()
    if (!text.length)
      return true
    $(this).attr('contenteditable', true)
    $(this).focus()
    var index = $(this).attr('data-index')
    Forms.form.page.reload($('#FormsSource').val()).loadScraps()
    var scrap = Forms.form.page.getByIndexPath(index)
    $(this).on('keyup', function () {
      var content = $(this).html()
      scrap.set('content', content)
      $('#FormsSource').val(Forms.form.page.toConciseString())
      Forms.form.page.trigger('reload') 
    })
    $(this).on('blur', function () {
      $(this).removeAttr('contenteditable')
      var content = $(this).html()
      scrap.set('content', content)
      $('#FormsSource').val(Forms.form.page.toConciseString())
      Forms.form.page.trigger('reload')
      if (Forms.menu.autopublish)
        Forms.form.save()
    })
  })
  
  expressfs.readdir('', function (err, data) {
    var str = ''
    data.forEach(function (value, key) {
      str += value + '\n'
    })
    Forms.menu.updateMenu(str)
  })
  Forms.dirWatcher = socketfs.watch('', function (data) {
    Forms.menu.updateMenu(data.content)
  })
  
  if (store.get('FormsFilename'))
    Forms.menu.open(store.get('FormsFilename'))
})
