var ForgotPassword = function (app) {
  
  // Login Post
  app.post(app.pathPrefix + 'forgotPassword', function(req, res, next) {
    // Invalid email address
    var email = req.body.email
    app.team.get(email, function (err, maker) {
      if (err)
        return res.redirect('/nudgepad/public/error.html?error=EmailNotFound')

      app.email(
        email,
        'forgotpassword@' + app.domain,
        'Login to ' + app.domain,
        'http://' + app.domain + app.pathPrefix + 'login?email=' + email + '&key=' + maker.get('key'),
        null,
        function (error) {
          if (error)
            return res.redirect('/nudgepad/public/error.html?error=UnknownError')
          else
            return res.redirect('/nudgepad/public/linkSent.html')
        })    
      
    })

  })
  
}

module.exports = ForgotPassword
