var ParseName = require('./ParseName.js'),
    RandomString = require('./RandomString.js'),
    fs = require('fs'),
    Space = require('space')

// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
var ValidateEmail = function (email) { 
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

var UpdateEmail = function (app) {
  
  // Update account
  app.post(app.pathPrefix + 'updateEmail', app.checkId, function (req, res, next) {

    var email = req.body.email
    if (!ValidateEmail(email))
      return res.send('Invalid email', 400)

    // Same email
    if (email == req.email)
      return res.send('Same email', 400)

    app.team.get(req.email, function (err, maker) {
      var role = maker.get('role')
      var filename = app.paths.team + email + '.space'
      var newUser = new Space()
      newUser.set('name', ParseName(email))
      newUser.set('role', role)
      // Generate new password
      newUser.set('key', app.hashString(email + RandomString(8)))
      fs.writeFile(filename, newUser.toString(), 'utf8', function (error) {
        
        if (error) {
          console.log(error)
          return res.send('Error updating account', 500)
        }
        
        // change cookies
        res.cookie('nudgepadEmail', email, { expires: new Date(Date.now() + 5184000000)})
        res.cookie('nudgepadKey', newUser.get('key'), { expires: new Date(Date.now() + 5184000000)})
        res.cookie('nudgepadName', newUser.get('name'), { expires: new Date(Date.now() + 5184000000)})
        
        // Delete old account
        app.team.cache.delete(req.email)
        fs.unlink(app.paths.team + req.email + '.space', function (err) {
          
        })

        if (req.body.sendWelcomeEmail === 'true') {

          var message = 'Thanks for using NudgePad to build your project!' + '\n\n' +
                        'View your project here: http://' + app.domain + '\n\n' +
                        'Edit your project here: http://' + app.domain + '/nudgepad' + '\n\n' +
                        'If you have any questions, please contact us at support@nudgepad.com' + '\n\n' +
                        'Thanks,' + '\n' +
                        'Ben & Breck\n'

          app.email(email, 'nudgepad@' + app.domain, app.domain, message)

        }
        return res.send('Email changed')
      })
    })

      
  })
  
}



module.exports = UpdateEmail
