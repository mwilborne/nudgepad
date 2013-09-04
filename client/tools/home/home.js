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
      return true
    })
  }
  
  var str = '<div class="row">'
  for (var i in tools) {
    var tool = window[tools[i]]
    if (i > 0 && (i % 3 === 0))
      str += '</div><div class="row">'
    str += Home.toButton(
        tool.get('name'),
        tool.get('description'),
        colors[(i ? i % colors.length : 0)],
        tool.get('icon') || 'picture')
  }
  if (((i + 1)  % 3 ) !== 0)
    str += '</div>'
  var maxHeight = 0
  $('#HomeContainer').append(str)
  $('.jumbotron').each(function () {
    if ($(this).height() > maxHeight)
      maxHeight = $(this).height()
  }).height(maxHeight)
}

Home.toButton = function (name, description, color, icon) {
  
  return '<div class="col-md-4"><div class="jumbotron cursor HomeBtn" onclick="Launcher.open(\'' + name + '\')" style="text-align: center;color: white;background-color : ' + color + '">\
      <h1><i class="icon-' + icon + '"></i></h1><h2>' + name + '</h2>\
      <p>' + description + '</p>\
  </div></div>'
}

Home.on('ready', function () {
  Home.renderMenu()
})

