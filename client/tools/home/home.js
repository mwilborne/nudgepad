var Home = new Tool('Home')

Home.renderMenu = function () {
  $('#HomeContainer').html('')
  var tools = _.without(Tool.tools, 'Home', 'Designer', 'Files', 'Blog', 'Team')
  tools.unshift('Designer', 'Files', 'Team', 'Blog')
  var colors =
  [
  'rgb(26,134,214)',
  'rgb(36,65,112)',
  'rgb(231,189,44)',
//  'rgb(171,193,199)',
  'rgb(224,54,52)',
  'rgb(71,41,54)'
  ]
  
  if (!store.get('homeShowAll')) {
    tools = _.filter(tools, function (value, key) {
      var tool = window[value]
      if (tool.get('beta'))
        return false
      return true
    })
  }
  
  $('#HomeContainer').append('<div class="row">')
  for (var i in tools) {
    var tool = window[tools[i]]
    if (i > 0 && (i % 3 === 0)) {
      $('#HomeContainer').append('</div><div class="row">')
      console.log(tool.get('name'))
    }
    $('#HomeContainer').append(
      Home.toButton(
        tool.get('name'),
        tool.get('description'),
        colors[(i ? i % colors.length : 0)],
        false,
        tool.get('icon') || 'picture'
    ))
  }
  if (((i + 1)  % 3 ) !== 0)
    $('#HomeContainer').append('</div>')
  var maxHeight = 0
  $('.jumbotron').each(function () {
    if ($(this).height() > maxHeight)
      maxHeight = $(this).height()
  }).height(maxHeight)
  
}

Home.toggleAll = function () {
  if (store.get('homeShowAll'))
    store.remove('homeShowAll')
  else
    store.set('homeShowAll', 'true')
  Home.renderMenu()
}

Home.toButton = function (name, description, color, beta, icon) {
  
  return '<div class="col-md-4" style="padding: 0 12px;"><div class="jumbotron cursor HomeBtn" onclick="Launcher.open(\'' + name + '\')">\
    <div class="container" style="text-align: center;">\
      <h1><i class="icon-' + icon + '"></i></h1><h2>' + name + '</h2>\
      <p>' + description + '</p>\
    </div>\
  </div></div>'
  
  
return '<div class="HomeSquare" style="background-color : ' + color + '" onclick="Launcher.open(\'' + name + '\')">\
    <div class="HomeTopBlock">' + name + '</div>\
    <div class="HomeSubBlock">' + description + '</div>\
</div>'
}

Home.on('ready', function () {
  Home.renderMenu()
  $('#HomeContainer').on('hold', Home.toggleAll)
})

Home.on('close', function () {
  $('#HomeContainer').off('hold', Home.toggleAll)
})
