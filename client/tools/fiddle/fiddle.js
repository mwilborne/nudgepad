var Fiddle = new Tool('Fiddle')

Fiddle.A = function () {console.log(3)}
Fiddle.B = function () {}
Fiddle.C = function () {}

Fiddle.keyup = function () {
  var name = $(this).attr('name')
  Fiddle[name].call(this)
}

Fiddle.on('ready', function () {
  
  $('.FiddleTextarea').on('keyup', Fiddle.keyup)
  
  $('.FiddleCode').on('change', function () {
    var cell = $(this).attr('name')
    var code = $(this).val()
    var js = 'Fiddle.' + cell + ' = function () { ' + code + '}'
    eval(js)
  })
})
