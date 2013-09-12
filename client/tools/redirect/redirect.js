var Redirect = new Tool('Redirect')
Redirect.set('description', 'Manage URL redirects for your project.')
Redirect.set('icon', 'random')
Redirect.set('beta', true)

Redirect.on('open', function () {
  expressfs.readFile('nudgepad/redirects.space', function (data) {
    $('#RedirectCode').val(data)
  })
})

Redirect.save = function () {
  var value = $('#RedirectCode').val()
  expressfs.writeFile('nudgepad/redirects.space', value, function (err) {
    Alerts.success('Saved. Please restart >')
  })
}
