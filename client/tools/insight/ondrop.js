Insight.drop = {}

// http://stackoverflow.com/questions/3590058/does-html5-allow-drag-drop-upload-of-folders-or-a-folder-tree
// http://stackoverflow.com/questions/6756583/prevent-browser-from-loading-a-drag-and-dropped-file
Insight.drop.traverseFileTree = function (item, path) {
  path = path || ""
  if (item.isFile) {
    // Get file
    item.file(function(file) {
      console.log("File:", path + file.name)
      Insight.drop.processFile(path, file)
    })
  } else if (item.isDirectory) {
    // Get folder contents
    var dirReader = item.createReader()
    dirReader.readEntries(function(entries) {
      for (var i=0; i<entries.length; i++) {
        Insight.drop.traverseFileTree(entries[i], path + item.name + "/")
      }
    })
  }
}

// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
// http://www.sitepoint.com/html5-javascript-open-dropped-files/
Insight.drop.processFile = function (path, file) {

  if (file.name.match(/\.space/)) {
    var reader = new FileReader()
    reader.onload = function(e) {
      var obj = new Space(e.target.result)
      var space = new Space(obj)
      var id = new Date().getTime().toString()
      var record = new Insight.Record(id, Insight.database, space)
      Insight.base.set(id, record)
      record.render()
      record.save()
    }
    reader.onerror = function (e) {
      console.log('error: %s', e)
    }
    reader.readAsText(file)
  }
  if (file.name.match(/\.csv/)) {
    var reader = new FileReader()
    reader.onload = function(e) {
      var collection = csvToSpace(e.target.result)
      collection.each(function (key, value, index) {
        var space = new Space(value)
        var record = new Insight.Record(key, Insight.database, space)
        Insight.base.set(key, record)
        record.render()
        record.save()
      })
    }
    reader.onerror = function (e) {
      console.log('error: %s', e)
    }
    reader.readAsText(file)
  }
}

Insight.drop.ondrop = function(event) {
  event.preventDefault()
  Insight.drop.event = event
  var items = event.dataTransfer.items
  for (var i=0; i<items.length; i++) {
    // webkitGetAsEntry is where the magic happens
    var item = items[i].webkitGetAsEntry()
    if (item) {
      Insight.drop.traverseFileTree(item)
    }
  }
}

Insight.drop.ondragover = function(event){
  event.preventDefault()
}

Insight.on('close', function () {
  window.removeEventListener("dragover", Insight.drop.ondragover)
  window.removeEventListener("drop" , Insight.drop.ondrop)
})

Insight.on('open', function () {
  
  window.addEventListener("dragover", Insight.drop.ondragover, false)
  window.addEventListener("drop" , Insight.drop.ondrop, false)
  
})

