var Labs = new Tool('Labs')

Labs.renderMenu = function () {
  $('#OpenTool #LabsContainer').html('')
  
  var tools = 'Backup Blog Clone Crawler Fiddle Files Flickr Forms Git Pages Redirect Server Share Sketch Stats Team Templates Time'.split(/ /g)
  
  var colors =
  [
  'rgb(26,134,214)',
  'rgb(36,65,112)',
  'rgb(231,189,44)',
  'rgb(171,193,199)',
  'rgb(224,54,52)',
  'rgb(71,41,54)'
  ]
  
  var str = '<div class="row">'
  for (var i in tools) {
    var tool = window[tools[i]]
    if (i > 0 && (i % 3 === 0))
      str += '</div><div class="row">'
    var name = tool.get('name')
    var info = ToolInfo.get(name.toLowerCase())
    str += Labs.toButton(
        name,
        info.get('description'),
        colors[(i ? i % colors.length : 0)],
        info.get('icon') || 'picture')
  }
  if (((i + 1)  % 3 ) !== 0)
    str += '</div>'
  
  $('#OpenTool #LabsContainer').append(str)
  Labs.heights()
}

Labs.heights = function () {
  var maxHeight = 0
  $('.jumbotron').css('height', 'auto')
  $('.jumbotron').each(function () {
    if ($(this).height() > maxHeight)
      maxHeight = $(this).height()
  }).height(maxHeight)
}

Labs.toButton = function (name, description, color, icon) {
  
  return '<div class="col-md-4"><div class="jumbotron cursor LabsBtn" onclick="Launcher.open(\'' + name + '\')" style="text-align: center;color: white;background-color : ' + color + '">\
      <h1><i class="icon-' + icon + '"></i></h1><h2>' + name + '</h2>\
      <p>' + description + '</p>\
  </div></div>'
}

Labs.on('ready', function () {
  Labs.renderMenu()
  
  $(window).on('resize', Labs.heights)
})

Labs.on('close', function () {
  $(window).off('resize', Labs.heights)
})

