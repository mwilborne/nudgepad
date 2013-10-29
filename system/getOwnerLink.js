var domain = process.argv[2]
var returnAll = process.argv[3]
var Space = require('space')
var fs = require('fs')
var dir = '/nudgepad/projects/' + domain + '/nudgepad/team/'
var files = fs.readdirSync(dir)
var makers = new Space()
var first = ''
var output = ''
files.forEach(function (filename, i) {
  if (!filename.match(/\.space$/))
    return true
  var space = new Space(fs.readFileSync(dir + filename, 'utf8'))
  var email = filename.replace(/\.space$/, '')
  var link = 'http://' + domain + '/nudgepad.login?email=' + email + '&key=' + space.get('key')
  if (!returnAll) {
    console.log(link)
    process.exit(0)
  }
  output += first + link
  first = '\n'
})
console.log(output)

