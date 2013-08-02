Test.add('readFile', function () {

  var path = 'index.html'
  fs.readFile(path, function (data) {
    Test.ok(!!data.match('html'))
  })

  var path = 'nonExist234.html'
  fs.exists(path, function (exists) {
    Test.equal(false, exists)
  })

  var path = 'index.html'
  fs.exists(path, function (exists) {
    Test.equal(true, exists)
  })


})


