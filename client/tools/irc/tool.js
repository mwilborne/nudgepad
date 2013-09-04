var Irc = new Tool('Irc')
Irc.set('description', 'Chat with other NudgePad users.')
Irc.set('beta', true)
Irc.set('icon', 'comment')

Irc.on('ready', function () {
  if (!$('#IrcChat').attr('src'))
    $('#IrcChat').attr('src', 'http://webchat.freenode.net?randomnick=1&channels=%23%23nudgepad')
})
