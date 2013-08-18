var Backup = new Tool('Backup')
Backup.set('color', 'rgba(36, 65, 112, 1)')
Backup.set('description', 'Backup your project.')

Backup.on('open', function () {
  $('#BackupDownload').attr('href', '/nudgepad.backup/' + document.location.host + '.zip')  
})

