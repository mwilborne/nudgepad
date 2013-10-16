var Share = new Tool('Share')

Share.on('ready', function () {

  Share.update()
  expressfs.readFile('nudgepad/sharecode.txt', function (data) {
    if (data)
      Share.code = data
    else
      Share.install()
  })
})

Share.install = function () {
  
  var max = 9999999
  var min = 1000000
  
  var random = Math.floor(Math.random() * (max - min + 1)) + min
  
  Share.code = random
  
  expressfs.create('nudgepad/sharecode.txt', random, function (data) {
    console.log(data)
    Share.update()
    if (!data)
      Alerts.success('Share Code Created')
    else
      console.log(data)
  })
}


Share.update = function () {
  var code = '<form method="post" action="http://' + nudgepad.status.get('hostname') + '/create">\n'
  code += '  <input type="hidden" name="dir" value="/nudgepad/projects/' + document.location.host + '">\n'
  code += '  <input type="hidden" name="sharecode" value="' + Share.code + '">\n'
  code += '  <button type="submit">Create</button>\n'
  code += '</form>'
  $('#ShareCode').val(code)
}
