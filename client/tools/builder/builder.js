var Builder = new Tool('Builder')

Builder.refresh = function () {
  $( '#BuilderStage' ) .html( Builder.page.toHtml({filter : Builder.filter, wrap : true}) )
  $( '#BuilderSource' ) .val( Builder.page.toString() )
}

Builder.on('ready', function () {
  
   $( ".draggable" ).draggable({ revert: true })
    Builder.filter = function () {
      // dont render scripts
      if (this.div.tag === 'script')
        this.div.draft = true
      this.div.attr('data-index', this.index)
      this.div.addClass('Scrap')
    }
    Builder.page = new Scraps.Page()
    if (store.get('page'))
      Builder.page = new Scraps.Page(store.get('page'))
    Builder.refresh()
    $( ".droppable" ).droppable({
          drop: function( event, ui ) {
            var Script = $(ui.draggable).find('script')
            var text = Script.html().trim()
            $('#BuilderSource').val($('#BuilderSource').val() + text + '\n')
            Builder.page.reload($('#BuilderSource').val()).loadScraps()
            $( this ) .html( Builder.page.toHtml({wrap: true, filter: Builder.filter}) )
          }
        })
    $('#BuilderSource').on('keyup', function () {
      Builder.page.reload($('#BuilderSource').val()).loadScraps()
      $( '#BuilderStage' ) .html( Builder.page.toHtml({wrap: true, filter : Builder.filter}) )
    })
    
    $('#BuilderStage').on('click', '*', function (event) {

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
      Builder.page.reload($('#BuilderSource').val()).loadScraps()
      var scrap = Builder.page.getByIndexPath(index)
      $(this).on('keyup', function () {
        var content = $(this).html()
        scrap.set('content', content)
        $('#BuilderSource').val(Builder.page.toString())
        Builder.page.trigger('reload') 
      })
      $(this).on('blur', function () {
        $(this).removeAttr('contenteditable')
        var content = $(this).html()
        scrap.set('content', content)
        $('#BuilderSource').val(Builder.page.toString())
        Builder.page.trigger('reload')
      })
    })
    
    Builder.page.on('reload', function () {
      store.set('page', this.toString())
    })
})

Builder.publish = function () {
  var name = prompt('Enter a filename', 'new.html')
  if (!name)
    return false
  expressfs.writeFileAndOpen(name, Builder.page.toHtml({wrap: true}))
}
