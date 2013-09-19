var Sketch = new Tool('Sketch')

// https://github.com/szimek/signature_pad

Sketch.on('ready', function () {
  
  $('#SketchCanvas')
    .attr('width', $(window).width())
    .attr('height', $(window).height())
  
  var canvas = document.querySelector("#SketchCanvas")
  Sketch.signaturePad = new SignaturePad(canvas)

})


Sketch.save = function () {
  var name = prompt('Enter a filename', 'untitled.png')
  if (!name)
    return true
  var data = Sketch.signaturePad.toDataURL('png')
  data = data.replace('data:image/png;base64,', '')
  expressfs.writeFileBase64(name, data, function () {
    Alerts.success('Saved <a href="' + name + '?' + new Date().getTime() + '" target="published">' + name + '</a>')
  })
}
