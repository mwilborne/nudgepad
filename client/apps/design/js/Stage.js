/**
 * The Stage holds the current open page.
 * We do a frame so the ribbon doesnt overlap the work area.
 * Its not actually a frame though, just a div with scroll.
 */
Design.stage.version = 0 // how many steps in we are
Design.stage.percentElapsed = 100
Design.stage.activePage = 'home'
// store.get('activePage')

/**
 * Open the previous page
 */
Design.stage.back = function () {
  Design.stage.open(site.get('pages').prev(Design.stage.activePage))
}

/**
 * Generates a Space of the change and posts it to the server.
 *
 * @return {string} todo: why return a string?
 */
Design.stage.commit = function () {
  
  var timestamp = new Date().getTime()
  
  // You are always committing against the edge.
  var diff = Design.edge.diff(Design.page)
  var diffOrder = Design.edge.diffOrder(Design.page)

  if (diff.isEmpty() && diffOrder.isEmpty()) {
    console.log('no change')
    return false
  }
  var commit = new Space()
  commit.set('author', nudgepad.cookie.email)
  if (!diff.isEmpty())
    commit.set('values', new Space(diff.toString()))
  if (!diffOrder.isEmpty())
    commit.set('order', new Space(diffOrder.toString()))

  Design.stage.timeline.set(timestamp, commit)
  Design.edge = new Space(Design.page.toString())
  
  // A commit always advances the position index to the edge.
  Design.stage.version = Design.stage.timeline.keys.length
  
  Design.stage.updateTimeline()
  
  nudgepad.trigger('selection')
  
  // Send Commit to Server
  var patch = new Space()
  patch.set('timelines ' + Design.stage.activePage + ' ' + timestamp, commit)
  site.set('pages ' + Design.stage.activePage, new Space(Design.page.toString()))

//  nudgepad.notify('Saved')
  nudgepad.emit('commit', patch.toString())
  return diff
}

Design.stage.dragAndDrop = function (scrap) {
  
  if (typeof scrap === 'string')
    scrap = new Space(scrap)
  
  var halfWidth = 0
  var halfHeight = 0
  var height = scrap.get('head style html height')
  var width = scrap.get('head style html height')
  if (!height || !width) {
    var dimensions = Design.getPageDimensions(scrap)
    // temp fix for sticky
    if (isNaN(dimensions.width)) {
      dimensions.width = 140
      dimensions.height = 100
    }
    width = dimensions.width
    height = dimensions.height
  }
  width = parseFloat(width)
  height = parseFloat(height)
  var halfWidth = Math.round(width/2)
  var halfHeight = Math.round(height/2)

  var pageLeft = $('#nudgepadStageBody').offset().left
  var bodyScroll = $('#nudgepadStage').scrollTop()
  
  var left = nudgepad.mouse.move.pageX - pageLeft - halfWidth
  var y = nudgepad.mouse.move.pageY - halfHeight + bodyScroll

  Design.stage.insert(scrap, true, left, y)
}

/**
 * Advances position_index, advanced position.
 */
Design.stage.editSource = function () {
  nudgepad.textPrompt('Enter code...', Design.page.toString(), function (val) {
    Design.page = new Space(val)
    Design.stage.commit()
    Design.stage.open(Design.stage.activePage)
  })
}

/**
 * Deletes all scraps from the page and DOM.
 */
Design.stage.erase = function () {
  Design.stage.selectAll()
  Design.stage.selection.remove()
  Design.stage.commit()
}

/**
 * Open the next page
 */
Design.stage.forward = function () {
  Design.stage.open(site.get('pages').next(Design.stage.activePage))
}

Design.stage.goto = function (version) {
  Design.stage.selection.save()
  Design.stage.selection.clear()
  if (version < 0)
    return false
  if (version > Design.stage.timeline.keys.length)
    return false
  
  // If we are going back in time, start from 0
  if (Design.stage.version > version) {
    Design.page = new Page()
    Design.stage.version = 0
  }
  for (var i = Design.stage.version; i < version; i++) {
    var timestamp = Design.stage.timeline.keys[i]
    var patch = Design.stage.timeline.values[timestamp].values.values
    var orderPatch = Design.stage.timeline.values[timestamp].values.order
    if (patch)
      Design.page.patch(patch.toString())
    if (orderPatch)
      Design.page.patchOrder(orderPatch.toString())
    Design.stage.version++
  }
  // Todo: fire an event and have timeline subscribe to that event.
  Design.stage.updateTimeline()
  Design.stage.render()
  Design.stage.selection.restore()
  nudgepad.trigger('stage')
}

Design.stage.height = function () {
  return $(window).height() - $('#nudgepadDesignBar').outerHeight()
}

