/**
 */

if (typeof Events === "undefined") 
  var Events = {}

// Create the slide Namespace
Events.slide = {}
Events.slide.timeout = false
Events.slide.target = false
Events.slide.started = false


// Mouse
Events.slide.mouseDelay = 70
Events.slide.mousedown = null
Events.slide.mouseThreshold = 4

// Touch
Events.slide.touchstart = null
Events.slide.touchThreshold = 20

Events.slide.onMouseMove = function (event) {
  
  
  
  var md = Events.slide.mousedown
  if (!md)
    return true
  
  var target = Events.slide.target
  
  if (Events.slide.started) {
    $(target).trigger('slide', event)
    return true
  }
  
  // Left mouse test
  if (event.which != 1)
    return true
  
  // Time test
  if (new Date().getTime() - md.timeStamp < Events.slide.mouseDelay)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if (xDistance + yDistance < Events.slide.mouseThreshold)
    return true
  
  $(target).trigger('slidestart', event)
  Events.slide.started = true
  
}

Events.slide.onMouseDown = function (event) {
  Events.slide.mousedown = event
  Events.slide.target = event.target
}

Events.slide.onMouseUp = function (event) {
  if (Events.slide.started) {
    Events.slide.started = false
    $(Events.slide.target).trigger('slideend', event)
  }
  Events.slide.mousedown = false
  return true
}

Events.slide.onTouchStart = function (event) {
  Events.slide.touchstart = event
  Events.slide.target = event.target
}

Events.slide.onTouchEnd = function (event) {

  if (Events.slide.started) {
    Events.slide.started = false
    $(Events.slide.touchstart.target).trigger('slideend', event)
  }  
  return true
}

Events.slide.onTouchMove = function (event) {
  
  var md = Events.slide.touchstart
  var target = Events.slide.target
  
  // Time test
  if (new Date().getTime() - md.timeStamp < Events.slide.delay)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if (xDistance + yDistance < Events.slide.threshold)
    return true
   
  if (Events.slide.started) {
    $(target).trigger('slide', event)
    return true
  }
  
  $(target).trigger('slidestart', event)
  Events.slide.started = true  
}

if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
  document.addEventListener('touchstart', Events.slide.onTouchStart, true)
  document.addEventListener('touchmove', Events.slide.onTouchMove, true)
  document.addEventListener('touchend', Events.slide.onTouchEnd, true)
} else {
  document.addEventListener('mousedown', Events.slide.onMouseDown, true)
  document.addEventListener('mousemove', Events.slide.onMouseMove, true)
  document.addEventListener('mouseup', Events.slide.onMouseUp, true)
}
/**
 * The tap event is a quick event.
 *
 * Its a tap:
 *   when you click an element quickly.
 *   when you tap an element with your finger quickly.
 *
 * Its not a tap:
 *   when you mousedown or touchstart on an element, then hold for a bit, then release.
 *   when you mousedown or touchstart on an element and move more than a bit.
 *
 */

if (typeof Events === "undefined") 
   var Events = {}

// Create the tap Namespace
Events.tap = {}

// If the tap doesnt happen within X ms, its not a tap
Events.tap.mouseTime = 750

// We store a reference to the mousedown event
Events.tap.mousedown = null

// Mouse cannot move more than this many pixels, else its not a tap.
Events.tap.maxMouseDistance = 8

Events.tap.onMouseDown = function (event) {
  Events.tap.mousedown = event
}

Events.tap.onMouseUp = function (event) {
  
  // Create a new point to mousedown event.
  // Sacrifice a tiny bit of memory for a lot less characters.
  var md = Events.tap.mousedown
  if (!md)
    return true
  
  // Speed test
  if ((event.timeStamp - md.timeStamp) > Events.tap.mouseTime)
    return true

  // Same object test
  if (event.target !== md.target)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if ( xDistance + yDistance > Events.tap.maxMouseDistance )
    return true
  
  // Cumulative distance test
  
  // All custom events have 1 universal optional handler
  if (Events.tap.onPass)
    Events.tap.onPass(event)
  
  $(event.target).trigger('tap', md, event)
  
}

// We store a reference to the mousedown event
Events.tap.touchstart = null

// Mouse cannot move more than this many pixels, else its not a tap.
Events.tap.maxTouchDistance = 20

Events.tap.onTouchStart = function (event) {
  Events.tap.touchstart = event
}

Events.tap.onTouchEnd = function (event) {
  
  // Create a new point to mousedown event.
  // Sacrifice a tiny bit of memory for a lot less characters.
  var md = Events.tap.touchstart
  
  // Speed test
  if ((event.timeStamp - md.timeStamp) > Events.tap.maxTime)
    return true

  // Same object test
  if (event.target !== md.target)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if ( xDistance + yDistance > Events.tap.maxTouchDistance )
    return true
  
  // Cumulative distance test
  
  $(event.target).trigger('tap', md, event)
  
}


