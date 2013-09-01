// Rebuilds clientside files as they change
// to start, run "np devWatch"
var fs = require('fs'),
    exec = require('child_process').exec,
    _ = require('underscore')

// NudgePad app developer should never have to manually run build.js
// Watch core and tools folder recursively.
var rebuild = function () {
  exec('node ' + __dirname + '/build.js')
  console.log('Rebuilding...')
}

var watchDir = function (dir) {
  console.log('watching %s', dir)
  fs.watch(dir, rebuild)
  var files = fs.readdirSync(dir)
  _.each(files, function (file) {
    var path = dir + '/' + file
    var stat = fs.statSync(path)
    if (stat.isDirectory())
      watchDir(path)
    else
      fs.watch(path, rebuild)
  })
}

watchDir(__dirname + '/tools')
watchDir(__dirname + '/core')

