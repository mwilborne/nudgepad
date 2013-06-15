$.fn.owner = function () {
  return Design.stage.get($(this).attr('value')).element()
}
