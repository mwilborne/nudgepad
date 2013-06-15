nudgepad.invite = {}

nudgepad.invite.prompt = function () {
  var val = prompt('Invite people to edit this site. Add one or more emails, separated by spaces', '')
  if (!val)
    return false
  
  $.post('/nudgepad.invite', {emails : val}, function (result) {
    nudgepad.notify('Invite Sent')
    mixpanel.track('I invited people')
  })
}
