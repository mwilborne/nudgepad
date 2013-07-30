var Test = {}
Test.tests = []

Test.add = function (module, fn) {
  Test.tests.push(fn)
}

Test.equal = function (a, b) {
  if (a === b)
    return console.log('PASS.')
  console.log('FAIL. We wanted %s but we got %s', a, b)
//  if (true)
//    debugger
}

Test.ok = function (a) {
  if (a === true)
    return console.log('PASS.')
  console.log('FAIL. We wanted TRUE but we got %s', a)
//  if (true)
//    debugger
}

Test.start = function () {
  console.log('Starting tests...')
  Test.tests.forEach(function (value) {
    value()
  })
}
