nudgepad.on('main', function () {
  $('.barDroppable').on('click', function () {
    $('.imageDroppableOptions').hide()
    if ($(this).hasClass('selectedDroppable')) {
      $(this).removeClass('selectedDroppable')
      $('.barDroppable').removeClass('lowlight');
      $('#nudgepadRibbon').slideUp('fast')
    }
    else {
      $('.barDroppable').removeClass('selectedDroppable')
      $(this).addClass('selectedDroppable');
      $(this).removeClass('lowlight')
      $('.barDroppable').not('.selectedDroppable').addClass('lowlight');
      $('#nudgepadRibbon').slideDown('fast')
    }
  })
  $('.barDroppable').on('slidestart', function() {
    var dropBlock = $(this).attr('title').toLowerCase()
    Design.stage.dragAndDrop(Design.droppables.get('blocks ' + dropBlock))
  })
  
  
  
  $('#imageDroppable').on('click', function () {
    $('.imageDroppableOptions').show()
  })
  
})
