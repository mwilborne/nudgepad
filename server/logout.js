var Logout = function (app) {

  app.get(app.pathPrefix + 'logout', function(req, res, next) {
    res.clearCookie('nudgepadEmail')
    res.clearCookie('nudgepadKey')
    return res.redirect('/nudgepad/public/login.html')
  })
  
}

module.exports = Logout