if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
  document.addEventListener('touchstart', Events.tap.onTouchStart, true)
  document.addEventListener('touchend', Events.tap.onTouchEnd, true)  
} else {
  document.addEventListener('mousedown', Events.tap.onMouseDown, true)
  document.addEventListener('mouseup', Events.tap.onMouseUp, true)  
}

$(document).on('keydown', 'input', function (event) {
  // Enter key test
  if (event.keyCode !== 13)
    return true
  $(this).trigger('enterkey')
})
/**
 * The hold event is a long hold.
 *
 * Its a hold:
 *   when you hold an element for a decent amount of time.
 *
 * Its not a tap:
 *   when you move while holding.
 *   when you do a quick hold.
 *
 */

if (typeof Events === "undefined") 
   var Events = {}

// Create the hold Namespace
Events.hold = {}

// If the hold doesnt happen after X ms, its not a hold
Events.hold.mousetime = 750
Events.hold.touchtime = 1000

// We store a reference to the mousedown event
Events.hold.mousedown = null

// Holds a reference to the target
Events.hold.target = false

// Mouse cannot move more than this many pixels, else its not a hold.
Events.hold.maxMouseDistance = 8

// Holds a reference to the timeout function
Events.hold.timeout = false

Events.hold.onMouseDown = function (event) {
  // Must be left mouse button
  if (event.which !== 1)
    return true
  Events.hold.mousedown = event
  Events.hold.target = event.target
  Events.hold.timeout = setTimeout('Events.hold.fireMouse()', Events.hold.mousetime)
}

Events.hold.onMouseMove = function (event) {
  Events.hold.mousemove = event
}

Events.hold.onMouseUp = function (event) {
  Events.hold.mousedown = false
  clearTimeout(Events.hold.timeout)
  return true
}

Events.hold.fireMouse = function () {
  
  var md = Events.hold.mousedown
  var mm = Events.hold.mousemove
  
  // Mouse down test
  if (!Events.hold.mousedown)
    return true
  
  // Distance test
  var xDistance = Math.abs(mm.screenX - md.screenX)
  var yDistance = Math.abs(mm.screenY - md.screenY)
  if (xDistance + yDistance > Events.hold.maxMouseDistance)
    return true

  $(Events.hold.target).trigger('hold', md)
}

// We store a reference to the touchstart event
Events.hold.touchstart = null

// Mouse cannot move more than this many pixels, else its not a hold.
Events.hold.maxTouchDistance = 8

Events.hold.onTouchStart = function (event) {
  Events.hold.touchstart = event
  Events.hold.touchmove = event
  Events.hold.startX = event.touches[0].pageX
  Events.hold.startY = event.touches[0].pageY
  Events.hold.target = event.target
  Events.hold.timeout = setTimeout('Events.hold.fireTouch()', Events.hold.touchtime)
}

Events.hold.onTouchMove = function (event) {
  console.log(Events.hold.touchstart.touches[0].pageX)
  Events.hold.touchmove = event
}

Events.hold.onTouchEnd = function (event) {
  Events.hold.touchstart = false
  clearTimeout(Events.hold.timeout)
  return true
}

Events.hold.fireTouch = function () {

  var touchMove = Events.hold.touchmove
  
  // Distance test
  var xDistance = Math.abs(touchMove.touches[0].pageX - Events.hold.startX)
  var yDistance = Math.abs(touchMove.touches[0].pageY - Events.hold.startY)
  if ( xDistance + yDistance > Events.hold.maxTouchDistance )
    return true
  
  $(Events.hold.target).trigger('hold', Events.hold.touchstart)
}


if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
  document.addEventListener('touchstart', Events.hold.onTouchStart, true)
  document.addEventListener('touchend', Events.hold.onTouchEnd, true)
  document.addEventListener('touchmove', Events.hold.onTouchMove, true)
} else {
  document.addEventListener('mousedown', Events.hold.onMouseDown, true)
  document.addEventListener('mousemove', Events.hold.onMouseMove, true)
  document.addEventListener('mouseup', Events.hold.onMouseUp, true)
}

