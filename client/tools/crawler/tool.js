var Crawler = new Tool('Crawler')
Crawler.set('description', 'Crawl existing webpages.')
Crawler.set('beta', true)

Crawler.urls = new Space()

Crawler.download = function () {
  if (Crawler.current > Crawler.max)
    return false
  var next = Crawler.urls.shift()
  if (!next)
    return false
  var url = next.toString().split(/ /)[0]
  var depth = next.toString().split(/ /)[1]
  $.ajax({
      url: '/nudgepad.proxy',
      type: "POST",
      timeout: 10000,
      data: { url : url},
    })
  .done(function (data) {
    Crawler.fetched.set(url, true)
    console.log('Downloaded: %s', url)
    var link = document.createElement("a")
    link.href = url
    link.hostname
    
    var space = $.htmlToScraps(data)
    
    if (!space)
      return Crawler.download()
  
    // add links to next
    space.find('tag', 'a').each(function (key, value) {
      
      // ignore links if depth exceeded
      if (!depth)
        return true

      var href = value.get('href')
      
      // ignore mailto links
      if (href.match(/^mailto\:/))
        return true
      
      // make relative links absolute
      // this is buggy but good enough for now.
      // todo: make it work really relative
      if (!href.match(/^https?\:\/\//))
        href = link.protocol + '//' + link.hostname  + '/' + href
      
      var childLink = document.createElement("a")
      childLink.href = href
      
      // ignore offsite links
      if (childLink.hostname !== link.hostname)
        return true
      
      // ignore already fetched links
      if (Crawler.fetched.get(href))
        return true
        
      Crawler.urls.set(href, depth - 1)
      console.log('Added to queue: %s', value.get('href'))
    })
    
    var filename = link.pathname.replace(/\//g, '')
    if ( filename === '' )
      filename = 'index.html'
    expressfs.writeFile(filename, data, function () {
      console.log('Saved: %s', filename)
      Alerts.success('Downloaded ' + url)
      Crawler.download()
    })
    
    })
  .fail(function (err) {
      Crawler.download()
  })
  Crawler.current++
}

Crawler.start = function () {
  Crawler.urls = new Space($('#CrawlCode').val())
  Crawler.max = 100
  Crawler.current = 0
  Crawler.fetched = new Space()
  Crawler.download()
}
