var Irc = new Tool('Irc')
Irc.set('description', 'Chat with other NudgePad users.')
Irc.set('beta', true)

Irc.on('once', function () {
  $('#IrcChat').attr('src', 'http://webchat.freenode.net?randomnick=1&channels=%23%23nudgepad')
})
