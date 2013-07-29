var ParseName = require('./ParseName.js'),
    RandomString = require('./RandomString.js'),
    Marking = require('markings'),
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

    var role = app.Project.get('team').get(req.email + ' role')  
    // Generate new password
    var maker = new Marking(app.paths.team + email + '.space')
    maker.set('name', ParseName(email))
    maker.set('role', role)
    maker.set('key', app.hashString(email + RandomString(8)))
    maker.create(function (error) {
      if (error) {
        console.log(error)
        return res.send('Error updating account', 500)
      }

      // change cookies
      res.cookie('email', email, { expires: new Date(Date.now() + 5184000000)})
      res.cookie('key', maker.get('key'), { expires: new Date(Date.now() + 5184000000)})
      res.cookie('name', maker.get('name'), { expires: new Date(Date.now() + 5184000000)})
      app.Project.set('team ' + email, new Space(maker))

      // Delete old account
      app.Project.delete('team ' + req.email)
      new Marking(app.paths.team + req.email + '.space').trash()
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
  
}



module.exports = UpdateEmail
