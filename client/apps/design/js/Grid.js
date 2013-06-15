/**
 * A grid object looks like:
 * radius 15
 * type dynamic
 * vertical_spacing 100
 * horizontal_spacing 100
 * snaplines true
 * on true
 * visible false
 * points
 *  0.0
 *   x 0
 *   y 0
 *   selector #scrap2
 *  10.21
 *   x 10
 *   y 21
 *   selector #scrap3
 *
 * @param {object}
 */
function Grid (obj) {
  this.points = {}
  this.radius = 7
  this.snap_to_objects = true
  this.snap_to_grid = false
  this.snap_to_container = true
  this.vertical_spacing = 20
  this.horizontal_spacing = 20
  this.snaplines = true
  this.on = true
  this.visible = false
  if (obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i))
        this[i] = obj[i]
    }
  }
}

/**
 * 
 */
Grid.prototype.addDynamicPoints = function () {

  var grid = this
  // Cap grid at 200 elements for now
  if ($('#DesignStageBody #body').children('.scrap:not(.selection)').length > 200)
    return true
  $('#DesignStageBody #body').children('.scrap:not(.selection)').each(function(){
    // Make sure no problem fetching scrap
    var scrap = $(this).scrap()
    if (scrap)
      grid.addPoints(scrap.selector())
  })
}

/**
 * 
 */
Grid.prototype.addFixedPoints = function () {


  // verticals
  var start = $('#DesignStageBody').position().left
  var end = $('#DesignStageBody').position().left + $('#DesignStageBody').outerWidth()
  this.horizontal_spacing = parseFloat(this.horizontal_spacing)
  for (var i = start; i <= end; i = i + this.horizontal_spacing) {
    this.addPoint(i, 0, '#DesignStageBody')  
  }
  
  start = $('#DesignStageBody').position().top
  end = $('#DesignStageBody').position().top + $('#DesignStageBody').outerHeight()
  this.vertical_spacing = parseFloat(this.vertical_spacing)
  for (var i = start; i <= end; i = i + this.vertical_spacing) {
    this.addPoint(0, i, '#DesignStageBody')  
  }

}

/**
 * @param {number}
 * @param {number}
 * @param {string}
 * Adds a point to the grid
 */
Grid.prototype.addPoint = function (x, y, selector) {
  var point = {},
      id = x + '.' + y
  point.x = x
  point.y = y
  point.selector = selector
  this.points[id] = point
}

/**
 * Computes 3 points from a jQuery object
 * @param {string}
 */
Grid.prototype.addPoints = function (selector) {
  
  var element = $(selector)
  if (!element.length)
    return console.log('not found %s', selector)
  this.addPoint(element.position().left, element.position().top, selector)
  var middle = Math.round(element.position().top + Math.round(element.outerHeight()/2))
  var center = Math.round(element.position().left + Math.round(element.outerWidth()/2))
  this.addPoint(center, middle, selector)
  this.addPoint(element.position().left + element.outerWidth(), element.position().top + element.outerHeight(), selector)  
}

/**
 * 
 */
Grid.prototype.create = function () {
  
  
  this.points = {}
  if (!this.on) {
//    this.points.clear()
    return this.erase()
  }
  
  if (this.snap_to_objects)
    this.addDynamicPoints()
  
  if (this.snap_to_grid)
    this.addFixedPoints()
  
  if (this.snap_to_container) {
    // We create these in specific order so that the bigger scraps override the little ones.
    // left
//    this.addPoint(0, $('#DesignStageBody').position().top, '#DesignStageBody')
    // right
    this.addPoint($('#DesignStageBody').outerWidth(), 0, '#DesignStageBody')
    // center
    this.addPoint(Math.round($('#DesignStageBody').outerWidth()/2), 0, '#DesignStageBody')
    // top
    this.addPoint(0, 0, '#DesignStageBody')
    // bottom
    this.addPoint(0, $('#DesignStageBody').height(), '#DesignStageBody')
    // middle
    this.addPoint(0, Math.round($(window).height()/2), '#DesignStageBody')
    
  }
  
  if (this.visible)
    this.draw()
  
  else
    this.erase()

}

/**
 * 
 */
Grid.prototype.draw = function () {
  
  var width = $("#DesignStageBody").width()
  var height = $("#DesignStageBody").height()
  
  if (this.context)
    this.erase()
  
  var canvas = '<canvas style="position: absolute; top: 0; left: 0; z-index: 0;" id="grid_canvas" width="' + width + '" height="' + height + '"></canvas>'
  $('#DesignStageBody').append(canvas)
  
  this.context = document.getElementById('grid_canvas').getContext('2d')
  this.context.strokeStyle = '#eee'
  
  var lines = {}
  
  lines.x = {}
  lines.y = {}
  
  for (var i in this.points) {
    
    if (!this.points.hasOwnProperty(i))
      continue
    
    var point = this.points[i]
    
    // Dont draw lines based on objects
    if (point.selector !== '#DesignStageBody')
      continue
    
    this.context.lineWidth = 0.5
    // Dont redraw lines
    if (!(point.x in lines.x)) {
      this.context.beginPath()
      this.context.moveTo(point.x + .5, 0)
      this.context.lineTo(point.x + .5, height)
      this.context.closePath()
      this.context.stroke()
      lines.x[point.x] = true
    }
    
    if (!(point.y in lines.y)) {
      this.context.beginPath()
      this.context.moveTo(0, point.y + .5)
      this.context.lineTo(width, point.y + .5)
      this.context.closePath()
      this.context.stroke()
      lines.y[point.y] = true
    }
    
  }
  
}


