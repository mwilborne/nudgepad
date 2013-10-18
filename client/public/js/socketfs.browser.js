var socketfs = {}
socketfs.rootPath = ''
socketfs.watchers = new Space()

socketfs.Watcher = function (filename, fn) {
  this.filename = filename
  this.fn = fn
  return this
}

socketfs.Watcher.prototype.unwatch = function (callback) {
  socketfs.unwatch(this.filename, this.fn, callback)
}

socketfs.connect = function () {
  socketfs.main(io.connect('/'))
}

socketfs.main = function (socket) {
  socketfs.socket = socket
  socketfs.socket.on('change', function (data) {
    if (!socketfs.watchers.get(data.filename))
      return false
    socketfs.watchers.get(data.filename).each(function (key, value) {
      value(data)
    })
  })
}

socketfs.unwatch = function (filename, fn, callback) {
  filename = socketfs.rootPath + filename
  if (!socketfs.watchers.get(filename))
    return false
  if (!fn)
    socketfs.watchers.delete(filename)
  else
    socketfs.watchers.get(filename).each(function (key, currentFn) {
      if (currentFn === fn)
        socketfs.watchers.get(filename).delete(key)
    })
  // If all watchers removed
  if (!socketfs.watchers.get(filename))
    socketfs.socket.emit('unwatch', filename, function (data) {
      if (callback)
        callback(data)
    })
  else if (callback)
    callback()
}

// Clear all watchers from client and the server!
socketfs.unwatchGlobal = function (callback) {
  socketfs.watchers = new Space()
  socketfs.socket.emit('unwatchGlobal', 'get', callback)
}

socketfs.watch = function (filename, fn, callback) {
  filename = socketfs.rootPath + filename
  if (!socketfs.watchers.get(filename))
    socketfs.watchers.set(filename, new Space())
  socketfs.watchers.get(filename).push(fn)
  if (!callback)
    callback = function () {}
  socketfs.socket.emit('watch', filename, callback)
  return new socketfs.Watcher(filename, fn)
}

socketfs.getAllWatchers = function (callback) {
  socketfs.socket.emit('watchers', 'get', callback)
}
