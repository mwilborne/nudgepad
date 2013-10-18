Insight.View = function (name, database, space) {
  this.name = name
  this.database = database
  this.reload(space)
  return this
}

Insight.View.prototype = new Space()

Insight.View.prototype.insight = function () {
  this.updateX()
  this.updateY()
}

Insight.View.prototype.save = function () {
  expressfs.writeFile('nudgepad/insight/' + this.database + '/' + this.name + '.space', this.toString())
}

Insight.View.prototype.updateY = function () {
  var property = this.get('y')
  if (!property)
    return false
  $('.InsightRecord').addClass('InsightRecordAnimate')
  var width = $('.InsightPlane').height() - 20
  var minX
  var maxX
  Insight.base.each(function (key, value, index) {
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
  Insight.base.each(function (key, value, index) {
    var el = value.element()
    var x = value.get('value ' + property)
    var newX = Math.round(((parseFloat(x) - minX)/distance) * width)
    console.log(newX)
    newX = width - newX
    el.css('top', newX)
  })
  setTimeout("$('.InsightRecord').removeClass('InsightRecordAnimate')", 1000)
  $('#InsightYMax').html(maxX).show()
  $('#InsightYLabel').html(property).show()
  $('#InsightYMin').html(minX).show()
}

Insight.View.prototype.updateX = function () {
  var property = this.get('x')
  if (!property)
    return false
  console.log('moving')
  $('.InsightRecord').addClass('InsightRecordAnimate')
  var width = $('.InsightPlane').width() - 100
  var minX
  var maxX
  Insight.base.each(function (key, value, index) {
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
  Insight.base.each(function (key, value, index) {
    var el = value.element()
    var x = value.get('value ' + property)
    var newX = Math.round(((parseFloat(x) - minX)/distance) * width)
    console.log(newX)
    el.css('left', newX)
  })
  setTimeout("$('.InsightRecord').removeClass('InsightRecordAnimate')", 1000)
  $('#InsightXMax').html(maxX).show()
  $('#InsightXLabel').html(property).show()
  $('#InsightXMin').html(minX).show()
}
