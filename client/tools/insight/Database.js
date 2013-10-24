Insight.Database = function (name) {
  this.name = name
  this.settings = new Space()
  return this
}

Insight.Database.prototype = new Space()

Insight.Database.prototype.close = function () {
  this.clear()
  $('.Insight').html('')
  $('.InsightPlane').hide()
  store.remove('InsightDatabase')
}

Insight.Database.prototype.create = function () {
  
}

Insight.Database.prototype.edit = function () {
  var base = this
  TextPrompt.open('Edit Settings', this.settings.toString(), 'settings.space', function (val) {
    base.settings.reload(val)
    base.save()
    base.render()
    base.insight()
  })
}

Insight.Database.prototype.editSource = function () {
  var base = this
  TextPrompt.open('Edit Source', this.toString(), Insight.database + '.space', function (val) {
    // get deletions.
    // get insertions
    // get modifications
    var patch = base.diff(val)
    patch.each(function (key, value) {
      
      // deletion
      if (!value)
        base.trash(key)
      // insertion
      else if (!base.get(key)) {
        var record = new Insight.Record(key, base.name, value)
        base.set(key, record)
        record.render()
        record.save()
      }
      // update
      else {
        base.get(key).patch(value).save()
      }
      
    })
    base.insight()
  })
}

Insight.Database.prototype.getPath = function (name) {
  return 'nudgepad/insight/' + (name ? name : this.name)
}

Insight.Database.prototype.insightAxis = function (screenDistance, property, change, axis, log) {
  var first = this.getByIndex(0)
  var min = parseFloat(first.get(property))
  var max = parseFloat(first.get(property))
  
  this.each(function (key, value, index) {
    var point = parseFloat(value.get(property))
    if (min > point)
      min = point
    if (max < point)
      max = point
  })

  if (log) {
    max = Insight.log(max)
    min = Insight.log(min)
  }
  var distance = max - min
    
  this.each(function (key, value, index) {
    var el = value.element()
    var point = parseFloat(value.get(property))
    if (log)
      point = Insight.log(point)
    var scaledPoint = Math.round(((point - min)/distance) * screenDistance)
    // We inverse the Y since in browsers 0,0 is top left
    // todo: see if using bottom property would be better.
    if (axis === 'Y')
      scaledPoint = screenDistance - scaledPoint
    el.css(change, scaledPoint)
  })
  
  $('#InsightMax' + axis).html(max).show()
  $('#InsightMin' + axis).html(min).show()

  var dropdown = $('<select onchange="Insight.base.settings.set(\'' + axis.toLowerCase() + '\',$(this).val()); Insight.base.save();Insight.base.insight()" onblur="Insight.base.settings.set(\'' + axis.toLowerCase() + '\',$(this).val()); Insight.base.save();Insight.base.insight()"></select>')
  var keys = first.getKeys()
  keys.forEach(function (key, i) {
    var option = $('<option value="' + key + '">' + key + '</option>')
    if (property === key)
      option.attr('selected', 'true')
    dropdown.append(option)
  })
  $('#InsightLabel' + axis).html('')
  $('#InsightLabel' + axis).append(dropdown)
  $('#InsightLabel' + axis).show()
}

Insight.Database.prototype.insight = function () {
  var view = this.settings  
  // Auto set properties
  var first = this.getByIndex(0)
  if (!first)
    return false
  if (!view.get('y'))
    view.set('y', first.getByIndex(0))
  if (!view.get('x'))
    view.set('x', first.getByIndex(0))
  
  $('.InsightRecord').addClass('InsightRecordAnimate')
  this.insightAxis($('.InsightPlane').height() - 20, view.get('y'), 'top', 'Y', view.get('logY'))
  this.insightAxis($('.InsightPlane').width() - 100, view.get('x'), 'left', 'X', view.get('logX'))
  setTimeout("$('.InsightRecord').removeClass('InsightRecordAnimate')", 1000)
  $('#InsightCount').html('Showing ' + this.length() + ' records').show()
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



