var Fiddle = new Tool('Fiddle')

Fiddle.A = function () {}
Fiddle.B = function () {}
Fiddle.C = function () {}
Fiddle.D = function () {}
Fiddle.E = function () {}
Fiddle.F = function () {}

Fiddle.keyup = function () {
  var name = $(this).attr('name')
  Fiddle[name].call(this)
  Fiddle.save()
}

Fiddle.iframe = function () {
  return $('#F').contents().find('body')
}

Fiddle.on('ready', function () {
  
  if (store.get('Fiddle')) {
    var space = new Space(store.get('Fiddle'))
    space.get('values').each(function (key, value) {
      $('#' + key).val(value)
    })
    if (space.get('code')) {
      space.get('code').each(function (letter, value) {
        $('.FiddleCode[name=' + letter+ ']').val(value)
      })
    }
    // load
  }
  
  $('.FiddleTextarea').on('keyup', Fiddle.keyup)
  
  $('.FiddleCode').on('change', function () {
    var cell = $(this).attr('name')
    var code = $(this).val()
    var js = 'Fiddle.' + cell + ' = function () { ' + code + '}'
    eval(js)
    Fiddle.save()
  })
  
  $('.FiddleCode').trigger('change')
})

Fiddle.save = function () {
  var space = new Space()
  var array = 'A B C D E F'.split(/ /g)
  array.forEach(function (letter) {
    var val = $('#' + letter).val()
    if (val)
      space.set('values ' + letter, val)
    var code = $('.FiddleCode[name=' + letter+ ']').val()
    if (code)
      space.set('code ' + letter, code)
  })
  store.set('Fiddle', space.toString())
}

