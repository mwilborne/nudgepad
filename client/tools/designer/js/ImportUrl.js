Designer.importUrl = function (url, callback) {
  $.ajax({
      url: '/nudgepad.proxy',
      type: "POST",
      timeout: 10000,
      data: { url : url},
    })
  .done(function (data) {
    var name = url.replace(/^https?\:\/\//, '')
    var space = $.htmlToScraps(data)
    space = RelativeToAbsolute(space.toString(), url)
    Designer.menu.create(name, space.toString())
    Alerts.success('Imported ' + url)
    if (callback)
      callback()
    })
  .fail(function (err) {
      if (callback)
        callback(err)
    })
    
}

Designer.importUrlPrompt = function () {
  
  var url = prompt('Enter a url to import', 'http://')
  if (!url)
    return false
  
  if (!url.match(/^https?\:\/\//))
    url = 'http://' + url
  Designer.importUrl(url)
  
}


/*
var fetch = function () {
  var url = s.shift()
  if (!url)
    return false
  url = url.toString().trim()
  console.log('fetching %s', url)
  Designer.importUrl('http://' + url, fetch)
}
var s
$.get('/top.txt', function (d) {
  s = new Space(d)
  fetch()
})
*/
