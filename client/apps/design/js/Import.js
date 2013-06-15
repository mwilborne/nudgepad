nudgepad.importPrompt = function () {
  
  var url = prompt('Enter a url to import')
  if (!url)
    return false
  
  if (!url.match(/^https?\:\/\//))
    url = 'http://' + url
  nudgepad.import(url)
  
}

nudgepad.import = function (url) {
  $.get('/nudgepad.import/' + url, {}, function (data) {
    Design.stage = new Page(data)
    nudgepad.stage.commit()
    nudgepad.stage.open(nudgepad.stage.activePage)
  })
}
