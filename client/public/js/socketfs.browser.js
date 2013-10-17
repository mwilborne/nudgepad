var socketfs = {}
socketfs.rootPath = ''
socketfs.watchers = new Space()

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

socketfs.unwatch = function (filename, fn) {
  filename = socketfs.rootPath + filename
  if (!socketfs.watchers.get(filename))
    return false
  socketfs.watchers.get(filename).each(function (key, value) {
    if (value === fn)
      socketfs.watchers.get(filename).delete(key)
  })
}

socketfs.watch = function (filename, fn) {
  filename = socketfs.rootPath + filename
  if (!socketfs.watchers.get(filename))
    socketfs.watchers.set(filename, new Space())
  socketfs.watchers.get(filename).push(fn)
  socketfs.socket.emit('watch', filename, function (data) {
  })
}

socketfs.getAllWatchers = function (callback) {
  socketfs.socket.emit('watchers', 'get', callback)
}
