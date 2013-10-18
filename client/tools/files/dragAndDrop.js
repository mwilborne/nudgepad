Files.drop = {}

// http://stackoverflow.com/questions/3590058/does-html5-allow-drag-drop-upload-of-folders-or-a-folder-tree
// http://stackoverflow.com/questions/6756583/prevent-browser-from-loading-a-drag-and-dropped-file
Files.drop.traverseFileTree = function (item, path) {
  path = path || ""
  if (item.isFile) {
    // Get file
    item.file(function(file) {
      console.log("File:", path + file.name)
      Files.drop.sendFile(path, file)
    })
  } else if (item.isDirectory) {
    // Get folder contents
    var dirReader = item.createReader()
    dirReader.readEntries(function(entries) {
      for (var i=0; i<entries.length; i++) {
        Files.drop.traverseFileTree(entries[i], path + item.name + "/")
      }
    })
  }
}

// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
Files.drop.sendFile = function (path, file) {
  
  var uri = "/nudgepad.upload"
  uri += '?path=' + Files.get('path').replace(' ','/') + '/' + (path ? path : '')
  var xhr = new XMLHttpRequest()
  var fd = new FormData()
  
  xhr.open("POST", uri, true)
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Handle response.
          Alerts.success(xhr.responseText)
//          alert(xhr.responseText) // handle response.
//          Files.refresh()
      }
      else if (xhr.status == 500) {
        Alerts.error(xhr.responseText)
      }
  }
  var filename = file.name.replace(/ /g, '-')
  fd.append('filename', filename)
  fd.append('myFile', file)
  // Initiate a multipart/form-data upload
  xhr.send(fd)
}

Files.drop.ondrop = function(event) {
  console.log('yo')
  event.preventDefault()

  var items = event.dataTransfer.items
  for (var i=0; i<items.length; i++) {
    // webkitGetAsEntry is where the magic happens
    var item = items[i].webkitGetAsEntry()
    if (item) {
      Files.drop.traverseFileTree(item)
    }
  }
}

Files.drop.ondragover = function(event){
  event.preventDefault()
}

Files.on('close', function () {
  window.removeEventListener("dragover", Files.drop.ondragover)
  window.removeEventListener("drop" , Files.drop.ondrop)
})

Files.on('open', function () {
  
  window.addEventListener("dragover", Files.drop.ondragover, false)
  window.addEventListener("drop" , Files.drop.ondrop, false)
  
})