Design.stage.insertBody = function () {
  if (!Design.page.get('body')) {
    Design.page.set('body', new Scrap('body', 'tag body\nscraps\n'))
    Design.page.get('body').render()
  }
  if (!Design.page.get('body scraps'))
    Design.page.set('body scraps', new Space())
//    Design.page.set('body scraps', new Space())
//    level = Design.page.get('body scraps')
}

/**
 * Creates new scraps, commits them and adds them to DOM.
 *
 * @param {Space}  An optional space to initialize the scrap with.
 * @return {string} IDs of the new scraps
 */
Design.stage.insert = function (space, drag, xMove, yMove, center) {
  
  if (!space)
    space = 'scrap\n content Hello world\n style\n  position absolute\n  top 10px\n  left 10px'
    
  // temporary fix for the revised scraps
  var patch = new Space(space.toString())
  Design.stage.selection.clear()
  
  Design.stage.insertBody()
  var level = Design.page.get('body scraps')
  
  
  // update the patch so there is no overwriting
  patch.each(function (key, value) {
    if (level.get(key)) {
      this.rename(key, level.autokey(key))
    }
  })
  // now merge stage
  level.patch(patch)
  var selectors = []
  patch.each(function (key, value) {
    level.values[key] = new Scrap('body ' + key, value)
    var element = level.values[key].render().element()
    // Some elemeents arenet seleectable (titles, for example)
    if (element.length) {
      element.selectMe()
      selectors.push(level.values[key].selector())
    }
  })
  
  if (center) {
    var selection_dimensions = $('.selection').dimensions()
    xMove = Math.round(($('#nudgepadStageBody').width() / 2) - selection_dimensions.width/2)
    yMove = Math.round(Design.stage.scrollTop() + ($(window).height() / 2) - selection_dimensions.height/2)
  }
  
  if (xMove || yMove) {
    $('.selection').each(function () {
      $(this).scrap().move(xMove, yMove)
    })
  }
  
  $('.handle').trigger('update')
  
  if (drag) {
    var name = $('.selection').attr('id')
    // Pretend the mousedown was on the move handle
    Events.slide.target = $("#move_handle_" + name)
    $("#move_handle_" + name).triggerHandler("mousedown")
    $("#move_handle_" + name).triggerHandler("slidestart")
    
    
    $('.selection').each(function () {
      var subject = $(this)
      var ghost = subject.clone()
      var opacity = subject.css('opacity')
      var scrap = $(this).scrap()
      subject.css('opacity', '0.01')
      ghost.attr('id', 'nudgepad_move_ghost').removeClass('scrap selection')
      ghost.on('mousedown', function () {subject.remove()})
      // space.style
      ghost.css('font-family', $('#nudgepadStageBody').css('font-family'))
      if (scrap.values.style)
        ghost.css(scrap.values.style.values)
      ghost.css({
        'z-index' : '600',
        'position' : 'fixed',
        'top' : subject.offset().top,
        'left' : subject.offset().left
      })
      $("#move_handle_" + name).on("slide", function (event) {
        ghost.css({
          'top' : subject.offset().top,
          'left' : subject.offset().left
        })
      })
      $("#move_handle_" + name).on("slideend", function (event) {
        subject.css('opacity', opacity)
        ghost.remove()
      })
      $('body').append(ghost)
      
    })
    
    
  } else {
    Design.stage.commit()  
  }
  
  return selectors
}

/**
 * Is the head behind edge?
 * @returns {bool}
 */
Design.stage.isBehind = function () {
  return (Design.stage.version < Design.stage.timeline.keys.length)
}

/**
 * @param {string} Name of page
 */
Design.stage.open = function (name) {
  
  var page = site.get('pages ' + name)
  if (!page)
    return nudgepad.error('Page ' + name + ' not found')

  Design.stage.selection.clear()
  
  // Page change stuff
  Design.stage.activePage = name
  store.set('activePage', Design.stage.activePage)
  nudgepad.tab.patch('page ' + Design.stage.activePage)
  Design.updateTabs()
  
  Design.stage.reload()
  Design.stage.render()
  Design.stage.updateTimeline()
  
  nudgepad.trigger('selection')
  
  return ''
  
}

Design.stage.redo = function () {
  Design.stage.goto(Design.stage.version + 1)
}

/**
 * Refresh the stage.
 */
Design.stage.render = function () {
  $('#nudgepadStageHead').html('')
  $('#nudgepadRemoteSelections').html('')
  $(".scrap,#body").remove()
  Design.page.loadScraps()
  Design.page.render()
  Design.grid.create()
  nudgepad.updateSelections()
}

