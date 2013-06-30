var speedcoach = require('speedcoach')
speedcoach('start')

if (process.argv.length < 3) {
  console.log('Specify a domain when starting')
  process.exit()
}

if (process.argv.length < 4) {
  console.log('Specify a port when starting')
  process.exit()
}

var http_server,
    io

var fs = require('fs'),
    express = require('express'),
    dns = require('dns'),
    https = require('https'),
    http = require('http'),
    request = require('request'),
    crypto = require('crypto'),
    exec = require('child_process').exec,
    _ = require('underscore'),
    async = require('async'),
    Space = require('space'),
    Marking = require('markings'),
    Page = require('scraps'),
    Email = require('./email.js')

var app = express()
app.pathPrefix = '/nudgepad.'

// http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
//first, checks if it isn't implemented yet
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

/*** PATHS ****/

var dataPath = '/nudgepad/'
var projectsPath = dataPath + 'projects/'
var clientPath = __dirname + '/../client/'
var runningPath = dataPath + 'running/'
var portsPath = dataPath + 'ports/'

/********* CREATE MAIN NUDGE NAMESPACE SINGLETON OBJECT *********/

/**
 * Nudge is a singleton.
 */

app.domain = process.argv[2]
app.port = process.argv[3]
app.defaultTypes = ['pages', 'posts', 'makers', 'timelines']

// Change the process title for easier debugging & monitoring
process.title = app.domain

if (!fs.existsSync(projectsPath + app.domain + '/')) {
  console.log('Project does not exist...')
  process.exit()
}

// Development always occurs on macs
app.isMac = process.env.HOME.match(/Users/)
app.development = !!app.isMac
// Set IP Address.
app.ip = process.env.IPADDRESS

require('./paths.js')(app, projectsPath, clientPath)

// Run install script in case its not installed
require('./install.js')(app)

app.Project = new Space()
app.Screens = new Space()

// Load the HTML file and add mtimes as query string so the
// maker always get the latest version of the nudgepad.js and nudgepad.css
// todo: remove this?
app.nudgepadCssVersion = fs.statSync(clientPath + 'production/nudgepad.min.css').mtime.getTime()
app.nudgepadJsVersion = fs.statSync(clientPath + 'production/nudgepad.min.js').mtime.getTime()
app.nudgepadHtmlVersion = fs.readFileSync(clientPath + 'production/nudgepad.min.html', 'utf8')
  .replace(/JSV/, app.nudgepadJsVersion)
  .replace(/CSSV/, app.nudgepadCssVersion)


// todo: remove this?
app.started = new Date().getTime()


app.Project.loadFolder = function (folder) {
  // Create a Space for every folder
  app.Project.set(folder, new Space())
  // Grab all spaces in a folder
  var files = fs.readdirSync(app.paths['private'] + folder)
  for (var j in files) {
    // Dont read non space files
    if (!files[j].match(/\.space/))
      continue
    // Load every file into memory
    var filePath = app.paths['private'] + folder + '/' + files[j]
    app.Project.set(folder + ' ' + files[j].replace(/\.space$/,''), new Marking(filePath).loadSync())
  }
}

/**
 * Load all Spaces into memory.
 */
app.Project.loadFromDisk = function () {
  
  // Load settings
  app.Project.set('settings', new Space())
  var files = fs.readdirSync(app.paths.settings)
  for (var j in files) {
    // Space files
    if (files[j].match(/\.space/)) {
      var filename = files[j].replace(/\.space$/, '')
      app.Project.set('settings ' + filename, new Space(fs.readFileSync(app.paths.settings + files[j], 'utf8')))
    }
    // Text files
    else if (files[j].match(/\.txt/)) {
      var filename = files[j].replace(/\.txt$/, '')
      app.Project.set('settings ' + filename, fs.readFileSync(app.paths.settings + files[j], 'utf8'))
    }
  }
  
  // Iterate on each folder in default types
  for (var i in app.defaultTypes) {
    app.Project.loadFolder(app.defaultTypes[i])
  }
  
}

/**
 * @param {string}
 * @return {string}
 */
app.hashString = function (string) {
  return crypto.createHash('sha256').update(string).digest("hex")
}

require('./checkId.js')(app)

//********************** INITIALIZE THE SERVER OBJECT ******************************


if (app.development)
  console.log('Development mode started...')
else
  console.log('Production mode started...')

app.Project.loadFromDisk()
speedcoach('spaces loaded into memory')


app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.compress())
// server.use(express.staticCache())

// http://www.dmuth.org/node/1401/logging-non-proxy-ip-addresses-heroku-and-express-nodejs
//
// Create an IP token for the logging system that lists the original IP, 
// if there was a proxy involved.
//
express.logger.token("ip", function(request) {
 
   var retval = "";
 
   if (request["headers"] && request["headers"]["x-forwarded-for"]) {
      //
      // Proxied request
      //
      retval = request["headers"]["x-forwarded-for"];
 
   } else if (request["socket"] && request["socket"]["remoteAddress"]) {
      //
      // Direct request
      //
      retval = request["socket"]["remoteAddress"];
 
   } else if (request["socket"] && request["socket"]["socket"]
      && request["socket"]["socket"]["remoteAddress"]) {
      //
      // God only knows what happened here...
      //
      retval = request["socket"]["socket"]["remoteAddress"];
 
   }
 
   return(retval);
 
});

