nudgepad.on('main', function () {
  
  if (nudgepad.cookie.email !== ('owner@' + nudgepad.domain))
    return true
  
  $('#nudgepadSignupFormDomain').text(nudgepad.domain).attr('href', 'http://' + nudgepad.domain)
  // Hack because I was too lazy to do this in HTML so just used the code from the
  // nudgepad prototype. Recursion would be nice :)
  var leftMargin = Math.round(($(window).width() - 725)/2)
  if (leftMargin > 0) {
    $('#nudgepadSignupFormModal').children().each(function () {
      $(this).css('left', parseFloat($(this).css('left')) + leftMargin + 'px')
      $(this).on('click', function (event) {
        event.stopPropagation()
      })
    })
  }
  $('#nudgepadSignupFormModal').show()
  
  $('#nudgepadSignupFormModal').on('click', function () {
    $(this).remove()
  })
  
  
  $('#nudgepadSignupFormButton').on('click', function () {
    
    var email = $('#nudgepadSignupFormEmail').val()

    if (!ValidateEmail(email))
      return nudgepad.error('Invalid Email')
    // todo, send back to nudgepad.com
    mixpanel.track('I added my email')
    $.post('/nudgepad.updateEmail', {email : email, sendWelcomeEmail: 'true'}, function () {
      nudgepad.warnBeforeReload = false
      document.location = '/nudgepad?app=pages'
    })
    
  })

  $('#nudgepadSignupFormEmail').focus()
  
  
})
