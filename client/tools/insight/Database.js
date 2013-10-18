Insight.Database = function (name) {
  this.name = name
  return this
}

Insight.Database.prototype = new Space()

Insight.Database.prototype.create = function (callback) {
  // This will make 2 dirs in one call
  expressfs.mkdir(this.getPath() + '/views/', callback)
}

Insight.Database.prototype.getPath = function (name) {
  return 'nudgepad/insight/' + (name ? name : this.name)
}

Insight.Database.prototype.open = function () {
  var base = this
  expressfs.downloadDirectory(this.getPath(), 'space', function (data) {
    base.reload(data)
    // todo: set views
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
  })
}

Insight.Database.prototype.rename = function (newName) {
  expressfs.rename(this.getPath(), this.getPath(newName), function () {
    Insight.menu.open(newName)
  })
}

Insight.Database.prototype.render = function () {
  $('.InsightPlane').html('')
  this.each(function (key, value, index) {
    value.render()
  })
  $('.InsightPlane').show()
}

Insight.Database.prototype.trash = function (id) {
  expressfs.unlink('nudgepad/insight/' + this.name + '/' + id + '.space', function () {
    $('#' + id).fadeOut('fast', function () {
      $(this).remove()
    })
  })
}



