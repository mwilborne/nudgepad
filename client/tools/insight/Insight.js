var Insight = new Tool('Insight')

Insight.permalink = function (string) {
  if (!string)
    return ''
  return string.toLowerCase().replace(/[^a-z0-9- _\.]/gi, '').replace(/ /g, '-')
}

Insight.menu = {}

// name of current open database
Insight.database
Insight.view = new Space()

Insight.menu.create = function () {
  var name = prompt('Enter a name for your new database', 'untitled')
  if (!name)
    return false
  name = Insight.permalink(name)
  var db = new Insight.Database(name).create(function () {
    Insight.menu.open(name)
  })
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

Insight.menu.editView = function () {
  TextPrompt.open('Edit View', Insight.view.toString(), 'view.space', function (val) {
    Insight.view.reload(val)
    Insight.view.save()
    Insight.base.render()
  })
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

Insight.on('ready', function () {
  
  //  Insight.drawInit()
  //  return true
  $('.InsightPlane').on('dblclick', function (event) {
    var space = new Space()
    space.set('meta x', event.offsetX)
    space.set('meta y', event.offsetY)
    var id = new Date().getTime().toString()
    var record = new Insight.Record(id, Insight.database, space)
    Insight.base.set(id, record)
    record.render()
    record.save()
    record.edit()
  })

  $('.InsightPlane').on('click', '.InsightRecord', function () {
    var id = $(this).attr('id')
    var record = Insight.base.get(id)
    record.edit()
    return false
  })
  
  $('.InsightPlane').on('click', '.InsightEditor, .InsightRecord', function (e) {
    e.stopPropagation()
    return false
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
  
})

Insight.on('close', function () {
  if (Insight.watcher)
    Insight.watcher.unwatch()
})

