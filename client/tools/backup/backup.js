var Backup = new Tool('Backup')
Backup.set('description', 'Backup your project.')

Backup.on('ready', function () {
  $('#BackupDownload').attr('href', '/nudgepad.backup/' + document.location.host + '.zip')  
})

