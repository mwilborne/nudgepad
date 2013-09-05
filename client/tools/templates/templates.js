var Templates = new Tool('Templates')
Templates.set('description', 'Start your project off with a Template.')
Templates.set('icon', 'picture')

Templates.import = function () {
  var url = $('.item.active').attr('data-url')
  $.post('/nudgepad.proxyZip', {url : url}, function (data) {
    Alerts.success('Imported ' + url)  
  })
  
}

Templates.on('ready', function () {
  
  var template = $('#TemplatesSlide').html()
  var templates = new Space($('#TemplatesList').html())
  templates.each(function (key, value) {
    var html = template
      .replace(/SCREENSHOT/, value.get('screenshot'))
      .replace(/TITLE/, value.get('title'))
      .replace(/URL/, value.get('url'))
      .replace(/DESCRIPTION/, value.get('description'))
    $('#TemplatesChoices').append(html)  
  })
  
  $('.item').first().addClass('active')
  
  $('.carousel').carousel({
    interval: false
  })
})

