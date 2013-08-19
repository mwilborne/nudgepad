var Server = new Tool('Server')
Server.set('color', 'rgba(36, 65, 112, 1)')
Server.set('path', '')
Server.set('description', 'Manage your project\'s web server.')

Server.consoleSend = function () {
  
  var input = $('#ServerConsoleInput')
  var checkbox = $('#ServerConsoleCheckbox')
  var output = $('#TextPromptTextarea')
  
  var command = input.val()
  var endpoint = 'nudgepad.exec'
  if (checkbox.is(':checked'))
    endpoint = 'nudgepad.console'
  
  $.post(endpoint, {command : command}, function (result) {
    output.val(output.val() + ('>' + command.replace(/\n/g, '> \n') + '\n') + result + '\n')
    output.scrollTop($(output)[0].scrollHeight + '')
    input.val('')
    input.focus()
  }).error(function (error, message) {
    mixpanel.track('I used the console and got an error')
    output.val(output.val() + '>' + command.replace(/\n/g, '> \n') + '\n' + 'ERROR\n' + error.responseText + '\n')
    output.scrollTop($('#ServerConsole')[0].scrollHeight + '')
    input.val('')
    input.focus()
  })
}

/**
 * Prompt the maker for input. Pops a modal.
 */
Server.console = function () {
  mixpanel.track('I opened the console')
  var console = $('#ServerConsoleContainer')
  
  TextPrompt.open('', '', function () {
    Server.consoleSend()
    return false
  })
  TextPrompt.onclose = function () {
    console.appendTo('body')
    console.hide()
  }
  console.appendTo('#TextPromptButtonHolder')
  console.show()
  $('#ServerConsoleInput').focus()
}

Server.refresh = function () {
  
  $.get('/nudgepad.status', {}, function (data) {
    Server.set('status', data)
    $('#ServerStatusArea').text(data)
  })
  $.get('/nudgepad.logs', {}, function (data) {
    Server.set('log', data)
    $('#ServerLogHolder').html(data)
    $('#ServerLogHolder').scrollTop($('#ServerLogHolder').height())
  })
  
}

Server.stream = function (message) {
  var clean = message.replace(/\</g, '&lt;') + '\n'
  $('#ServerStream').append(clean)
}

Server.test = function () {
  Test.add('stream', function () {
    $.get('/nudgepad.stream', {m : 'hi world'}, function () {
      Test.equal('hi world', $('#ServerStream').text())
    })
    
  })

  Test.start()
}

$(document).on('ready', function () {
  $('#ServerConsoleInput').on('enterkey', Server.consoleSend)
})

Server.on('once', function () {
  Socket.on('stream', Server.stream)
})

Server.on('open', function () {
  
  if (!Server.get('log'))
    Server.refresh()
  
})
