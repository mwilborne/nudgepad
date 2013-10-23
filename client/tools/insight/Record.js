Insight.Record = function (id, database, space) {
  this.id = id
  this.database = database
  this.reload(space)
  this.x = _.random(0, $('.InsightPlane').width())
  this.y = _.random(0, $('.InsightPlane').height())
  return this
}

Insight.Record.prototype = new Space()

Insight.Record.prototype.edit = function () {
  $('.InsightTextarea').trigger('change')
  $('.InsightEditor').remove()
  var container = $('<div class="InsightEditor"></div>')
  var editor = $('<textarea class="InsightTextarea"></textarea>')
  container.attr('id', this.id)
  var id = this.id
  var el = this.element()
  var x = el.position().left
  var y = el.position().top
  container.css({
    'top' : y + 20,
    'left' : x + 20,
  })
  container.append(editor)
  var trash = $('<button type="button" title="Delete" class="btn btn-default btn"><i class="icon-trash"></i></button>')
  container.append('<br>')
  container.append(trash)
  
  $('.InsightPlane').append(container)
  
  trash.on('click', function () {
    Insight.base.trash(id)
    container.remove()
  })
  var record = this
  editor.val(this.toString())
  editor.focus()
  editor.on('change', function () {
    if (new Space(editor.val()).toString() === this.toString())
      return true
    record.reload(new Space(editor.val()))
    record.save()
    record.render()
    if (Insight.insightOn)
      Insight.base.insight()
    container.remove()
  })
}

Insight.Record.prototype.element = function () {
  return $('#' + this.id)
}

Insight.dragIt = function (el) {
  el.draggable({stop: function() {
    var id = $(this).attr('id')
    var el = $(this)
    var record = Insight.base.get(id)
    record.y = el.position().top
    record.x = el.position().left
    }
  , start : function () {
    $('.InsightEditor').remove()
  }})
}

Insight.Record.prototype.render = function () {

  var view = Insight.base.settings

  $('#' + this.id).remove()
  var iconType = view.get('icon') || 'location-arrow'
  if (this.get('icon'))
    iconType = this.get('icon')
  var icon = $('<i class="icon-' + iconType + '"></i>')
  var record = $('<div class="InsightRecord"></div>')
  icon.css('font-size', '14px')
  // icon.css('-webkit-transform', 'rotate(80deg)')
  // icon.css('transform', 'rotate(80deg)')
  var label = ''
  if (this.get('label'))
    label = this.get('label')
  else if (this.get('name'))
    label = this.get('name')
  else if (this.get('title'))
    label = this.get('title')
  else if (this.get('Title'))
    label = this.get('Title')
  else if (this.get('Name'))
    label = this.get('Name')
  else if (this.getByIndex(0))
    label = this.getByIndex(0)
  if (view.get('label') && this.get(view.get('label')))
    label = this.get(view.get('label'))
  var labelDiv = $('<label>&nbsp;' + label + '</label>')
  labelDiv.prepend(icon)
  record.append(labelDiv)
  record.attr('id', this.id)
  var x = this.x
  var y = this.y
  
  record.css({
    'top' : y + 'px',
    'left' : x + 'px'
  })
  $('.InsightPlane').append(record)
  Insight.dragIt(record)
  return this
}

Insight.Record.prototype.save = function (callback) {
  expressfs.writeFile('nudgepad/insight/' + this.database + '/' + this.id + '.space', this.toString(), callback)
}

