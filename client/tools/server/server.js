var Server = new Tool('Server')

Server.browsePackages = function () {
  expressfs.mkdir('nudgepad/packages', function () {
    Launcher.open('Files')
    Files.openPath('nudgepad packages')
  })
}

Server.newPackage = function () {
  var sample = $('#ServerSamplePackage').text()
  expressfs.mkdir('nudgepad/packages', function () {
    expressfs.createUntitled('nudgepad/packages/', 'js', sample, function (filename) {
      Server.browsePackages()
    })
  })
}

Server.consoleSend = function (toNode) {
  
  var input = $('#ServerConsole')
  var output = $('#ServerConsoleOutput')
  var command = input.val()
  var endpoint = 'nudgepad.exec'
  if (toNode)
    endpoint = 'nudgepad.console'
  
  $.post(endpoint, {command : command}, function (result) {
    output.text(output.text() + ('>' + command.replace(/\n/g, '> \n') + '\n') + result + '\n')
    output.scrollTop($(output)[0].scrollHeight + '')
    input.val('')
    input.focus()
  }).error(function (error, message) {
    mixpanel.track('I used the console and got an error')
    output.text(output.text() + '>' + command.replace(/\n/g, '> \n') + '\n' + 'ERROR\n' + error.responseText + '\n')
    output.scrollTop($('#ServerConsole')[0].scrollHeight + '')
    input.val('')
    input.focus()
  })
}

Server.refresh = function () {
  
  $.get('/nudgepad.status', {}, function (data) {
    $('#ServerStatusArea').text(data)
  })
  $.get('/nudgepad.logs', {}, function (data) {
    $('#ServerLogHolder').html($('<div/>').text(data).html())
    $('#ServerLogHolder').scrollTop($("#ServerLogHolder")[0].scrollHeight)
  })
  
}

$(document).on('ready', function () {
  $('#ServerConsoleInput').on('enterkey', Server.consoleSend)
})

Server.on('ready', function () {
  Server.tail = socketfs.tail('nudgepad/app.log.txt', function (data) {
    $('#ServerLogHolder').append($('<div/>').text(data.content + '\n').html())
    $('#ServerLogHolder').scrollTop($("#ServerLogHolder")[0].scrollHeight)
  })
  Server.refresh()
  $('#ServerConsole').on('enterkey', function () {
    $('#ServerConsoleSend').trigger('click')
  })
})

Server.on('close', function () {
  Server.tail.untail()  
})

