var Backup = new Tool('Backup')
Backup.on('ready', function () {
  $('#BackupDownload').attr('href', '/nudgepad.backup/' + document.location.host + '.zip')  
})

