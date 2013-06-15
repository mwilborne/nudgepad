var Inviter = {}

Inviter.prompt = function () {
  var val = prompt('Invite people to edit this site. Add one or more emails, separated by spaces', '')
  if (!val)
    return false
  
  $.post('/Inviter', {emails : val}, function (result) {
    Flasher.flash('Invite Sent')
    mixpanel.track('I invited people')
  })
}
