var Clone = new Tool('Clone')
Clone.set('path', '')

Clone.cloneIt = function () {
  $('#CloneError').html('')
  var server = $('#CloneServer').val()
  var domain = $('#CloneDomain').val()
  $.post('http://' + server + '/isDomainAvailable', {domain : domain}, function (response) {
    
    if (response === 'no') {
      $('#CloneError').html('Domain taken')
      return false
    }
    
    if (nudgepad.status.get('hostname') == $('#CloneServer').val())
      Clone.quickClone()
    else
      Clone.cloneProject()
    
  })
}

Clone.import = function () {
  TextPrompt.open('Import a Project to this project', '', 'import.space', function (val) {
    $.post('/nudgepad.import', {space : val}, function (err) {
      Alerts.success('Imported files.')
    })
  })
}

Clone.on('ready', function () {
  $('#CloneDomain').val(document.location.host + '2')
  $('#CloneServer').val(nudgepad.status.get('hostname'))
})

Clone.on('once', function () {
  expressfs.readFile('nudgepad/sharecode.txt', function (data) {
    if (data)
      Clone.code = data
    else
      Clone.install()
  })
})

Clone.cloneProject = function () {
  var domain = $('#CloneDomain').val()
  var server = $('#CloneServer').val()
  
  $.get('/nudgepad.export?t=' + new Date().getTime(), {}, function (data) {
    
    var newForm = $('<form>', {
        'action': 'http://' + server + '/create',
//        'target': 'published',
        'method' : 'post'
    })
    .append($('<input>', {
        'name': 'domain',
        'value': domain,
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'tool',
        'value': 'Files',
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'email',
        'value': Cookie.email,
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'timestamp',
        'value': new Date().getTime(),
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'relaxed',
        'value': 'true',
        'type': 'hidden'
    }))
    
    
    // todo:
    // If server is the same, copy it by dir and sharecode
    // this is a lot faster than downloading and posting
    
    var cloneData = $('<input name="clone" type="hidden">')
    cloneData.val(data)
    newForm.append(cloneData)
    newForm.submit()
    
  })
  
}

Clone.quickClone = function () {
  var domain = $('#CloneDomain').val()
  var server = nudgepad.status.get('hostname')
  
  var newForm = $('<form>', {
      'action': 'http://' + server + '/create',
//      'target': 'published',
      'method' : 'post'
  })
  .append($('<input>', {
      'name': 'tool',
      'value': 'Files',
      'type': 'hidden'
  }))
  .append($('<input>', {
      'name': 'domain',
      'value': domain,
      'type': 'hidden'
  }))
  .append($('<input>', {
      'name': 'dir',
      'value': '/nudgepad/projects/' + document.location.host,
      'type': 'hidden'
  }))
  .append($('<input>', {
      'name': 'timestamp',
      'value': new Date().getTime(),
      'type': 'hidden'
  }))
  .append($('<input>', {
      'name': 'sharecode',
      'value': Clone.code,
      'type': 'hidden'
  }))
  .append($('<input>', {
      'name': 'email',
      'value': Cookie.email,
      'type': 'hidden'
  }))
  .append($('<input>', {
      'name': 'relaxed',
      'value': 'true',
      'type': 'hidden'
  }))
  newForm.submit()
  
}

Clone.install = function () {
  
  var max = 9999999
  var min = 1000000
  
  var random = Math.floor(Math.random() * (max - min + 1)) + min
  
  Clone.code = random
  
  expressfs.create('nudgepad/sharecode.txt', random, function (data) {
    console.log(data)
    if (!data)
      Alerts.success('Share Code Created')
    else
      console.log(data)
  })
}