// Keycode reference.
// backspace   8   6  54 v         86    f3            114
// tab         9   7  55 w         87    f4            115
// enter       13  8  56 x         88    f5            116
// shift       16  9  57 y         89    f6            117
// ctrl        17  a  65 z         90    f7            118
// alt         18  b  66 left com  91    f8            119
// pause/break 19  c  67 right win 92    f9            120
// caps lock   20  d  68 apple com 93    f10           121
// escape      27  e  69 numpad 0  96    f11           122
// spacebar    32                     
// page up     33  f  70 numpad 1  97    f12           123
// page down   34  g  71 numpad 2  98    numlock       144
// end         35  h  72 numpad 3  99    scroll lock   145
// home        36  i  73 numpad 4  100   semi-colon    186
// left arrow  37  j  74 numpad 5  101   equal sign    187
// up arrow    38  k  75 numpad 6  102   comma         188
// right arrow 39  l  76 numpad 7  103   dash          189
// down arrow  40  m  77 numpad 8  104   period        190
// insert      45  n  78 numpad 9  105   forward slash 191
// delete      46  o  79 multiply  106   grave accent  192
// 0           48  p  80 add       107   open bracket  219
// 1           49  q  81 subtract  109   back slash    220
// 2           50  r  82 decimal   110   close bracket 221
// 3           51  s  83 divide    111   single quote  222
// 4           52  t  84 f1        112
// 5           53  u  85 f2        113

if (typeof Events === "undefined") 
   var Events = {}

// Create the Namespace
Events.shortcut = {}

/**
 * Prefix to the selector that triggers that tap. Change this to make shortcuts
 * fire only on blocks matching a certain class (Nudge uses it to make shortcuts only
 * fire on blocks with a class of tool)
 */
Events.shortcut.context = ''
Events.shortcut.disableShortcutsIfInputHasFocus = true

/**
 * Check if user is editing text.
 */
Events.shortcut.isEditingText = function () {
  
  if (!Events.shortcut.disableShortcutsIfInputHasFocus)
    return false
  
  // Return true if user is editing an input
  if ($('input:focus,div:focus,textarea:focus,a:focus,[contenteditable=true]:focus').length)
    return true
  
  // Fix for firefox contenteditable
  if ($('div[contenteditable]').get(0) == document.activeElement)
    return true
  return false
}


// Turn to false to disable shortcuts
Events.shortcut.on = true

// We store all shortcuts here.
Events.shortcut.shortcuts = {}

/**
 * Fires the shortcut if and only if:
 *
 * - shortcuts are enabled
 * - there is a matching shortcut
 * - no input or contenteditable element has focus
 *
 * If a shortcut is fired, the default action for the key event is prevented.
 * 
 * @param {object} The keydown event
 */
Events.shortcut.fire = function(event) {

  // Return true if shortcuts off
  if (!Events.shortcut.on)
    return true
  
  if (Events.shortcut.isEditingText())
    return true
  
  // non ctrl key shortcuts
  var key = Events.shortcut.string_from_keycode(event.keyCode)
  if (event.shiftKey)
    key = 'shift+' + key
  if (event.metaKey)
    key = 'meta+' + key
  if (event.ctrlKey)
    key = 'ctrl+' + key
  if (event.altKey)
    key = 'alt+' + key

  if (Events.shortcut.shortcuts[key]) {
    var value = Events.shortcut.shortcuts[key]
    
    // Allow hard coded functions as shortcut values
    if (typeof value === 'function')
      value()
    
    // Also allow shortcuts to just trigger taps on blocks
    else {
      $(Events.shortcut.context + '#' + value).trigger('tap')
    }
    
    if (Events.shortcut.onfire)
      Events.shortcut.onfire(key)
    
    event.preventDefault()
  }
}

/**
 * @param {number} The keycode from a key event.
 * @return {string} The corresponding character.
 */
Events.shortcut.string_from_keycode = function (keycode) {
  // source: https://github.com/jeresig/jquery.hotkeys/blob/master/jquery.hotkeys.js
  var character = String.fromCharCode( keycode ).toLowerCase()
  var specialKeys = {
  			8: 'backspace', 9: 'tab', 13: 'return', 16: 'shift', 17: 'ctrl', 18: 'alt', 19: 'pause',
  			20: 'capslock', 27: 'esc', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home',
  			37: 'left', 38: 'up', 39: 'right', 40: 'down', 45: 'insert', 46: 'delete', 
  			96: '0', 97: '1', 98: '2', 99: '3', 100: '4', 101: '5', 102: '6', 103: '7',
  			104: '8', 105: '9', 106: '*', 107: '+', 109: '-', 110: '.', 111 : '/', 
  			112: 'f1', 113: 'f2', 114: 'f3', 115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 
  			120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12', 144: 'numlock', 145: 'scroll', 190 : '.', 191: '/', 224: 'meta'
  		}
  if (keycode in specialKeys) {
    character = specialKeys[keycode]
  }
  return character
}


// Bind the listener
$(document).on('ready', function () {
  $(document).on('keydown', Events.shortcut.fire)
})


