var ImportHtmlFiles = function () {
  // idea where we can import uploaded files
  
  $.get('/nudgepad.explorer.list', {}, function (data) {
    
    var files = new Space(data)
    files.each(function (filename, value) {
      if (!filename.match(/\.html$/))
        return true
      var name = filename.replace('.html', '')
      // If it does not exist, import it!
      expressfs.readFile(filename, function (data) {
        var space = $.htmlToScraps(data)
        expressfs.writeFile('private/pages/' + name + '.space', space.toString(), function () {
          console.log('Imported ' + name)
        })
      })
      
    })

  })
  
}
