var SQLite = new Tool('SQLite')

SQLite.install = function () {
  $.get('/nudgepad/tools/sqlite/sqlite-server.js.txt?t=' + new Date().getTime(), {}, function (data) {
    expressfs.writeFile('nudgepad/packages/sqlite-server.js', data, function () {
      Alerts.success('Installed SQLite. Please restart server.')
    })
  })
  
}
