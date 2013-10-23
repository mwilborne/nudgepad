var Insight = new Tool('Insight')

Insight.menu = {}

// name of current open database
Insight.database

Insight.log = function (val, base) {
  if (!base)
    base = 10
  return Math.log(val) / Math.log(base)
}

Insight.menu.create = function () {
  expressfs.createUntitledDir('nudgepad/insight', function (name) {
    Insight.menu.open(name)
  })
}

Insight.menu.delete = function () {
  if (!confirm('Are you sure you want to delete the Database ' + Insight.database + '?'))
    return false
  Insight.base.close()
  expressfs.rmdir('nudgepad/insight/' + Insight.database)
}

Insight.menu.open = function (name) {
  Insight.database = name
  Insight.base = new Insight.Database(name)
  Insight.base.open()
}

Insight.menu.openPrompt = function () {
  var name = prompt('Open a db', 'untitled')
  if (!name)
    return false
  Insight.menu.open(name)
}

Insight.drawInit = function () {
  
  $('.InsightPlane').on('mousemove', function (event) {
    if (!event.which)
      return true

    for (var i = 0; i < 300; i++) {

      var o =  Math.round(Math.random() * 200) * (Math.random() > .5 ? 1 : -1)
      var n =  Math.round(Math.random() * 200) * (Math.random() > .5 ? 1 : -1)
      Insight.insert(event.offsetX + o, event.offsetY + n, new Date().getTime())
    }

  })
  
}

Insight.refreshDBs = function () {
  expressfs.readdir('nudgepad/insight', function (err, files) {
    if (err)
      return true
    $('#InsightDropdown').html('')
    files.forEach(function (value, key) {
      var option = $('<option value="' + value + '">' + value + '</option>')
      if (value === Insight.database)
        option.attr('selected', true)
      $('#InsightDropdown').append(option)
    })
  })
}

Insight.on('ready', function () {
  
  Insight.dbWatcher = socketfs.watch('nudgepad/insight', Insight.refreshDBs)
  
  Insight.refreshDBs()
  
  
  //  Insight.drawInit()
  //  return true
  $('.InsightPlane').on('dblclick', function (event) {
    var space = new Space()
    var id = new Date().getTime().toString()
    var record = new Insight.Record(id, Insight.database, space)
    record.x = event.offsetX
    record.y = event.offsetY
    Insight.base.set(id, record)
    record.render()
    record.save()
    record.edit()
  })

  $('.InsightPlane').on('click', '.InsightRecord', function () {
    var id = $(this).attr('id')
    var record = Insight.base.get(id)
    if ($('.InsightTextarea').length)
      $('.InsightTextarea').trigger('change')
    record.edit()
  })
  
  $('.InsightPlane').on('click', '.InsightEditor, .InsightRecord', function (e) {
    e.stopPropagation()
  })
  
  $('.InsightPlane').on('dblclick', '.InsightEditor, .InsightRecord', function (e) {
    e.stopPropagation()
  })
  
  $('.InsightPlane').on('click', function () {
    $('.InsightEditor').remove()
  })
  
  
  if (store.get('InsightDatabase'))
    Insight.menu.open(store.get('InsightDatabase'))
    
  $('#InsightDatabase').on('blur', function () {
    console.log('changing')
    Insight.base.rename($(this).text())
  })
  
  window.addEventListener('paste', Insight.onpaste, false)
  
})

Insight.on('close', function () {
  if (Insight.watcher)
    Insight.watcher.unwatch()

  if (Insight.dbWatcher)
    Insight.dbWatcher.unwatch()


  window.removeEventListener('paste', Insight.onpaste, false)
})

