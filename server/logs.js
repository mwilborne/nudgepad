var exec = require('child_process').exec

var Logs = function (app) {
  
  app.get(app.pathPrefix + 'logs', app.checkId, function(req, res, next) {

    exec('tail -100 ' + app.paths.nudgepad + 'app.log.txt', function (error, stdout, stderr) {
      res.set('Content-Type', 'text/plain')
      res.send(stdout)
    })

  })
  
}

module.exports = Logs
