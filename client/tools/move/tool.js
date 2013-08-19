var Move = new Tool('Move')
Move.set('path', '')
Move.set('description', 'Move or copy your project to a new domain.')

Move.import = function () {
  TextPrompt.open('Import a Project to this Move', '', function (val) {
    $.post('/nudgepad.import', {space : val}, function (err) {
      Alerts.success('Imported files.')
    })
  })
}

Move.on('open', function () {
  $('#MoveDomain').val('copyof' + document.location.host)
  $('#MoveServer').val(Project.get('hostname'))
})

Move.cloneProject = function () {
  var domain = $('#MoveDomain').val()
  var server = $('#MoveServer').val()
  
  $.get('/nudgepad.export?t=' + new Date().getTime(), {}, function (data) {
    
    var newForm = $('<form>', {
        'action': 'http://' + server + '/create',
   //     'target': '_blank',
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
