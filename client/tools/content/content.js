var Content = new Tool('Content')
Content.set('pages')


Content.downloadPages = function () {
  Explorer.folderToSpace('nudgepad/pages', function (data) {
    var space = new Space(data)
    space.sort(function (a, b) {
      return b[0] > a[0]
    })
    space.each(function (filename, value) {
      Content.set('pages ' + filename, new Scraps.Page(value))
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
