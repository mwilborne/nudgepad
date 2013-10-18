var socketfs = {}
socketfs.rootPath = ''
socketfs.files = new Space()

socketfs.Watcher = function (filename, fn) {
  this.filename = filename
  this.fn = fn
  return this
}

socketfs.Watcher.prototype.unwatch = function (callback) {
  socketfs.unwatch(this.filename, this.fn, callback)
}

socketfs.Tail = function (filename, fn) {
  this.filename = filename
  this.fn = fn
  return this
}

socketfs.Tail.prototype.untail = function (callback) {
  socketfs.untail(this.filename, this.fn, callback)
}

socketfs.connect = function () {
  socketfs.main(io.connect('/'))
}

socketfs.inspect = function (callback) {
  socketfs.socket.emit('inspect', 'get', callback)
}

socketfs.main = function (socket) {
  socketfs.socket = socket
  socketfs.socket.on('change', function (data) {
    if (!socketfs.files.get(data.filename + ' watches'))
      return false
    socketfs.files.get(data.filename + ' watches').each(function (i, fn) {
      fn(data)
    })
  })
  socketfs.socket.on('tail', function (data) {
    if (!socketfs.files.get(data.filename + ' tails'))
      return false
    socketfs.files.get(data.filename + ' tails').each(function (i, fn) {
      fn(data)
    })
  })
}

// Clear all files from client and the server!
socketfs.resetGlobal = function (callback) {
  socketfs.files = new Space()
  socketfs.socket.emit('resetGlobal', 'get', callback)
}

socketfs.tail = function (filename, fn, callback) {
  filename = socketfs.rootPath + filename
  if (!socketfs.files.get(filename + ' tails'))
    socketfs.files.set(filename + ' tails', new Space())
  socketfs.files.get(filename + ' tails').push(fn)
  if (!callback)
    callback = function () {}
  socketfs.socket.emit('tail', filename, callback)
  return new socketfs.Tail(filename, fn)
}

socketfs.untail = function (filename, fn, callback) {
  filename = socketfs.rootPath + filename
  if (!socketfs.files.get(filename + ' tails'))
    return false
  if (!fn)
    socketfs.files.delete(filename + ' tails')
  else
    socketfs.files.get(filename + ' tails').each(function (key, currentFn) {
      if (currentFn === fn)
        socketfs.files.get(filename + ' tails').delete(key)
    })
  // If all tails removed
  if (!socketfs.files.get(filename + ' tails')) {
    socketfs.socket.emit('untail', filename, function (data) {
      if (callback)
        callback(data)
    })
  }
  else if (callback)
    callback()
}

socketfs.unwatch = function (filename, fn, callback) {
  filename = socketfs.rootPath + filename
  if (!socketfs.files.get(filename + ' watches'))
    return false
  if (!fn)
    socketfs.files.delete(filename + ' watches')
  else
    socketfs.files.get(filename + ' watches').each(function (key, currentFn) {
      if (currentFn === fn)
        socketfs.files.get(filename + ' watches').delete(key)
    })
  // If all watchers removed
  if (!socketfs.files.get(filename + ' watches')) {
    socketfs.socket.emit('unwatch', filename, function (data) {
      if (callback)
        callback(data)
    })
  }
  else if (callback)
    callback()
}


socketfs.watch = function (filename, fn, callback) {
  filename = socketfs.rootPath + filename
  if (!socketfs.files.get(filename + ' watches'))
    socketfs.files.set(filename + ' watches', new Space())
  socketfs.files.get(filename + ' watches').push(fn)
  if (!callback)
    callback = function () {}
  socketfs.socket.emit('watch', filename, callback)
  return new socketfs.Watcher(filename, fn)
}
