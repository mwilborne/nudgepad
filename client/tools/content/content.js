var Content = new Tool('Content')
Content.set('description', 'Edit the content on your pages.')
Content.set('icon', 'font')
Content.set('pages')


Content.downloadPages = function () {
  Explorer.folderToSpace('private/pages', function (data) {
    var space = new Space(data)
    space.keys = space.keys.sort(function (a, b) {
      return b > a
    })
    space.each(function (filename, value) {
      Content.set('pages ' + filename, new Page(value))
    })
    Content.trigger('pages')
  })
}

Content.listPages = function () {
  var pages = Content.get('pages')
  $('#ContentPages').html('')
  
  
  pages.each(function (filename, value) {
    $('#ContentPages').append('<li><a class="cursor" onclick="Content.Editor.open(\'' + filename + '\')">' + filename + '</a></li>')
  })
}

Content.on('ready', Content.downloadPages)
Content.on('pages', Content.listPages)
