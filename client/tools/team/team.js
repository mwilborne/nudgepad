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

Team.loginLink = function () {
  expressfs.readFile('nudgepad/team/' + Cookie.email + '.space', function (data) {
    var space = new Space(data)
    alert('Your login link:\nhttp://' + window.location.hostname + '/nudgepad.login?email=' + Cookie.email + '&key=' + space.get('key'))
  })
}

Team.refresh = function () {
  $('#TeamCurrent').html('')
  expressfs.downloadDirectory('nudgepad/team/', null, function (data) {
    new Space(data).each(function (key, value) {
      var email = key.replace(/\.space/, '')
      $('#TeamCurrent').append('<li><i class="icon-li icon-user"></i>' + email + '</li>')
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

