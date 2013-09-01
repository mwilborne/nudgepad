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
  
    var link = document.createElement("a")
    link.href = url
    var filename = link.pathname.replace(/\//g, '')
    var hostname = link.hostname
    
    var space = $.htmlToScraps(data)
    
    if (!space)
      return Crawler.download()
    
    space = RelativeToAbsolute(space.toString(), url)
    // add links to next
    space.find('tag', 'a').each(function (key, value) {
      if (!depth)
        return true
      // If depth, add to queue
      var href = value.get('href')
      // but only if its part of the domain being crawled
      var link2 = document.createElement("a")
      link2.href = href
      if (link2.hostname !== hostname)
        return true
      Crawler.urls.set(href, depth - 1)
      console.log(value.get('href'))
    })
    
    expressfs.writeFile(filename, data, function () {
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
  Crawler.download()
}
