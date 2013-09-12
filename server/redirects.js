var fs = require('fs'),
    Space = require('space')

module.exports = function (app) {
  var path = app.paths.nudgepad + 'redirects.space'
  if (!fs.existsSync(path))
    return true
  
  var space = new Space(fs.readFileSync(path, 'utf8'))
  space.each(function (key, value) {
    console.log('will redirect %s to %s', key, value)
    app.get(key, function (req, res) {
      res.redirect(value)
    })
  })
  
}
