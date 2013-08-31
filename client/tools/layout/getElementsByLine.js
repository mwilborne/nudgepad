// http://stackoverflow.com/questions/99353/how-to-test-if-a-line-segment-intersects-an-axis-aligned-rectange-in-2d
var isRectangleIntersectedByLine = function (
  a_rectangleMinX,
  a_rectangleMinY,
  a_rectangleMaxX,
  a_rectangleMaxY,
  a_p1x,
  a_p1y,
  a_p2x,
  a_p2y) {

  // Find min and max X for the segment
  var minX = a_p1x
  var maxX = a_p2x

  if (a_p1x > a_p2x) {
    minX = a_p2x
    maxX = a_p1x
  }

  // Find the intersection of the segment's and rectangle's x-projections
  if (maxX > a_rectangleMaxX)
    maxX = a_rectangleMaxX

  if (minX < a_rectangleMinX)
    minX = a_rectangleMinX

  // If their projections do not intersect return false
  if (minX > maxX)
    return false

  // Find corresponding min and max Y for min and max X we found before
  var minY = a_p1y
  var maxY = a_p2y

  var dx = a_p2x - a_p1x

  if (Math.abs(dx) > 0.0000001) {
    var a = (a_p2y - a_p1y) / dx
    var b = a_p1y - a * a_p1x
    minY = a * minX + b
    maxY = a * maxX + b
  }

  if (minY > maxY) {
    var tmp = maxY
    maxY = minY
    minY = tmp
  }

  // Find the intersection of the segment's and rectangle's y-projections
  if(maxY > a_rectangleMaxY)
    maxY = a_rectangleMaxY

  if (minY < a_rectangleMinY)
    minY = a_rectangleMinY

  // If Y-projections do not intersect return false
  if(minY > maxY)
    return false

  return true
}

$.fn.getElementsByLine = function (x1, y1, x2, y2) {
  var matches = []
  var leftX = (x1 > x2 ? x2 : x1)
  var topY = (y1 > y2 ? y2 : y1)
  $(this).each(function () {
    var el = $(this)
    var box = {}
    box.left = el.offset().left,
    box.right = el.offset().left + el.outerWidth(),
    box.top = el.offset().top,
    box.bottom = el.offset().top + el.outerHeight()
    
    if (isRectangleIntersectedByLine(box.left, box.top, box.right, box.bottom, x1, y1, x2, y2))
      matches.push(el)
  })
  return matches
}
