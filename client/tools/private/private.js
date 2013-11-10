var Private = new Tool('Private')

Private.on('open', function () {
  expressfs.readFile('nudgepad/private.space', function (data) {
    $('#PrivateCode').val(data)
  })
})

Private.save = function () {
  var value = $('#PrivateCode').val()
  expressfs.writeFile('nudgepad/private.space', value, function (err) {
    Alerts.success('Saved. Please restart')
  })
}
