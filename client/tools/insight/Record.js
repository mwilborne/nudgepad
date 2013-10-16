Insight.Record = function (id, database, space) {
  this.id = id
  this.database = database
  this.reload(space)
  return this
}

Insight.Record.prototype = new Space()

Insight.Record.prototype.edit = function () {
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
  editor.val(this.get('value'))
  editor.focus()
  editor.on('change', function () {
    record.set('value', new Space(editor.val()))
    record.save()
    record.render()
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
    record.set('meta y', el.position().top)
    record.set('meta x', el.position().left)
    record.save()
    }
  , start : function () {
    $('.InsightEditor').remove()
  }})
}

Insight.Record.prototype.render = function () {
  $('#' + this.id).remove()
  var icon = $('<i class="icon-location-arrow"></i>')
  var record = $('<div class="InsightRecord"></div>')
  icon.css('font-size', '14px')
  icon.css('-webkit-transform', 'rotate(80deg)')
  icon.css('transform', 'rotate(80deg)')
  record.append(icon)
  var name = this.get('value name')
  if (name)
    record.append('<label>' + name + '</label>')
  record.attr('id', this.id)
  var x = this.get('meta x')
  var y = this.get('meta y')
  
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

