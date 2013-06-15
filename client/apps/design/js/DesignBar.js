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
  
  $('#nudgepadDesignBar #menuButton').on('mousedown', function (event) {
    if ($('#nudgepadDesignMenu:visible').length > 0) {
      Popup.hide(event)
      return true
    }
    Popup.open('#nudgepadDesignMenu')
    mixpanel.track('I opened the designer menu')
  })
  $('#nudgepadDesignBar #menuButton').on('mouseup', function (event) {
    event.stopPropagation()
    return false
  })

  // We do this on live, so that it wont interfere with events bound
  // to items inside the ribbon, but it will prevent events from
  // reaching nudgepadbody hopefull
  $('#nudgepadDesignBar').on('slide slidestart', function (event) {
    
    event.stopPropagation()
  })

})



