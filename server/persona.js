var superagent = require('superagent'),
    Space = require('space')

var Persona = function (app) {
  
  
  
  // Persona Login
  app.post(app.pathPrefix + 'persona', function(req, res, next) {

    var assertion = req.body.assertion

    superagent
      .post('https://verifier.login.persona.org/verify')
      .send({ assertion: assertion, audience: 'http://' + app.domain })
      .end(function(error, result){

        if (error)
          return res.send(error)

        var email = result.body.email

        var filename = app.paths.team + email + '.space'
        fs.readFile(filename, 'utf8', function (err, data) {
          
          if (!err)
            return res.send('No user with email ' + email)
          
          var maker = new Space(data)

          // Login successful!
          res.cookie('email', email, { expires: new Date(Date.now() + 5184000000)})
          res.cookie('key', maker.get('key'), { expires: new Date(Date.now() + 5184000000)})
          res.cookie('name', maker.get('name'), { expires: new Date(Date.now() + 5184000000)})
          res.redirect('/nudgepad')
          
          
        })


      })
  })
  
}

module.exports = Persona
