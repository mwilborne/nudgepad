var fs = require('fs'),
    Space = require('space'),
    async = require('async'),
    exec = require('child_process').exec,
    _ = require('underscore')

function fileStats (path, callback) {
  
  fs.stat(path, function (err, stat) {

    // Quit on error
    if (err)
      return callback(err)

    if (stat.isDirectory())
      return folderStats(path + '/', callback)

    var space = new Space()
    space.set('mtime', stat.mtime.getTime())
    space.set('size', (stat.size/1000000).toFixed(1) + 'MB')
    space.set('bytes', stat.size)
    space.set('age', ((new Date().getTime() - stat.ctime.getTime())/86400000).toFixed(1) + 'D')
    space.set('freshness', ((new Date().getTime() - stat.mtime.getTime())/1000).toFixed(0) + 'S')
    space.set('timeSinceLastChange', ((new Date().getTime() - stat.mtime.getTime())/86400000).toFixed(1) + 'D')
    space.set('oneliner', space.get('bytes') + ' ' + space.get('mtime'))

    callback(false, space)
  })
  
}

function folderStats (path, callback) {
  
  fs.readdir(path, function (err, files) {
    
    if (err)
      return callback(err)
    
    var space = new Space()
    var paths = _.map(files, function (value){return path + value})
    
    async.mapSeries(paths, fileStats, function(err, stats){

      if (err)
        return callback(err)
      
      // stats is now an array of stats for each file
      for (var i in files) {
        space.set(files[i], stats[i])
      }
      
      callback(false, space)
    })    
  
  })
 
}

var Explorer = function (app) {
  
  /**
   * Get a file API.
   * path
   */
  app.get(app.pathPrefix + 'explorer.list', app.checkId, function(req, res, next) {
    folderStats(app.paths.project, function (err, space) {
      res.set('Content-Type', 'text/plain')
      return res.send(space.toString())    
    })
  })
  
}

module.exports = Explorer
