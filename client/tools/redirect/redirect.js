var Redirect = new Tool('Redirect')
Redirect.set('description', 'Manage URL redirects for your project.')

Redirect.on('open', function () {
  fs.readFile('private/redirects.space', function (data) {
    $('#RedirectCode').val(data)
  })
})

Redirect.save = function () {
  var value = $('#RedirectCode').val()
  fs.writeFile('private/redirects.space', value, function (err) {
    Alerts.success('Saved. Please restart >')
  })
}