/**
 * @param {obj}
 * @param {obj}
 */
Grid.prototype.drawSnapline = function (point1, point2) {
  
  if (!this.snaplines) return false
  
  this.drawSnaplineCanvas()
  this.snapline_context.beginPath()
  this.snapline_context.lineWidth = 1
  this.snapline_context.moveTo(point1.x + .5, point1.y + .5)
  this.snapline_context.lineTo(point2.x + .5, point2.y + .5)
  this.snapline_context.stroke()
  
  //draw a circle
  
  this.snapline_context.moveTo(point1.x, point1.y)
  this.snapline_context.beginPath()
  this.snapline_context.arc(point1.x, point1.y, 2, 0, Math.PI*2, true)
  this.snapline_context.closePath()
  this.snapline_context.fill()
  
  this.snapline_context.moveTo(point2.x, point2.y)
  this.snapline_context.beginPath()
  this.snapline_context.arc(point2.x, point2.y, 2, 0, Math.PI*2, true)
  this.snapline_context.closePath()
  this.snapline_context.fill()
  
//  console.log(point2.selector)
  
  // Dont draw lines based on objects
  if (point2.selector !== '#DesignStageBody')
    $(point2.selector).addClass('GridSnapOrigin')
}

/**
 */
Grid.prototype.drawSnaplineCanvas = function () {
  
  if (this.snapline_context)
    return true
  
  this.width = $("#DesignStageBody").width()
  this.height = $("#DesignStageBody").height()
  
  var canvas = '<canvas style="position: absolute; top: 0; left: 0; z-index: 100;" id="snapline_canvas" width="' + this.width + '" height="' + this.height + '"></canvas>'
  $('#DesignStageBody').append(canvas)
  
  this.snapline_context = document.getElementById('snapline_canvas').getContext('2d')
  this.snapline_context.lineWidth = 1
  this.snapline_context.strokeStyle = 'blue'
  
  // Sometimes it gets stuck(ie when someone is snapping then right clicks). This lets you click it to remove it.
  $('#snapline_canvas').on('mousedown', function () {
    $(this).remove()
  })
}

/**
 */
Grid.prototype.erase = function () {
  delete this.context
  delete this.snapline_context
  $('#grid_canvas,#snapline_canvas').remove()
  $('.GridSnapOrigin').removeClass('GridSnapOrigin')
}

/**
 */
Grid.prototype.eraseSnaplines = function () {
  
  if (!this.snaplines) return false
  
  $('.GridSnapOrigin').removeClass('GridSnapOrigin')
  
  if (!this.snapline_context)
    return false
  // I have lots of transforms right now
//  this.snapline_context.save()
///  this.snapline_context.setTransform(1, 0, 0, 1, 0, 0)
  // Will always clear the right space
  this.snapline_context.clearRect(0, 0, this.width, this.height)
//  this.snapline_context.restore()
  // Still have my old transforms
}

/**
 * todo: make sure grid is sorted so this is blazing fast!
 * @return {object} change.x, change.y
 */
Grid.prototype.getDelta = function (scrap_points) {
  this.eraseSnaplines()
  
  var change = {}
  var x_pair = []
  var y_pair = []
  // Check all 3 points. We are looking for the closest link.
  for (var i in scrap_points) {
    var scrap_point = scrap_points[i]
    // compute the smallest 3 x difference to each point
    for (var j in this.points) {
      if (!this.points.hasOwnProperty(j))
        continue
      var grid_point = this.points[j]
      
      var x_difference = grid_point.x - scrap_point.x
      var y_difference = grid_point.y - scrap_point.y
      
      // Initialize values
      if (!change.x) {
        change.x = x_difference
        change.y = y_difference
      }
      
      // If this point difference is closer, use it.
      if (Math.abs(x_difference) <= Math.abs(change.x)) {
        change.x = x_difference
        x_pair = [scrap_point, grid_point]
      }
      if (Math.abs(y_difference) <= Math.abs(change.y)) {
        change.y = y_difference
        y_pair = [scrap_point, grid_point]
      }
    }

  }
  
  
  var x_snapped = Math.abs(change.x) < this.radius
  var y_snapped = Math.abs(change.y) < this.radius
  
  if (!x_snapped) change.x = 0
  if (!y_snapped) change.y = 0
  
  // The scrap points may have shifted in 2 directions, so make sure
  // we are drawing the *new* scrap points when we draw the snapline.
  if (x_snapped) {
    x_pair[0] = {
      x : x_pair[0].x + change.x,
      y : x_pair[0].y + change.y
    }
    this.drawSnapline(x_pair[0], x_pair[1])
  }
  if (y_snapped) {
    y_pair[0] = {
      x : y_pair[0].x + change.x,
      y : y_pair[0].y + change.y
    }
    this.drawSnapline(y_pair[0], y_pair[1])
  }
  
  return change
  

  
}

/**
 */
Grid.prototype.removeSnaplines = function () {
  delete this.snapline_context
  $('#snapline_canvas').remove()
  $('.GridSnapOrigin').removeClass('GridSnapOrigin')
}

