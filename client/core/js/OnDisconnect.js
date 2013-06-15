nudgepad.on('disconnect', function () {
  $('#ConnectionStatus').html('Disconnected from server. Attempting to reconnect...').show()
})
