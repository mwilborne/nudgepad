Design.pen = {
  on : false
}

Design.pen.draw = function (event) {
  
  if (!Design.pen.on && !nudgepad.mouse.down.metaKey)
    return true
  
  if (!nudgepad.mouse.isDown)
    return true
  
  if ($.isOnScrollbar(nudgepad.mouse.down.clientX, nudgepad.mouse.down.clientY))
    return true
  
  var offsetLeft = $('#nudgepadStageBody').offset().left
  var offsetTop = $('#nudgepadStageBody').offset().top
  var x = nudgepad.mouse.down.pageX - offsetLeft
  var y = nudgepad.mouse.down.pageY - offsetTop
  var scraps = new Space().set('container', new Space("style\n position absolute\n left " + x + "px\n top " + y + "px\n width 1px\n height 1px\n"))
  var selector = Design.stage.insert(scraps)[0]
  var id = $(selector).scrap().id
  console.log(id)
  // Pretend the mousedown was on the stretch handle
  Events.slide.target = $("#stretch_handle_bottomright" + id)
  $("#stretch_handle_bottomright" + id).triggerHandler("mousedown")
  $("#stretch_handle_bottomright" + id).triggerHandler("slidestart")
  mixpanel.track('I used the pen tool')
}

nudgepad.on('main', function () {
  // Bind
  $(document).on("slidestart", Design.pen.draw)
})



