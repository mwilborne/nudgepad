var Copy = new Tool('Copy')
Copy.set('path', '')
Copy.set('description', 'Copy your project to a new domain or server.')
Copy.set('icon', 'copy')
Copy.set('beta', true)

Copy.import = function () {
  TextPrompt.open('Import a Project to this project', '', 'import.space', function (val) {
    $.post('/nudgepad.import', {space : val}, function (err) {
      Alerts.success('Imported files.')
    })
  })
}

Copy.on('ready', function () {
  $('#CopyDomain').val('copyof' + document.location.host)
  $('#CopyServer').val(Project.get('hostname'))
})

Copy.on('once', function () {
  expressfs.readFile('nudgepad/sharecode.txt', function (data) {
    if (data)
      Copy.code = data
    else
      Copy.install()
  })
})

Copy.cloneProject = function () {
  var domain = $('#CopyDomain').val()
  var server = $('#CopyServer').val()
  
  $.get('/nudgepad.export?t=' + new Date().getTime(), {}, function (data) {
    
    var newForm = $('<form>', {
        'action': 'http://' + server + '/create',
        'target': 'published',
        'method' : 'post'
    })
    .append($('<input>', {
        'name': 'domain',
        'value': domain,
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

Copy.quickCopy = function () {
  var domain = $('#CopyDomain').val()
  var server = Project.get('hostname')
  
  var newForm = $('<form>', {
      'action': 'http://' + server + '/create',
      'target': '_blank',
      'method' : 'post'
  })
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
      'value': Copy.code,
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

Copy.install = function () {
  
  var max = 9999999
  var min = 1000000
  
  var random = Math.floor(Math.random() * (max - min + 1)) + min
  
  Copy.code = random
  
  expressfs.create('nudgepad/sharecode.txt', random, function (data) {
    console.log(data)
    if (!data)
      Alerts.success('Share Code Created')
    else
      console.log(data)
  })
}
