var Space = require('space'),
    os = require("os")

var ProjectRoute = function (app) {

  // todo: remove
  // Download all project for editing
  app.get('/nudgepad\.project', app.checkId, function (req, res, next) {

    var copy = new Space()
    copy.set('started', app.started)
    var hostname = os.hostname()
    if (app.development)
      hostname = 'localhost'
    copy.set('hostname', hostname)
    res.set('Content-Type', 'text/plain')
    res.send(copy.toString())
  })
  
}

module.exports = ProjectRoute
