// Extends an object by adding a paths property containing all paths
function Paths (app, projectsPath, clientPath) {
  domain = app.domain
  var paths = {}
  paths.server = __dirname + '/'
  // Where to store project specific files
  paths.project = projectsPath + domain + '/'
  // Where to store nudgepad files
  paths.nudgepad = paths.project + 'nudgepad/'
  // where to store team
  paths.team = paths.nudgepad + 'team/'
  // where to store requests log
  paths.requestsLog = paths.nudgepad + 'requests.log.txt'
  paths.client = clientPath
  app.paths = paths
}

module.exports = Paths
