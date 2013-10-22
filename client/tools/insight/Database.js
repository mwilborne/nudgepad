Insight.Database = function (name) {
  this.name = name
  this.settings = new Space()
  return this
}

Insight.Database.prototype = new Space()

Insight.Database.prototype.edit = function () {
  var base = this
  TextPrompt.open('Edit Settings', this.settings.toString(), 'settings.space', function (val) {
    base.settings.reload(val)
    base.save()
    base.render()
  })
}

Insight.Database.prototype.getPath = function (name) {
  return 'nudgepad/insight/' + (name ? name : this.name)
}

Insight.Database.prototype.insight = function () {
  Insight.insightOn = true
  view = this.settings
  
  // Auto set properties
  var base = this
  if (!base.getByIndexPath('0'))
    return false
  var first = base.getByIndexPath('0 1')
  if (!view.get('y'))
    view.set('y', first.getByIndex(0))
  if (!view.get('x'))
    view.set('x', first.getByIndex(0))
  
  var property = view.get('y')
  if (!property)
    return false
  
  $('.InsightRecord').addClass('InsightRecordAnimate')
  var width = $('.InsightPlane').height() - 20
  var minX
  var maxX
  base.each(function (key, value, index) {
    var x = parseFloat(value.get('value ' + property))
    if (typeof minX === 'undefined')
      minX = x
    if (typeof maxX === 'undefined')
      maxX = x
    if (minX > x)
      minX = x
    if (maxX < x)
      maxX = x
  })
  var distance = maxX - minX
  
  console.log(maxX)
  base.each(function (key, value, index) {
    var el = value.element()
    var x = value.get('value ' + property)
    var newX = Math.round(((parseFloat(x) - minX)/distance) * width)
    console.log(newX)
    newX = width - newX
    el.css('top', newX)
  })
  setTimeout("$('.InsightRecord').removeClass('InsightRecordAnimate')", 1000)
  $('#InsightYMax').html(maxX).show()
  
  var dropdown = $('<select onchange="Insight.base.settings.set(\'y\',$(this).val()); Insight.base.save(); Insight.base.insight()"></select>')
  var first = base.getByIndexPath('0 1')
  var keys = first.getKeys()
  keys.forEach(function (key, i) {
    var option = $('<option value="' + key + '">' + key + '</option>')
    if (property === key)
      option.attr('selected', 'true')
    dropdown.append(option)
  })
  $('#InsightYLabel').html(dropdown).show()
  $('#InsightYMin').html(minX).show()

  var property = view.get('x')
  if (!property)
    return false
  console.log('moving')
  $('.InsightRecord').addClass('InsightRecordAnimate')
  var width = $('.InsightPlane').width() - 100
  var minX = undefined
  var maxX = undefined
  base.each(function (key, value, index) {
    var x = parseFloat(value.get('value ' + property))
    if (typeof minX === 'undefined')
      minX = x
    if (typeof maxX === 'undefined')
      maxX = x
    if (minX > x)
      minX = x
    if (maxX < x)
      maxX = x
  })
  var distance = maxX - minX
  
  console.log(maxX)
  base.each(function (key, value, index) {
    var el = value.element()
    var x = value.get('value ' + property)
    var newX = Math.round(((parseFloat(x) - minX)/distance) * width)
    console.log(newX)
    el.css('left', newX)
  })
  
  setTimeout("$('.InsightRecord').removeClass('InsightRecordAnimate')", 1000)
  $('#InsightXMax').html(maxX).show()
  
  var dropdown = $('<select onchange="Insight.base.settings.set(\'x\',$(this).val()); Insight.base.save(); Insight.base.insight()"></select>')
  var first = base.getByIndexPath('0 1')
  var keys = first.getKeys()
  keys.forEach(function (key, i) {
    var option = $('<option value="' + key + '">' + key + '</option>')
    if (property === key)
      option.attr('selected', 'true')
    dropdown.append(option)
  })
  $('#InsightXLabel').html(dropdown).show()
  $('#InsightXMin').html(minX).show()
}

Insight.Database.prototype.open = function () {
  var base = this
  expressfs.downloadDirectory(this.getPath(), 'space', function (data) {
    base.reload(data)
    // todo: set views
    if (base.get('settings.space')) {
      base.settings.reload(base.get('settings.space'))
      base.delete('settings.space')
    }
    base.each(function (key, value, index) {
      var id = key.replace(/\.space/, '')
      var record = new Insight.Record(id, this.name, value)
      this.update(index, id, record)
    })
    base.render()
    Insight.watcher = socketfs.watch('nudgepad/insight/' + base.name, function (data) {
      var space = new Space(data.content)
      space.each(function (filename, value) {
        if (!filename.match(/\.space$/))
          return true
        var id = filename.replace(/\.space/, '')
        // todo: updates
        if (base.get(id))
          return true
        if (filename === 'settings.space')
          return true
        expressfs.readFile('nudgepad/insight/' + base.name + '/' + filename, function (data) {
          var record = new Insight.Record(id, base.name, data)
          base.set(id, record)
          record.render()
        })
      })
    }, function () {

    })
    $('#InsightDatabase').html(base.name)
    store.set('InsightDatabase', base.name)
    base.insight()
  })
}

Insight.Database.prototype.rename = function (newName) {
  expressfs.rename(this.getPath(), this.getPath(newName), function () {
    Insight.menu.open(newName)
  })
}

Insight.Database.prototype.render = function () {
  $('.Insight').html('')
  this.each(function (key, value, index) {
    value.render()
  })
  $('.InsightPlane').show()
}

Insight.Database.prototype.save = function () {
  expressfs.writeFile(this.getPath() + '/settings.space', this.settings.toString())
}

Insight.Database.prototype.trash = function (id) {
  var base = this
  expressfs.unlink('nudgepad/insight/' + this.name + '/' + id + '.space', function () {
    base.delete(id)
    $('#' + id).fadeOut('fast', function () {
      $(this).remove()
      base.insight()
    })
  })
}



