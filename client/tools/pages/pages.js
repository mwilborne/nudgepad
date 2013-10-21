var Pages = new Tool('Pages')

Pages.editor = {}

Pages.editor.create = function () {
  expressfs.createUntitled('', 'html', '', function (filename) {
    Pages.editor.open(filename)
  })
}

Pages.editor.rename = function () {
  var filename = prompt('Enter a new name for the file', store.get('PagesFilename'))
  if (!filename)
    return true
  expressfs.rename(store.get('PagesFilename'), filename, function (data) {
    Pages.editor.open(filename)
  })
}

Pages.editor.duplicate = function () {
  var filename = prompt('Enter a name for the file', Pages.filename)
  if (!filename)
    return true
  expressfs.writeFile(filename, Pages.page.toHtml())
  Pages.editor.open(filename)
}

Pages.editor.updateMenu = function (data) {
  var files = new Space(data)
  $('.openPage').remove()
  files.each(function (key, value) {
    if (!key.match(/\.html?$/i))
      return true
    $('#PagesFileMenu').append('<li><a class="cursor openPage" onclick="Pages.editor.open(\'' + key + '\')">' + key + '</a></li>')
  })
}

Pages.on('ready', function () {
  $('#PagesStage').attr('src', '')
  $('#PagesStage').on('load', function () {
    if (store.get('PagesFilename'))
      Pages.editor.open(store.get('PagesFilename'))
  })
  expressfs.readdir('', function (data) {
    var str = ''
    data.forEach(function (value, key) {
      str += value + '\n'
    })
    Pages.editor.updateMenu(str)
  })
  Pages.dirWatcher = socketfs.watch('', function (data) {
    Pages.editor.updateMenu(data.content)
  })
})
Pages.on('close', function () {
  Events.shortcut.shortcuts = {}
  Events.shortcut.disableShortcutsIfInputHasFocus = true
  if (Pages.watcher)
    Pages.watcher.unwatch()
  if (Pages.dirWatcher)
    Pages.dirWatcher.unwatch()
})

Pages.editor.editHtml = function () {
  var htmlString = Pages.page.toHtml()
  Events.shortcut.disableShortcutsIfInputHasFocus = false
  Events.shortcut.shortcuts['meta+s'] = function () {
    Pages.page.reload($.htmlToScraps(TextPrompt.value()))
    Pages.page.publish()
  }
  TextPrompt.open('', htmlString, store.get('PagesFilename'), function (data) {
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

}

Pages.editor.trash = function () {
  Pages.page.trash()
}


