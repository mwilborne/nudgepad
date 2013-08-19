var Home = new Tool('Home')

Home.renderMenu = function () {
  $('#HomeColumn').html('')
  var tools = _.without(Tool.tools, 'Home', 'Designer', 'Files', 'Blog', 'AppMaker', 'Team')
  tools.unshift('Designer', 'Files', 'Team', 'Blog', 'AppMaker')
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
  
  for (var i in tools) {
    var tool = window[tools[i]]
    $('#HomeColumn').append(
      Home.toButton(
        tool.get('name'),
        tool.get('description'),
        colors[(i ? i % colors.length : 0)],
        tool.get('beta')
    ))
  }
}

Home.toggleAll = function () {
  if (store.get('homeShowAll'))
    store.remove('homeShowAll')
  else
    store.set('homeShowAll', 'true')
  Home.renderMenu()
}

Home.toButton = function (name, description, color, beta) {
return '<div class="HomeSquare" style="background-color : ' + color + '" onclick="Launcher.open(\'' + name + '\')">\
    <div class="HomeTopBlock">' + name + '</div>\
    <div class="HomeSubBlock">' + description + '</div>\
</div>'
}

Home.on('open', function () {
  Home.renderMenu()
  $('#Home').on('hold', Home.toggleAll)
})

Home.on('close', function () {
  $('#Home').off('hold', Home.toggleAll)
})
