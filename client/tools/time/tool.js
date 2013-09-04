var Time = new Tool('Time')
Time.set('description', 'Track your time spent on this project.')
Time.timesheet = new Space()
Time.timesheetFile = 'private/time/' + Cookie.email + '.space'
Time.interval = null
Time.set('beta', true)
Time.set('icon', 'time')

Time.on('once', function () {
  expressfs.mkdir('private/time')
  
})

Time.refresh = function () {
  expressfs.readFile(Time.timesheetFile, function (data) {
    if (data)
      Time.timesheet = new Space(data)
    $('#TimeTimesheet').text(Time.timesheet.toString())
  })
  
}

Time.save = function () {
  var record = new Space()
  record.set('task', $('#TimeTask').val())
  record.set('notes', $('#TimeNotes').val())
  record.set('time', $('#TimeElapsed').val())
  var str = new Space().set(new Date().getTime().toString(), record).toString()
  expressfs.appendFile(Time.timesheetFile, str, function () {
    Alerts.success('Saved')
    Time.refresh()
  })
  
}

Time.pause = function () {
  clearInterval(Time.interval)
}

Time.start = function () {
  
  Time.interval = setInterval(Time.tick, 1000)
}

Time.tick = function () {
  var d = moment.duration($('#TimeElapsed').val())
  d.add(moment.duration(1, 's'))
  var h = '0' + d.hours()
  var m = '0' + d.minutes()
  var s = '0' + d.seconds()
  $('#TimeElapsed').val(h.slice(-2) + ':' + m.slice(-2) + ':' + s.slice(-2))
}

Time.on('open', Time.refresh)
