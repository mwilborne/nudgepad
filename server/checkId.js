function CheckID (app) {
  
  /**
   * Checks the maker is authorized and loads the maker info.
   *
   * @param {object}
   * @param {object}
   * @param {object}
   */
  app.checkId = function(req, res, next) {

    var email = req.cookies.nudgepadEmail || req.body.email || req.query.email
    var key = req.cookies.nudgepadKey || req.body.key || req.query.key

    // Not logged in
    if (!email) {
      // Store the url they were attempting to visit. We will
      // redirect them to that url after login.
      res.cookie('nudgepadRedirect', req.url)
      return res.redirect('/nudgepad/public/login.html')
    }

    app.team.get(email, function (err, maker) {
      if (err) {
        // If use has invalid cookies set, clear them.
        if (req.cookies.nudgepadEmail)
          res.clearCookie('nudgepadEmail')
        if (req.cookies.nudgepadKey)
          res.clearCookie('nudgepadKey')
        return res.send('User not found')
      }
      
      // Invalid key
      if (maker.get('key') !== key) {
        // If use has invalid cookies set, clear them.
        if (req.cookies.nudgepadEmail)
          res.clearCookie('nudgepadEmail')
        if (req.cookies.nudgepadKey)
          res.clearCookie('nudgepadKey')
        return res.send('Invalid key ' + key)
      }
      
      // Invalid role
      var role = maker.get('role')
      if (role !== 'owner' && role !== 'maker')
        return res.send('Not authorized')
      
      
      // Login okay
      req.email = email
      // Resume fulfilling request
      next()
        
      
    })


  }

  app.privateCheck = function (req, res, next) {
    if (!app.isPrivate)
      return next()
    app.checkId(req, res, next)
  }
  
}


module.exports = CheckID
