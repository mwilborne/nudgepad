var Tab = new Space('id ' + nudgepad.id)
Tab.set('device', platform.name + (platform.product ? '/' + platform.product : ''))


nudgepad.setTabColor = function () {
  if (Tab.get('color'))
    return true
  var colors = ['red', 'green', 'violet', 'yellow', 'blue', 'orange', 'indigo']
  var used = []
  site.values.collage.each(function (key, value) {
    if (value.get('color'))
      used.push(value.get('color'))
  })
  var freeColors = _.difference(colors, used)
  if (freeColors.length < 1)
    freeColors.push('black')
  Tab.set('color', freeColors[0])
}

Tab.on('patch', function () {
  site.set('collage ' + nudgepad.id, this)
  nudgepad.emit('collage.update', this)
})

