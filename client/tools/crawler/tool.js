var Crawler = new Tool('Crawler')
Crawler.set('description', 'Crawl existing webpages.')
Crawler.set('beta', true)
Crawler.set('icon', 'cloud-download')

Crawler.urls = new Space()

Crawler.download = function () {
  if (Crawler.current > Crawler.max)
    return false
  var next = Crawler.urls.shift()
  if (!next)
    return Crawler.downloadResource()
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
    
    var space = $.htmlToScraps(data)
    
    if (!space)
      return Crawler.download()
    
    Crawler.parseResources(space, link, 'img', 'src')
    Crawler.parseResources(space, link, 'script', 'src')
    Crawler.parseResources(space, link, 'link', 'href')

    if (depth)
      Crawler.parseLinks(space, link, depth-1)
    
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

Crawler.downloadResource = function () {
  if (Crawler.current > Crawler.max)
    return false
  var next = Crawler.resources.shift()
  if (!next)
    return false
  next = next.toString().split(/ /)[0]
  var link = document.createElement("a")
  link.href = next
  $.post('/nudgepad.proxyDownload', {url : next, path : link.pathname}, function () {
    console.log('Downloaded %s to %s', src, link.pathname)
    Crawler.downloadResource()
  })
}

Crawler.parseLinks = function (space, link, depth) {
  // add links to next
  space.find('tag', 'a').each(function (key, value) {

    var href = value.get('href')
    if (!href)
      return true
    
    // ignore mailto links
    if (href.match(/^mailto\:/))
      return true
    
    // make relative links absolute
    // this is buggy but good enough for now.
    // todo: make it work really relative
    if (!href.match(/^https?\:\/\//))
      href = link.protocol + '//' + link.hostname  + '/' + href.replace(/^\//, '')
    
    var childLink = document.createElement("a")
    childLink.href = href
    
    // ignore offsite links
    if (childLink.hostname !== link.hostname)
      return true
    
    // ignore already fetched links
    if (Crawler.fetched.get(href))
      return true
      
    Crawler.urls.set(href, depth)
    console.log('Added to queue: %s', href)
  })
}

Crawler.parseResources = function (space, link, tag, attr) {
  space.find('tag', tag).each(function (key, value) {

    var src = value.get(attr)
    if (!src)
      return true
    
    // make relative links absolute
    // this is buggy but good enough for now.
    // todo: make it work really relative
    if (!src.match(/^https?\:\/\//))
      src = link.protocol + '//' + link.hostname  + '/' + src
    
    var childLink = document.createElement("a")
    childLink.href = src
    
    // ignore offsite links
    if (childLink.hostname !== link.hostname)
      return true
    
    Crawler.resources.set(src, true)
  })
}

Crawler.start = function () {
  Crawler.urls = new Space($('#CrawlCode').val())
  Crawler.max = 100
  Crawler.current = 0
  Crawler.resources = new Space()
  Crawler.fetched = new Space()
  Crawler.download()
}