var logFile = fs.createWriteStream(app.paths.requests_log, {flags: 'a'})
app.use(express.logger({
  stream : logFile,
  format : ':ip :url :method :status :response-time :res[content-length] ":date" :remote-addr ":referrer" ":user-agent"'
}))



/*********** STATIC FILES **************/
app.use('/nudgepad/', express.static(clientPath.replace(/\/$/,''), { maxAge: 31557600000 }))


/*********** public ***********/
app.use('/private/', function (req, res) {
  return res.send('Sorry, it\'s private here.', 404)
})

// Do this after /nudgepad/, so the login scripts get through fine.
app.use('/', app.privateCheck)

// Make sure this is first so an index.html will take precedence
// over a private/pages/home
app.use('/', express.static(app.paths.project, { maxAge: 31557600000 }))

/********** surveys *************/
require('./surveys.js')(app)

/********** email *************/
app.post(app.pathPrefix + 'email', app.checkId, function (req, res, next) {

  var to = req.body.to
  var subject = req.body.subject
  var message = req.body.message
  var from = 'nudgepad@' + app.domain
  
  Email.send(to, from, subject, message, null, function (error) {
    if (error)
      res.send(error, 500)
    else
      res.send('Sent')
  })  

})


/********** invite *************/
require('./invite.js')(app)

/********** images *************/
require('./images.js')(app)

/*********** nudgepad ***********/
app.get(/^\/nudgepad$/, app.checkId, function(req, res, next) {

  // If production, send html that pulls minified NudgePad
  if (!app.development) {
    res.send(app.nudgepadHtmlVersion)
    return
  }
  
  // If development, send html that pulls verbose NudgePad
  fs.readFile(clientPath + 'production/nudgepad.dev.html', 'utf8', function (err, data) {
    res.send(data)
    return 
  })

})

// If development, watch client folder and trigger rebuilds.
// NudgePad app developer should never have to manually run build.js
// Watch core and tools folder recursively.
app.rebuild = function () {
  exec('node ' + clientPath + 'build.js')
  console.log('Rebuilding...')
}

app.watchDir = function (dir) {
  console.log('watching %s', dir)
  fs.watch(dir, app.rebuild)
  var files = fs.readdirSync(dir)
  _.each(files, function (file) {
    var path = dir + '/' + file
    var stat = fs.statSync(path)
    if (stat.isDirectory())
      app.watchDir(path)
    else
      fs.watch(path, app.rebuild)
  })
}

if (app.development) {
  app.watchDir(clientPath + 'tools')
  app.watchDir(clientPath + 'core')
}




require('./project.js')(app)
require('./backup.js')(app)
require('./explorer.js')(app)
require('./restart.js')(app)
// We use this to communicate with proxy.js so it knows what
// domain this process serves
app.get(app.pathPrefix + 'domain', function(req, res, next) {
  res.set('Content-Type', 'text/plain')
  return res.send(app.domain)
})

require('./status.js')(app, speedcoach)
require('./whoami.js')(app)
// We use this so we can tell if the server has been
// restarted since the clients session started
app.get(app.pathPrefix + 'started', app.checkId, function (req, res, next) {
  res.set('Content-Type', 'text/plain')
  return res.send(app.started + '')
})

require('./console.js')(app)
fs.watch(app.paths.project, function (event, filename) {
  
  // Trigger public changed event
  // mac on old node wont emit filename
  if (!filename)
    filename = ''
  app.SocketIO.sockets.emit('file', filename.toString())
  
})

/*
todo: experiment with watching this folder for all updates.
fs.watch(app.paths.project + 'pages/', function (event, filename) {
  
  // Trigger public changed event
  app.Project.loadFolder('pages')
})
*/

require('./export.js')(app)
require('./login.js')(app)
require('./persona.js')(app)
require('./forgotPassword.js')(app)
require('./updateEmail.js')(app)
require('./logout.js')(app)
require('./logs.js')(app)
require('./clear.js')(app)
require('./stats.js')(app)
require('./ExpressFs.js')(app)
require('./import.js')(app)


/*********** Eval any custom code ***********/
try {
  
  var files = fs.readdirSync(app.paths.packages)
  for (var j in files) {
    require(app.paths.packages + files[j])(app)
  }
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log('Syntax error in ' + files[j] + ': ' + e.message)
    console.log('Includes skipped')
  } else {
    console.log('Error in ' + files[j] + ': ' + e.message)
  }
}


/*********** ! ***********/
app.use('/', function (req, res, next) {
  

  var page = app.Project.get('pages').get('notFound')
  if (!page)
    return res.send('Not found', 404)
  
  page = new Page(page.values)
  return res.send(page.toHtml(), 404)
  
  
})




/********* START SERVER **********/ 

// Start Listening
console.log('Starting %s on port %s', app.domain, app.port)
http_server = http.createServer(app).listen(app.port)


fs.writeFileSync(runningPath + app.domain, app.port, 'utf8')
fs.chmodSync(runningPath + app.domain, '600')
fs.writeFileSync(portsPath + app.port, app.domain, 'utf8')
fs.chmodSync(portsPath + app.port, '600')

// Write session stats to disk before process closes
process.on('SIGTERM', function () {
  fs.unlinkSync(runningPath + app.domain)
  fs.unlinkSync(portsPath + app.port)
  process.exit(0)
})

require('./socket.js')(app, http_server)

console.log('Server started...')
speedcoach('end of app.js')
