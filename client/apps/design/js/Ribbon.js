nudgepad.on('main', function () {
  
  var insertDroppables = function (droppables) {
    var droppablesInsert = ''
      for (var i in droppables) {
        droppablesInsert += '<div class="DesignDroppableImg"><img src="/nudgepad/public/images/droppables/'+ droppables[i] +'.png" title="'+ droppables[i] +'"></div>'
      }

      var droppablesListItems = $('<div class="DesignDroppablesList">'+ droppablesInsert +'</div>')

      $('#DesignDroppablesList').html(droppablesListItems)

      $('#DesignDroppablesList div img').on('slidestart', function() {
        var dropBlock = $(this).attr('title')
        Design.stage.dragAndDrop(Design.droppables.get('blocks ' + dropBlock))
        mixpanel.track('I dropped a droppable')
      })

      $('.DesignDroppablesList div img').on('tap', function() {
        
        var dropBlock = $(this).attr('title')
        Design.stage.insert(Design.droppables.get('blocks ' + dropBlock), false, 0, 0, true)
        mixpanel.track('I tapped a droppable')
      })
  }
  
  var menuType;
  
  $('#DesignBlockDroppable').on('click', function () {
    menuType = "block"
    pickArray(menuType)
  })
  
  $('#DesignTextDroppable').on('click', function () {
    menuType = "text"
    pickArray(menuType)
  })
  
  $('#imageDroppable').on('click', function () {
    menuType = "image"
    pickArray(menuType)
  })
  
  $('#stickyDroppable').on('click', function () {
    menuType = "sticky"
    pickArray(menuType)
  })
  
  var pickArray = function (menuType) {
    
    var menuType;
    
    var result;

    switch (menuType) {

      case "block":
        result = ['block', 'rounded'];
        break;

      case "text":
        result = ['text', 'nav', 'paragraph'];  
        break;

      case "image":
        result = ['image', 'graph'];
        break;

      case "sticky":
        result = ['sticky', 'stickyOrange', 'stickyBlue'];
        break;

      default:
        result = [];
    }

    insertDroppables(result);
  }
  
  $(document).on('tap', '.DesignImageThumbDrop img', function() {
    var imageY = ($('#DesignStage').height() / 2) - 130
    var imageX = 100
    Design.stage.insert('images\n style\n  position absolute\n  top ' + imageY +'\n  left ' + imageX + '\n tag img\n src ' + $(this).attr('src'))
  })
  
  $('#DesignRibbon').on('slidestart', '.DesignImageThumbDrop img', function() {
    Design.stage.dragAndDrop('images\n style\n  position absolute\n  top 0px\n  left 0px\n tag img\n src ' + $(this).attr('src'))
    mixpanel.track('I dropped a ribbon droppable')
  })


  // We do this on live, so that it wont interfere with events bound
  // to items inside the ribbon, but it will prevent events from
  // reaching nudgepadbody hopefully
  $('#DesignRibbon').on('mousedown slide slidestart', function (event) {
    
    event.stopPropagation()
  })

})

