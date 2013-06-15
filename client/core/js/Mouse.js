/**
 * We provide easy access to querying the mouse position and state.
 *
 * @special Singleton.
 */
var Mouse = {}

// Is the mouse down?
Mouse.isDown = false

/**
 * When a mousedown starts, we keep track of how far the mouse moves. Helpful for
 * drag and drop and drawing stuff.
 */
Mouse.yChange = 0
Mouse.xChange = 0
Mouse.pathDistance = 0

/**
 * Update our Mouse object
 *
 * @param {object} The mousedown event
 * @return true. Continue propagation.
 */
Mouse.onmousedown = function (event) {
  //  console.log('mouse down')
  Mouse.isDown = true
  Mouse.down = event
  Mouse.target = event.srcElement || event.originalTarget || event.target
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.pathDistance = 0
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The move event
 * @return true. Continue propagation.
 */
Mouse.onmousemove = function (event) {
  Mouse.move = event
//  console.log('mouse move')
  if (!Mouse.isDown)
    return true
  
  Mouse.pathDistance += Math.abs(event.pageX - Mouse.lastX) + Math.abs(event.pageY - Mouse.lastY)
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  // todo: rotation
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The mouseup event
 * @return true. Continue propagation.
 */
Mouse.onmouseup = function (event) {
  Mouse.isDown = false
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The mouseup event
 * @return true. Continue propagation.
 */
Mouse.onTouchEnd = function (event) {
  Mouse.isDown = false
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The mousedown event
 * @return true. Continue propagation.
 */
Mouse.onTouchStart = function (event) {
  //  console.log('mouse down')
  Mouse.isDown = true
  Mouse.down = event
  Mouse.target = event.srcElement || event.originalTarget || event.target
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.pathDistance = 0
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The move event
 * @return true. Continue propagation.
 */
Mouse.onTouchMove = function (event) {
  Mouse.move = event
//  console.log('mouse move')
  if (!Mouse.isDown)
    return true
  
  Mouse.pathDistance += Math.abs(event.pageX - Mouse.lastX) + Math.abs(event.pageY - Mouse.lastY)
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  // todo: rotation
  return true
}

nudgepad.on('main', function () {

  if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
    document.addEventListener('touchstart', Mouse.onTouchStart, true)
    document.addEventListener('touchend', Mouse.onTouchEnd, true)
    document.addEventListener('touchmove', Mouse.onTouchMove, true)
  } else {
    document.addEventListener('mousedown', Mouse.onmousedown, true)
    document.addEventListener('mousemove', Mouse.onmousemove, true)
    document.addEventListener('mouseup', Mouse.onmouseup, true)
  }
})
