// Extends an object by adding a paths property containing all paths
function Paths (app, projectsPath, clientPath) {
  domain = app.domain
  var paths = {}
  paths.server = __dirname + '/'
  // Where to store project specific files
  paths.project = projectsPath + domain + '/'
  // Where to store private files
  paths['private'] = paths.project + 'private/'
  // where to store server side packages
  paths.packages = paths['private'] + 'packages/'
  // where to store pages
  paths.pages = paths['private'] + 'pages/'
  // where to store team
  paths.team = paths['private'] + 'team/'
  // where to store requests log
  paths.requestsLog = paths['private'] + 'requests.log.txt'
  paths.client = clientPath
  app.paths = paths
}

module.exports = Paths