Design.stage.reload = function () {
  var name = Design.stage.activePage
  var page = site.get('pages ' + name)
  Design.edge = page
  Design.page = new Page(page.toString())
  
  // if no timeline, create a blank one
  // todo: think harder about what the hell this will do
  // If no timeline, but yes edge, make the edge the first commit
  // i dont like this
  Design.stage.setTimeline(name)
  Design.stage.version = Design.stage.timeline.keys.length
  
}

Design.stage.reset = function () {
  $('#nudgepadStage').height($(window).height() - 40)
}

Design.stage.ribbonClose = function () {
  $('#nudgepadStage').height($(window).height() - 40)
}

Design.stage.ribbonOpen = function () {
  $('#nudgepadStage').height($(window).height() - 122)
}

/**
 * Returns scroll top of the frame.
 */
Design.stage.scrollTop = function () {
  return $('#nudgepadStage').scrollTop()
}

/**
 * Selects all blocks
 */
Design.stage.selectAll = function () {
  $('.scrap').each(function () {
    $(this).selectMe()
  })
}

/**
 * @return {object} Pointer to timeline object
 */
Design.stage.setTimeline = function (name) {
  
  if (site.get('timelines ' + name)) {
    Design.stage.timeline = site.get('timelines ' + name)
    return true
  }
  
  var request = $.ajax({
    type: "GET",
    url: '/nudgepad.site.timelines.' + name,
    async: false,
  })
  
  request.done(function (msg) {
    site.set('timelines ' + name, new Space(msg))
  })
  
  request.fail(function () {
    
    var edge = site.get('pages ' + name)
    var timeline = new Space()
    // If no timeline, but yes edge, make the edge the first commit
    if (edge && !edge.isEmpty()) {
      
      var commit = new Space()
      commit.set('author', nudgepad.cookie.email)
      commit.set('values', new Space(edge.toString()))
    }
    

    site.set('timelines ' + name, timeline  )
    var patch = new Space()
    patch.set('timelines ' + name, timeline)
    nudgepad.emit('patch', patch.toString())
    nudgepad.notify('Timeline created')
    
    
  })
  
  Design.stage.timeline = site.get('timelines ' + name)
  
}

var stageViews = new Space({
  'full' : function () {
    $('#nudgepadStage').css({
      width : '100%',
      padding : 0
    })
    $('#nudgepadStageBody').css({
      'height' : '100%',
      'min-height' : '1000px'
    })
  },
  'ipad' : function (){
    var padding = Math.round(($(window).width() - 1024)/2) + 'px'
    $('#nudgepadStage').css({
      width : '1024px',
      padding : '20px ' + padding + ' 1000px ' + padding,
    })
    $('#nudgepadStageBody').css({
      'height' : '100%',
      'min-height' : '768px'
    })
  },
  'ios' : function (){
    var padding = Math.round(($(window).width() - 320)/2) + 'px'
    $('#nudgepadStage').css({
      padding : '20px ' + padding + ' 20px ' + padding,
      width: '320px'
    })
    $('#nudgepadStageBody').css({
      'height' : '356px'
    })
  }
})

Design.stage.currentView = 'ipad'

Design.stage.toggleView = function () {
  
  Design.stage.currentView = stageViews.next(Design.stage.currentView)
  stageViews.get(Design.stage.currentView)()
  $('#nudgepadStageBody').width()
  nudgepad.notify(Design.stage.currentView + ' view')
}

Design.stage.undo = function () {
  Design.stage.goto(Design.stage.version - 1)
}

Design.stage.updateTimeline = function () {
  // Set the history slider to the wherever the worker last had it (usally 100 if no history or havent edited it yet)
  Design.stage.percentElapsed = (Design.stage.timeline.keys.length ? Math.round(100 * Design.stage.version/Design.stage.timeline.keys.length) : 100)
  $('#nudgepadTimeline').attr('max', Design.stage.timeline.keys.length).val(Design.stage.version)
  $('#nudgepadTimelinePosition').text(Design.stage.version + '/' + Design.stage.timeline.keys.length)
}

nudgepad.on('main', function () {
  
  stageViews.get('ipad')()
  $('#nudgepadStageBody').width()
  
  
  
  
  /*
  $("#nudgepadStage").on('rendered', function (event, id) {
    if (Design.page[id].locked)
      $('.scrap#' + id).addClass('lockedScrap')
  })
  */

  $("#nudgepadStage").on("tap", function (event) {
    Design.stage.selection.clear()
    return true
  })

  $(window).on('resize', function () {
    stageViews.get(Design.stage.currentView)()
    $('#nudgepadStageBody').width()
    if ($('#nudgepadRibbon:visible').length)
      $('#nudgepadStage').height($(window).height() - 122)
    else 
      $('#nudgepadStage').height($(window).height() - 40)
  })

  Design.stage.reset()

})

