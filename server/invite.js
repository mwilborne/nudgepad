var ParseName = require('./ParseName.js'),
    RandomString = require('./RandomString.js'),
    _ = require('underscore'),
    fs = require('fs'),
    Space = require('space')

var Invite = function (app) {
  
  var createUser = function (email) {
    var filename = app.paths.team + email + '.space'
    var maker = new Space()
    maker.set('name', ParseName(email))
    maker.set('role', 'maker')
    maker.set('key', app.hashString(email + RandomString(8)))
    fs.writeFile(filename, maker.toString(), 'utf8', function (error) {
      
      if (error)
        return console.log(error)

      app.email(
        email,
        'nudgepad@' + app.domain,
        'Your login link to ' + app.domain,
        'http://' + app.domain + app.pathPrefix + 'login?email=' + email + '&key=' + maker.get('key'),
        null,
        function (error) {
          if (error)
            console.log(error)
      })
      
    })
  }
  
  app.post(app.pathPrefix + 'invite', app.checkId, function (req, res, next) {
    var newUsers = req.body.emails.split(/ /)
    _.each(newUsers, createUser)  
    res.send('Sent')

  })
  
}

module.exports = Invite

