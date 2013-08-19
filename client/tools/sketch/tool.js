var Sketch = new Tool('Sketch')
Sketch.set('description', 'Sketch pictures for your project.')

// http://intridea.github.io/sketch.js/

Sketch.on('open', function () {
  $('#SketchCanvas')
    .attr('width', $(window).width())
    .attr('height', $(window).height())
    .sketch()
})


Sketch.save = function () {
  var name = prompt('Enter a filename', 'untitled.png')
  if (!name)
    return true
  var data = $('#SketchCanvas')[0].toDataURL('png')
   // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABSQAAALjCAYAAAALJQv/AAAgAElEQ…AAAQIECEQFHJLRYcQiQIAAAQIECBAgQIAAAQIECBAg8CgwAUPuAqlLvAYAAAAASUVORK5CYII=
  data = data.replace('data:image/png;base64,', '')
  fs.writeFileBase64(name, data, function () {
    Alerts.success('Saved')
  })
}
