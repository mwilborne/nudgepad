var Templates = new Tool('Templates')
Templates.set('description', 'Start your project off with a Template.')
Templates.set('icon', 'picture')

Templates.on('ready', function () {
  $('.carousel').carousel({
    interval: false
  })
})

