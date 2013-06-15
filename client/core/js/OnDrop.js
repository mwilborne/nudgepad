/**
 * Allows you to drag and drop files from finder onto the page.
 * Only supports 1 file at a time for now. And chrome. Very limited.
 */
nudgepad.ondrop = function(e) {
  mixpanel.track('I dropped an image onto the page')
  var reader = new FileReader()
  reader.onload = function(evt) {
    var space = new Space(
      "tag img\n" +
      "src " + evt.target.result +
      "\nstyle" +
      "\n width auto" +
      "\n height auto")
    var scraps = new Space().set('scrap1', space)
    Design.stage.insert(scraps)
  }
  reader.readAsDataURL(e.dataTransfer.files[0])
  e.preventDefault()
}

nudgepad.on('main', function () {
  window.addEventListener('drop', nudgepad.ondrop, false)
})
