var Backup = new Tool('Backup')
Backup.set('description', 'Backup your project.')

Backup.on('open', function () {
  $('#BackupDownload').attr('href', '/nudgepad.backup/' + document.location.host + '.zip')  
})

