var Stats = new Tool('Stats')

Stats.htmlPages = []
Stats.hits = {}

// 127.0.0.1 /index.html GET 200 2 - "Wed, 11 Sep 2013 17:18:42 GMT" 127.0.0.1 "http://stats.localhost/nudgepad?tool=Stats" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.65 Safari/537.36"
Stats.compute = function () {
  Stats.hits = {}
  expressfs.readFile('nudgepad/requests.log.txt', function (data) {
    var rows = data.split(/\n/g)
    rows.forEach(function (value, key) {
      var row = value.split(/ /g)
      if (!row[1])
        return true
      // update index.html
      if (row[1] === '/')
        row[1] = '/index.html'
      var url = row[1].substr(1) // strip the beginning /
      if (Stats.hits[url])
        Stats.hits[url].push(row[0])
      else
        Stats.hits[url] = [row[0]]
    })
    Stats.trigger('pages')
  })
}


Stats.downloadPages = function () {
  Stats.htmlPages = []
  expressfs.readdir('', function (files) {
    files.forEach(function (value, index) {
      if (value.match(/\.html$/))
        Stats.htmlPages.push(value)
    })
  })
}

Stats.on('once', Stats.downloadPages)
Stats.on('once', Stats.compute)

Stats.sortByHits = function () {
  Stats.htmlPages.sort(function (a, b) {
    var aHits = (Stats.hits[a] ? Stats.hits[a].length : 0)
    var bHits = (Stats.hits[b] ? Stats.hits[b].length : 0)
    if (bHits > aHits)
      return 1
    if (bHits < aHits)
      return -1
    if (bHits == aHits)
      return b > a
  })
}

Stats.renderStats = function () {
  Stats.sortByHits()
  $('#OpenTool #StatsContainer').html('')
  
  var str = '<div class="row">'
  
  var i = 0
  
  Stats.htmlPages.forEach(function (value, key) {
    if (i > 0 && (i % 3 === 0))
      str += '</div><div class="row">'
    str += Stats.toButton(value)
    i++
  })
  if (((i + 1)  % 3 ) !== 0)
    str += '</div>'
  
  $('#OpenTool #StatsContainer').append(str)
  Stats.heights()
}

Stats.on('pages', Stats.renderStats)

Stats.heights = function () {
  var maxHeight = 0
  $('.jumbotron').css('height', 'auto')
  $('.jumbotron').each(function () {
    if ($(this).height() > maxHeight)
      maxHeight = $(this).height()
  }).height(maxHeight)
}

Stats.toButton = function (name) {
  var stat = ''
  if (Stats.hits[name])
    stat = Stats.hits[name].length  + ' Views. '
  else
    stat = '0 Views.'
  
  return '<div class="col-md-4"><div class="jumbotron cursor HomeBtn" onclick="window.open(\'' + name + '\', \'published\')" style="text-align: center;">\
      <h1></h1><h2>' + name + '</h2>\
      <p>' + stat + '</p>\
  </div></div>'
}

Stats.on('ready', function () {
  Stats.renderStats()
  $(window).on('resize', Stats.heights)
})

Stats.on('close', function () {
  $(window).off('resize', Stats.heights)
})

