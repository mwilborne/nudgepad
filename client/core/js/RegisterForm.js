var RegisterForm = {}

RegisterForm.open = function () {
  $('#RegisterFormDomain').text(nudgepad.domain).attr('href', 'http://' + nudgepad.domain)
  // Hack because I was too lazy to do this in HTML so just used the code from the
  // nudgepad prototype. Recursion would be nice :)
  var leftMargin = Math.round(($(window).width() - 725)/2)
  if (leftMargin > 0) {
    $('#RegisterFormModal').children().each(function () {
      $(this).css('left', parseFloat($(this).css('left')) + leftMargin + 'px')
      $(this).on('click', function (event) {
        event.stopPropagation()
      })
    })
  }
  $('#RegisterFormModal').show()
  
  $('#RegisterFormModal').on('click', function () {
    $(this).remove()
  })
  
  
  $('#RegisterFormButton').on('click', function () {
    
    var email = $('#RegisterFormEmail').val()

    if (!ValidateEmail(email))
      return nudgepad.error('Invalid Email')
    // todo, send back to nudgepad.com
    mixpanel.track('I added my email')
    $.post('/nudgepad.updateEmail', {email : email, sendWelcomeEmail: 'true'}, function () {
      nudgepad.warnBeforeReload = false
      document.location = '/nudgepad?app=pages'
    })
    
  })

  $('#RegisterFormEmail').focus()
  
}

nudgepad.on('main', function () {
  
  if (nudgepad.cookie.email !== ('owner@' + nudgepad.domain))
    return true
  
  RegisterForm.open()
  
})
