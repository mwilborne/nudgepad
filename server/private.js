var fs = require('fs'),
    Space = require('space')

module.exports = function (app) {
  var path = app.paths.nudgepad + 'private.space'
  if (!fs.existsSync(path))
    return true
  
  var space = new Space(fs.readFileSync(path, 'utf8'))
  space.each(function (key, value) {
    console.log('%s will be blocked', key)
    app.use(key, function (req, res) {
      res.send(401, 'Hidden')
    })
  })
  
}
