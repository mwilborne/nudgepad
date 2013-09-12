var exec = require('child_process').exec,
    fs = require('fs'),
    Space = require('space')


var Survey = function (app) {
  
  app.paths.surveys = app.paths.nudgepad + 'surveys/'
  
  var isSurveysInstalled = fs.existsSync(app.paths.surveys)
  var installSurveys = function () {
    if (isSurveysInstalled)
      return true
    fs.mkdirSync(app.paths.surveys)
    isSurveysInstalled = true
  }
  
  app.get(app.pathPrefix + 'surveys', app.checkId, function (req, res, next) {

    var output = app.paths.nudgepad + 'surveys.space'
    exec('space ' + surveyPath + ' ' + output, function () {
      res.set('Content-Type', 'text/plain')
      res.sendfile(output, function () {
        fs.unlink(output)  
      })    
    })

  })

  app.post(app.pathPrefix + 'surveys', function (req, res, next) {

    installSurveys()

    // Save submission
    var timestamp = new Date().getTime()
    var filename = timestamp + '.space'
    var space = new Space(req.body)
    fs.writeFile(app.paths.surveys + filename, space.toString(), 'utf8', function (error) {
      if (error)
        return res.send('Save Error: ' + error, 500)

      // The following will send the submission to an email address on file for the project
      // if one exists.
      var email = app.getOwner()
      if (email) {
        app.email(email, 'surveys@' + app.domain, app.domain + ': New Message', space.toString())
        console.log('Emailing survey submission to %s', email)
      }

      res.send('')
    })

  })
  
}

module.exports = Survey


