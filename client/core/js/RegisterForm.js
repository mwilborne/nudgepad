var RegisterForm = {}

RegisterForm.open = function () {
  $('#RegisterFormDomain').text(document.location.host).attr('href', 'http://' + document.location.host)
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
      return Alerts.error('Invalid Email')
    // todo, send back to nudgepad.com
    mixpanel.track('I added my email')
    
    // todo: pass in the source domain ins
    var sourceDomain = 'www.nudgepad.com'
    $('body').append('<iframe id="iframe" src="http://' + sourceDomain + '/email.html?email=' + email + '"></iframe>')
    
    $('#iframe').ready(function(){
      $.post('/nudgepad.updateEmail', {email : email, sendWelcomeEmail: 'true'}, function () {
        nudgepad.warnBeforeReload = false
        document.location = '/nudgepad'
      })
    })
    
  })

  $('#RegisterFormEmail').focus()
  
}

RegisterForm.setEmail = function () {
  
}

