var Pages = new Tool('Pages')

Pages.editor = {}

Pages.pages = []

Pages.refresh = function () {
  $('.openPage').remove()
  Pages.pages.sort(function (a,b) {
    return b < a
  })
  Pages.pages.forEach(function (filename) {
    $('#PagesFileMenu').append('<li><a class="cursor openPage" onclick="Pages.editor.open(\'' + filename + '\')">' + filename + '</a></li>')
    console.log(filename)
  })
}

Pages.editor.create = function () {
  var filename = prompt('Enter a name for the file', 'index.html')
  if (!filename)
    return true
  expressfs.writeFile(filename, '')
  Pages.pages.push(filename)
  Pages.editor.open(filename)
  Pages.refresh()
}

Pages.editor.duplicate = function () {
  var filename = prompt('Enter a name for the file', Pages.filename)
  if (!filename)
    return true
  expressfs.writeFile(filename, Pages.page.toHtml())
  Pages.pages.push(filename)
  Pages.editor.open(filename)
  Pages.refresh()
}

Pages.editor.loadFiles = function () {
  expressfs.downloadDirectory('', 'html', function (data) {
    var files = new Space(data)
    Pages.pages = files.getKeys()
    Pages.refresh()
  })
}

Pages.on('ready', function () {
  $('#PagesStage').on('load', function () {
    if (store.get('PagesFilename'))
      Pages.editor.open(store.get('PagesFilename'))    
  })
  Pages.refresh()
})
Pages.on('close', function () {
  Events.shortcut.shortcuts = {}
  Events.shortcut.disableShortcutsIfInputHasFocus = true
  if (Pages.watcher)
    Pages.watcher.unwatch()
})
Pages.on('open', Pages.editor.loadFiles)

Pages.editor.editHtml = function () {
  var htmlString = Pages.page.toHtml()
  Events.shortcut.disableShortcutsIfInputHasFocus = false
  Events.shortcut.shortcuts['meta+s'] = function () {
    Pages.page.reload($.htmlToScraps(TextPrompt.value()))
    Pages.page.publish()
  }
  TextPrompt.open('', htmlString, store.get('PagesFilename'), function (data) {
    console.log(data)
    Pages.page.reload($.htmlToScraps(data))
    Pages.page.render()
    Events.shortcut.shortcuts = {}
  })
}

Pages.editor.editScraps = function () {
  Events.shortcut.disableShortcutsIfInputHasFocus = false
  Events.shortcut.shortcuts['meta+s'] = function () {
    Pages.page.reload(TextPrompt.value())
    Pages.page.publish()
  }
  TextPrompt.open('', Pages.page.toConciseString(), store.get('PagesFilename').replace('html', 'space'), function (data) {
    Pages.page.reload(data)
    Pages.page.render()
    Events.shortcut.shortcuts = {}
  })
}

Pages.editor.open = function (filename) {
  $('#PagesFilename').html(filename)
  Pages.page = new Pages.Page(filename)
  Pages.page.open()
  Pages.watcher = socketfs.watch(filename, function (data) {
    console.log(filename + ' changed')
    Pages.page.reload($.htmlToScraps(data.content))
    Pages.page.render()
  })

}


