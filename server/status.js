var Space = require('space'),
    os = require('os')

var Status = function (app, speedcoach) {
  
  app.get(app.pathPrefix + 'status', app.checkId, function(req, res, next) {

    var mem = process.memoryUsage()
    var load = os.loadavg()
    space = new Space()
    space.set('domain', app.domain)
    space.set('started', app.started)
    space.set('ip', app.ip)
    space.set('uptime', (process.uptime()) + 's')
    space.set('os_release', os.release())
    space.set('platform', os.platform())
    var hostname = os.hostname()
    if (app.development)
      hostname = 'localhost'
    space.set('hostname', hostname)
    space.set('speedcoach', speedcoach.times())
    space.set('title', process.title)
    space.set('pid', process.pid)
    space.set('node_version', process.version)
    space.set('arch', process.arch)
    space.set('freemem', (os.freemem()/1000000).toFixed(1) + 'MB')
    space.set('totalmem', (os.totalmem()/1000000).toFixed(1) + 'MB')
    space.set('machine_uptime', (os.uptime()/86400).toFixed(2) + ' days')
    space.set('process_memory.rss', (mem.rss/1000000).toFixed(1) + 'MB')
    space.set('process_memory.heapTotal', (mem.heapTotal/1000000).toFixed(1) + 'MB')
    space.set('process_memory.heapUsed', (mem.heapUsed/1000000).toFixed(1) + 'MB')
    space.set('load-1-min', load[0].toFixed(2))
    space.set('load-5-min', load[1].toFixed(2))
    space.set('load-15-min', load[2].toFixed(2))
    res.set('Content-Type', 'text/plain')
    return res.send(space.toString())
  })
}

module.exports = Status