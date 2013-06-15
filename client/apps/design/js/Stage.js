/**
 * The Stage holds the current open page.
 * We do a frame so the ribbon doesnt overlap the work area.
 * Its not actually a frame though, just a div with scroll.
 */
nudgepad.stage.version = 0 // how many steps in we are
nudgepad.stage.percentElapsed = 100

/**
 * Open the previous page
 */
nudgepad.stage.back = function () {
  nudgepad.stage.open(site.get('pages').prev(nudgepad.stage.activePage))
}

/**
 * Generates a Space of the change and posts it to the server.
 *
 * @return {string} todo: why return a string?
 */
nudgepad.stage.commit = function () {
  
  var timestamp = new Date().getTime()
  
  // You are always committing against the edge.
  var diff = Design.edge.diff(Design.stage)
  var diffOrder = Design.edge.diffOrder(Design.stage)

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

  nudgepad.stage.timeline.set(timestamp, commit)
  Design.edge = new Space(Design.stage.toString())
  
  // A commit always advances the position index to the edge.
  nudgepad.stage.version = nudgepad.stage.timeline.keys.length
  
  nudgepad.stage.updateTimeline()
  
  nudgepad.trigger('selection')
  
  // Send Commit to Server
  var patch = new Space()
  patch.set('timelines ' + nudgepad.stage.activePage + ' ' + timestamp, commit)
  site.set('pages ' + nudgepad.stage.activePage, new Space(Design.stage.toString()))

//  nudgepad.notify('Saved')
  nudgepad.emit('commit', patch.toString())
  return diff
}

nudgepad.stage.dragAndDrop = function (scrap) {
  
  if (typeof scrap === 'string')
    scrap = new Space(scrap)
  
  var halfWidth = 0
  var halfHeight = 0
  var height = scrap.get('head style html height')
  var width = scrap.get('head style html height')
  if (!height || !width) {
    var dimensions = nudgepad.getPageDimensions(scrap)
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

  nudgepad.stage.insert(scrap, true, left, y)
}

/**
 * Advances position_index, advanced position.
 */
nudgepad.stage.editSource = function () {
  nudgepad.textPrompt('Enter code...', Design.stage.toString(), function (val) {
    Design.stage = new Space(val)
    nudgepad.stage.commit()
    nudgepad.stage.open(nudgepad.stage.activePage)
  })
}

/**
 * Deletes all scraps from the page and DOM.
 */
nudgepad.stage.erase = function () {
  nudgepad.stage.selectAll()
  nudgepad.stage.selection.remove()
  nudgepad.stage.commit()
}

/**
 * Open the next page
 */
nudgepad.stage.forward = function () {
  nudgepad.stage.open(site.get('pages').next(nudgepad.stage.activePage))
}

nudgepad.stage.goto = function (version) {
  nudgepad.stage.selection.save()
  nudgepad.stage.selection.clear()
  if (version < 0)
    return false
  if (version > nudgepad.stage.timeline.keys.length)
    return false
  
  // If we are going back in time, start from 0
  if (nudgepad.stage.version > version) {
    Design.stage = new Page()
    nudgepad.stage.version = 0
  }
  for (var i = nudgepad.stage.version; i < version; i++) {
    var timestamp = nudgepad.stage.timeline.keys[i]
    var patch = nudgepad.stage.timeline.values[timestamp].values.values
    var orderPatch = nudgepad.stage.timeline.values[timestamp].values.order
    if (patch)
      Design.stage.patch(patch.toString())
    if (orderPatch)
      Design.stage.patchOrder(orderPatch.toString())
    nudgepad.stage.version++
  }
  // Todo: fire an event and have timeline subscribe to that event.
  nudgepad.stage.updateTimeline()
  nudgepad.stage.render()
  nudgepad.stage.selection.restore()
  nudgepad.trigger('stage')
}

nudgepad.stage.height = function () {
  return $(window).height() - $('#nudgepadPagesBar').outerHeight()
}

nudgepad.stage.insertBody = function () {
  if (!Design.stage.get('body')) {
    Design.stage.set('body', new Scrap('body', 'tag body\nscraps\n'))
    Design.stage.get('body').render()
  }
  if (!Design.stage.get('body scraps'))
    Design.stage.set('body scraps', new Space())
//    Design.stage.set('body scraps', new Space())
//    level = Design.stage.get('body scraps')
}

/**
 * Creates new scraps, commits them and adds them to DOM.
 *
 * @param {Space}  An optional space to initialize the scrap with.
 * @return {string} IDs of the new scraps
 */
nudgepad.stage.insert = function (space, drag, xMove, yMove, center) {
  
  if (!space)
    space = 'scrap\n content Hello world\n style\n  position absolute\n  top 10px\n  left 10px'
    
  // temporary fix for the revised scraps
  var patch = new Space(space.toString())
  nudgepad.stage.selection.clear()
  
  nudgepad.stage.insertBody()
  var level = Design.stage.get('body scraps')
  
  
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
    yMove = Math.round(nudgepad.stage.scrollTop() + ($(window).height() / 2) - selection_dimensions.height/2)
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
    nudgepad.stage.commit()  
  }
  
  return selectors
}

