function Tool(name) {
  this.clear()
  this.events = {}
  this.set('name', name)
  this._open = false
  Tool.tools.push(name)
  return this
}

Tool.tools = []

Tool.opened = {}
Tool.openedAt = null

Tool.openTool = null

Tool.prototype = new Space()

Tool.prototype.close = function (name) {

  // Return false if already closed
  if (!this._open)
    return false
  
  this.logTime()
  this.trigger('close')

  this._open = false
  Tool.openTool = null
  
  $('#OpenTool').html('')
  
  if (name)
    window[name].open()
  
}

/**
 * @return {bool}
 */
Tool.prototype.isOpen = function () {
  return this._open
}

Tool.prototype.logTime = function () {
  var elapsedTime = new Date().getTime() - Tool.openedAt
  expressfs.appendFile('nudgepad/time/' + Cookie.email + '.space', Socket.socket.sessionid + ' ' + this.get('name') + ' ' + elapsedTime + '\n', function () {
    Tool.openedAt = new Date().getTime()
  })
}

Tool.prototype.open = function () {

  // Return false if already open
  if (this._open)
    return false
  
  // Close any open Tool
  if (Tool.openTool)
    return Tool.openTool.close(this.get('name'))
  
  // On open event
  if (!Tool.opened[this.get('name')])
    this.trigger('once')
  Tool.opened[this.get('name')] = true
  this.trigger('open')
  Tool.openedAt = new Date().getTime()
  
  $('#OpenTool').html($('.Tool#' + this.get('name')).html())
  
  var toolHelp = $('#ToolHelp').html()
  $('.navbar-right').prepend(toolHelp)
  
  $('.navbar-right').append('<li><a class="navbar-brand" href="/?' + new Date().getTime() + '" target="published" data-toggle="tooltip" onclick="$(this).attr(\'href\', \'/?\' + new Date().getTime())" title="Visit your site" data-placement="right"><i class="icon-external-link"></i></a></li>')
  
  var moreTools = 'Clone Files Pages Server Team Templates Labs'.split(/ /g)
  
  var ul = $('.navbar-collapse').children().first()
  ul.prepend('<li class="dropdown"><a class="cursor dropdown-toggle" data-toggle="dropdown">Tools <b class="caret"></b></a><ul class="dropdown-menu" id="MoreTools"></ul></li>')
  $('#MoreTools').html('')
  moreTools.forEach(function (value, i) {
    var info = ToolInfo.get(value.toLowerCase())
    var icon = info.get('icon') || 'picture'
    $('#MoreTools').append('<li><a class="cursor" onclick="Launcher.open(\'' + value + '\')"><i class="icon-' + icon + '" style="width: 20px;display: inline-block;"></i> ' + value + '</a></li>')
  })
  
  
  $('.navbar-right .tool-help').on('click', function () {
    var tool = Tool.openTool
    var name = tool.get('name')
    var info = ToolInfo.get(name.toLowerCase())
    var toolInfo = $('<div id="ToolInfoBox"></div>')
    toolInfo.append('<p style="text-align: center; color: #888;"><i>About this Tool</i></p>')
    toolInfo.append('<h1>' + name + '</h1>')
    toolInfo.append('<h3>' + info.get('description') + '</h3>')
    toolInfo.append('<h4>By ' + info.get('author') + '</h4>')
    toolInfo.append('<p>Email comments, feature requests and bug reports to <a target="_blank" href="mailto:' + info.get('email') + '">' + info.get('email') + '</a></p>')
    PreviewBox.open(toolInfo)
  })
  
  $(window).scrollTop(0)
  
  Tool.openTool = this
  this._open = true

  // On ready event
  this.trigger('ready')

  mixpanel.track('I opened the ' + this.get('name') + ' tool')
  Screen.set('tool', this.get('name'))
}

Tool.prototype.restart = function () {
  this.close()
  this.open()
}

Tool.prototype.test = function () {
  var name = this.get('name')
  $.get('/nudgepad/tools/' + name + '/tests.html', function (data) {
    $('body').append(data)
    $('body').append('<script type="text/javascript" src="/nudgepad/tools/' + name + '/tests.js"></script>')
  })
}

Tool.prototype.toggle = function () {
  if (this._open)
    this.close()
  else
    this.open()
}
