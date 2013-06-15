nudgepad.on('main', function () {
  
  $('.DesignBarDroppable').on('click', function () {
    $('.DesignImageDroppableOptions').hide()
    if ($(this).hasClass('selectedDroppable')) {
      $(this).removeClass('selectedDroppable')
      $('.DesignBarDroppable').removeClass('DesignLowlight');
      $('#DesignRibbon').slideUp('fast')
    }
    else {
      $('.DesignBarDroppable').removeClass('selectedDroppable')
      $(this).addClass('selectedDroppable');
      $(this).removeClass('DesignLowlight')
      $('.DesignBarDroppable').not('.selectedDroppable').addClass('DesignLowlight');
      $('#DesignRibbon').slideDown('fast')
    }
  })
  $('.DesignBarDroppable').on('slidestart', function() {
    var dropBlock = $(this).attr('title').toLowerCase()
    Design.stage.dragAndDrop(Design.droppables.get('blocks ' + dropBlock))
  })



  $('#DesignImageDroppable').on('click', function () {
    $('.DesignImageDroppableOptions').show()
  })
  
  $('#DesignBarMenuButton').on('mousedown', function (event) {
    if ($('#DesignMenu:visible').length > 0) {
      Popup.hide(event)
      return true
    }
    Popup.open('#DesignMenu')
    mixpanel.track('I opened the designer menu')
  })
  $('#DesignBarMenuButton').on('mouseup', function (event) {
    event.stopPropagation()
    return false
  })

  // We do this on live, so that it wont interfere with events bound
  // to items inside the ribbon, but it will prevent events from
  // reaching nudgepadbody hopefull
  $('#DesignBar').on('slide slidestart', function (event) {
    
    event.stopPropagation()
  })

})