/**
 * Is the head behind edge?
 * @returns {bool}
 */
nudgepad.stage.isBehind = function () {
  return (nudgepad.stage.version < nudgepad.stage.timeline.keys.length)
}

/**
 * @param {string} Name of page
 */
nudgepad.stage.open = function (name) {
  
  var page = site.get('pages ' + name)
  if (!page)
    return nudgepad.error('Page ' + name + ' not found')

  nudgepad.stage.selection.clear()
  
  // Page change stuff
  nudgepad.stage.activePage = name
  store.set('activePage', nudgepad.stage.activePage)
  nudgepad.tab.patch('page ' + nudgepad.stage.activePage)
  Design.updateTabs()
  
  nudgepad.stage.reload()
  nudgepad.stage.render()
  nudgepad.stage.updateTimeline()
  
  nudgepad.trigger('selection')
  
  return ''
  
}

nudgepad.stage.redo = function () {
  nudgepad.stage.goto(nudgepad.stage.version + 1)
}

/**
 * Refresh the stage.
 */
nudgepad.stage.render = function () {
  $('#nudgepadStageHead').html('')
  $('#nudgepadRemoteSelections').html('')
  $(".scrap,#body").remove()
  Design.stage.loadScraps()
  Design.stage.render()
  nudgepad.grid.create()
  nudgepad.updateSelections()
}

nudgepad.stage.reload = function () {
  var name = nudgepad.stage.activePage
  var page = site.get('pages ' + name)
  Design.edge = page
  Design.stage = new Page(page.toString())
  
  // if no timeline, create a blank one
  // todo: think harder about what the hell this will do
  // If no timeline, but yes edge, make the edge the first commit
  // i dont like this
  nudgepad.stage.setTimeline(name)
  nudgepad.stage.version = nudgepad.stage.timeline.keys.length
  
}

nudgepad.stage.reset = function () {
  $('#nudgepadStage').height($(window).height() - 40)
}

nudgepad.stage.ribbonClose = function () {
  $('#nudgepadStage').height($(window).height() - 40)
}

nudgepad.stage.ribbonOpen = function () {
  $('#nudgepadStage').height($(window).height() - 122)
}

/**
 * Returns scroll top of the frame.
 */
nudgepad.stage.scrollTop = function () {
  return $('#nudgepadStage').scrollTop()
}

/**
 * Selects all blocks
 */
nudgepad.stage.selectAll = function () {
  $('.scrap').each(function () {
    $(this).selectMe()
  })
}

/**
 * @return {object} Pointer to timeline object
 */
nudgepad.stage.setTimeline = function (name) {
  
  if (site.get('timelines ' + name)) {
    nudgepad.stage.timeline = site.get('timelines ' + name)
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
  
  nudgepad.stage.timeline = site.get('timelines ' + name)
  
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

nudgepad.stage.currentView = 'ipad'

nudgepad.stage.toggleView = function () {
  
  nudgepad.stage.currentView = stageViews.next(nudgepad.stage.currentView)
  stageViews.get(nudgepad.stage.currentView)()
  $('#nudgepadStageBody').width()
  nudgepad.notify(nudgepad.stage.currentView + ' view')
}

nudgepad.stage.undo = function () {
  nudgepad.stage.goto(nudgepad.stage.version - 1)
}

nudgepad.stage.updateTimeline = function () {
  // Set the history slider to the wherever the worker last had it (usally 100 if no history or havent edited it yet)
  nudgepad.stage.percentElapsed = (nudgepad.stage.timeline.keys.length ? Math.round(100 * nudgepad.stage.version/nudgepad.stage.timeline.keys.length) : 100)
  $('#nudgepadTimeline').attr('max', nudgepad.stage.timeline.keys.length).val(nudgepad.stage.version)
  $('#nudgepadTimelinePosition').text(nudgepad.stage.version + '/' + nudgepad.stage.timeline.keys.length)
}

nudgepad.on('main', function () {
  
  stageViews.get('ipad')()
  $('#nudgepadStageBody').width()
  
  
  
  
  /*
  $("#nudgepadStage").on('rendered', function (event, id) {
    if (Design.stage[id].locked)
      $('.scrap#' + id).addClass('lockedScrap')
  })
  */

  $("#nudgepadStage").on("tap", function (event) {
    nudgepad.stage.selection.clear()
    return true
  })

  $(window).on('resize', function () {
    stageViews.get(nudgepad.stage.currentView)()
    $('#nudgepadStageBody').width()
    if ($('#nudgepadRibbon:visible').length)
      $('#nudgepadStage').height($(window).height() - 122)
    else 
      $('#nudgepadStage').height($(window).height() - 40)
  })

  nudgepad.stage.reset()

})

