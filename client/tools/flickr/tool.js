var Flickr = new Tool('Flickr')

Flickr.download = function (url) {
  var filename = Flickr.query.toLowerCase().replace(/ /g, '-') + '.jpg'
  filename = prompt('Enter a filename', filename)
  if (!filename)
    return false
  $.post('/nudgepad.proxyDownload', {url : url, path : filename}, function () {
    Alerts.success('Saved ' + filename)
  })
}

Flickr.search = function (query) {
  Flickr.query = query || ''
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=caf160db8d568920296a366f58cb3a0c&text=' + query + '&format=json&nojsoncallback=1'
  $('#photos').html('<center><img src="/nudgepad/public/images/spinner.gif"></center>')
  $.getJSON(url, function (data) {
    var results = new Space(data).get('photos photo')
    $('#photos').html('')
    console.log(results.toString())
    var c = 0
    results.each(function (key, value) {
      c++
      var url = 'http://farm' + value.get('farm') + '.staticflickr.com/' + value.get('server') + '/' + value.get('id') + '_' + value.get('secret') + '_n.jpg'
      var url2 = 'http://farm' + value.get('farm') + '.staticflickr.com/' + value.get('server') + '/' + value.get('id') + '_' + value.get('secret') + '_b.jpg'
      $('#photos').append('<img class="cursor" src="' + url + '" onclick="Flickr.download(\'' + url2 + '\')"></a>')
      if (c > 30)
        return false
    })
  })
  .fail(function() {
      Alerts.error('Please try again')
      $('#photos').html('')
    })
}

Flickr.on('ready', function () {

  
})