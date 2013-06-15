var Manage = new App('Manage')

Manage.onopen = function () {
  $('.nudgepad#email').val(nudgepad.cookie.email)
}

Manage.save = function () {
  var email = $('.nudgepad#email').val()
  
  if (!ValidateEmail(email))
    return nudgepad.error('Invalid Email')
  
  if (email === nudgepad.cookie.email)
    return Launch.open()
  
  $.post('/nudgepad.updateEmail', {email : email}, function () {
    nudgepad.warnBeforeReload = false
    document.location = '/nudgepad?app=Launch'
  })
}

