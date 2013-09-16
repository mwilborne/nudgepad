var Time = new Tool('Time')
Time.timesheet = new Space()
Time.timesheetFile = 'nudgepad/time/' + Cookie.email + '.space'

Time.on('once', function () {
  expressfs.mkdir('nudgepad/time')
})

Time.map = function (keys, value) {
  var parts = value.split(/ /g)
  var result = {}
  var keyParts = keys.split(/ /g)
  parts.forEach(function (value, i) {
    result[keyParts[i]] = value
  })
  return result
}

Time.refresh = function () {
  expressfs.readFile(Time.timesheetFile, function (data) {
    if (!data)
      return true
    
    Time.timesheet = new Space(data)
    
    var total = 0
    var tools = {}
    Time.timesheet.each(function (key, value) {
      var row = Time.map('tool ms', value)
      total += parseFloat(row.ms)
      if (!tools[row.tool])
        tools[row.tool] = 0
      tools[row.tool] += parseFloat(row.ms)
    })
    
    
    var d = moment.duration(total)
    d.add(moment.duration(1, 's'))
    var h = '0' + d.hours()
    var m = '0' + d.minutes()
    var s = '0' + d.seconds()
    $('#TimeElapsed').val(h.slice(-2) + ':' + m.slice(-2) + ':' + s.slice(-2))  
    
    
    $('#TimeTimesheet').html('Total time: ' + moment.duration(total).humanize() + '\n')
    new Space(tools).each(function (key, value) {
      $('#TimeTimesheet').append(key + ' ' + moment.duration(value).humanize() + '\n')
    })

  })
  
}


Time.on('open', Time.refresh)
