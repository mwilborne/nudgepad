var exec = require('child_process').exec,
    fs = require('fs'),
    Space = require('space')

var Exporter = function (app) {
  
  
  
  app.get(app.pathPrefix + 'export', app.checkId, function (req, res, next) {
    var spaceFile = app.paths['private'] + app.domain + '.space'
    var optionsFile = app.paths['private'] + '.options.space'
    var options = new Space()
    options.set('ignore app.log.txt', '')
    options.set('ignore projectPid.txt', '')
    options.set('ignore requests.log.txt', '')
    options.set('ignore monPid.txt', '')
    fs.writeFileSync(optionsFile, options.toString())
    exec('space ' + app.paths.project + ' ' + spaceFile + ' ' + optionsFile, function () {
      res.set('Content-Type', 'text/plain')
      res.sendfile(spaceFile, function () {
        fs.unlink(spaceFile)
        fs.unlink(optionsFile)
      })
    })
  }) 
}

module.exports = Exporter
