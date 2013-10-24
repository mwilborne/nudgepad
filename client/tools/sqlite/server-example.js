var sqlite3 = require('sqlite3').verbose()


module.exports = function (app) {
    
    var db = new sqlite3.Database(app.paths.project + 'nudgepad/db.sqlite3')

    db.serialize(function() {
    db.run("CREATE TABLE lorem (info TEXT)")

      var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
      for (var i = 0; i < 10; i++) {
          stmt.run("Ipsum " + i);
      }
      stmt.finalize();
    
      db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
          console.log(row.id + ": " + row.info);
      })
    })

    db.close()

  app.db = db
  app.get('/hello', function (req, res, next) {
    res.send('Hello world')
  })
}
