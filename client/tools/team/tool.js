var Team = new Tool('Team')

Team.on('ready', function () {
  $('#TeamMyEmail').html(Cookie.email + ' <b class="caret"></b>')
  Team.refresh()
})

Team.invite = function () {
  var val = $('#TeamEmail').val()
  var message = 'Invites Sent'
  $.post('/nudgepad.invite', {emails : val}, function (result) {
    Alerts.success(message)
    Team.refresh()
    mixpanel.track('I invited people')
  })
}

Team.refresh = function () {
  $('#TeamCurrent').html('')
  $.get('/nudgepad.project.team', function (data) {
    new Space(data).each(function (key, value) {
      $('#TeamCurrent').append('<li><i class="icon-li icon-user"></i>' + key + '</li>')
    })
  })
}

Team.updateEmail = function () {
  
  var email = prompt('Update your new email address', Cookie.email)
  if (!email || email === Cookie.email)
    return true
  
  if (!Team.validateEmail(email))
    return Alerts.error('Invalid Email')
  
  $.post('/nudgepad.updateEmail', {email : email}, function () {
    nudgepad.warnBeforeReload = false
    document.location = '/nudgepad?tool=Home'
  })
}

Team.validateEmail = function (email) { 
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

