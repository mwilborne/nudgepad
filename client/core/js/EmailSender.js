var EmailSender = function () {
  
  var message = new Space('to \nsubject \nmessage \n')
  TextPrompt('Send an email', message.toString(), function (val) {
    
    var space = new Space(val)
    
    $.post('/nudgepad.email', space.keys, function (result) {
      alert(result)
    })
  }, false, 'Send')
}
