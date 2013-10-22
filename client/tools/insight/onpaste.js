/**
 */
Insight.onpaste = function(event) {

  // Return true if worker is editing an input
  if ($('input:focus, div:focus, textarea:focus, a:focus').length)
    return true
  
  var pastedText = undefined
  
  if (event.clipboardData && event.clipboardData.getData)
    pastedText = event.clipboardData.getData('text/plain')
  
  // assume for now it's a space object
  var space = new Space(pastedText)
  space.each(function (key, value) {
    
    var space = new Space()
    space.set('meta x',  _.random(0, $('.InsightPlane').width()))
    space.set('meta y',  _.random(0, $('.InsightPlane').height()))
    space.set('value', value)
    var id = new Date().getTime().toString()
    var record = new Insight.Record(id, Insight.database, space)
    Insight.base.set(id, record)
    record.render()
    record.save()
    
  })

}
