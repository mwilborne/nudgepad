nudgepad.on('main', function () {
  
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



