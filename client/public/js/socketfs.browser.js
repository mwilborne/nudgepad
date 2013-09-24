var socketfs = {}
socketfs.rootPath = ''
socketfs._watching = new Space()

socketfs.connect = function () {
  socketfs.main(io.connect('/'))
}

socketfs.main = function (socket) {
  socketfs.socket = socket
  socketfs.socket.on('change', function (data) {
    if (!socketfs._watching.get(data.filename))
      return false
    socketfs._watching.get(data.filename).each(function (key, value) {
      value(data)
    })
  })
}

socketfs.unwatch = function (filename, fn) {
  filename = socketfs.rootPath + filename
  if (!socketfs._watching.get(filename))
    return false
  socketfs._watching.get(filename).each(function (key, value) {
    if (value === fn)
      socketfs._watching.get(filename).delete(key)
  })
}

socketfs.watch = function (filename, fn) {
  filename = socketfs.rootPath + filename
  if (!socketfs._watching.get(filename))
    socketfs._watching.set(filename, new Space())
  socketfs._watching.get(filename).push(fn)
  socketfs.socket.emit('watch', filename, function (data) {
  })
}

socketfs.watchers = function () {
  socketfs.socket.emit('watchers', 'nothing', function (data) {
    console.log('response:')
    console.log(data)
  })
}

socketfs.watching = function () {
  return socketfs._watching
}
