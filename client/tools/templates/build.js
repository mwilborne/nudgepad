var exec = require('child_process').exec
var fs = require('fs')

var dirs = fs.readdirSync(__dirname + '/samples/')
dirs.forEach(function (name, key) {
  var path = __dirname + '/samples/' + name
  var stat = fs.statSync(path)
  if (!stat.isDirectory())
    return true
  var zipfile = path + '/template.zip'
  if (fs.existsSync(zipfile))
    fs.unlinkSync(zipfile)
  exec('zip -r template.zip *', {cwd : path})
})
