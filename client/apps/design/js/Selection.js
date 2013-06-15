/**
 * @special Singleton
 */
nudgepad.stage.selection = {}
nudgepad.stage.selection.saved = []

nudgepad.stage.selection.alignLeft = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().left < edge)
      edge = $(this).position().left
  })
  nudgepad.stage.selection.css('left ' + edge + 'px')
}

nudgepad.stage.selection.alignRight = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().left > edge)
      edge = $(this).position().left
  })
  nudgepad.stage.selection.css('left ' + edge + 'px')
}

nudgepad.stage.selection.alignTop = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().top < edge)
      edge = $(this).position().top
  })
  nudgepad.stage.selection.css('top ' + edge + 'px')
}

nudgepad.stage.selection.alignBottom = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().top > edge)
      edge = $(this).position().top
  })
  nudgepad.stage.selection.css('top ' + edge + 'px')
}

/**
 * Change the box shadow of selected blocks.
 *
 * @param {number}
 */
nudgepad.stage.selection.boxShadow = function (blur) {
  $('.selection').each(function () {
    var scrap = $(this).scrap()
    if(blur < 1){
      scrap.set('style box-shadow', 'none')
      $(this).css( 'box-shadow', 'none')
    }
    else{
      scrap.set('style box-shadow', '0px 1px ' + blur + 'px' + ' #888')
      $(this).css( 'box-shadow', '0px 1px ' + blur + 'px' + ' #888')
    }
  })
}

nudgepad.stage.selection.capture = function () {
  nudgepad.stage.selection.captured = nudgepad.stage.selection.toSpace()
}


/**
 * Deselect all blocks
 */
nudgepad.stage.selection.clear = function () {
  $('.selection').each(function () {
    $(this).deselect()
  })
  
}

/**
 * Execute a CSS command against the selected blocks such as color red.
 * Commits the change.
 *
 * @param {string}
 */
nudgepad.stage.selection.css = function (command) {
  nudgepad.stage.selection.cssPreview(command)
  nudgepad.stage.commit()
  $('.handle').trigger('update')
}

/**
 * Execute a CSS command against the selected blocks such as color red
 *
 * @param {string}
 */
nudgepad.stage.selection.cssPreview = function (command) {
  if (!command)
    return false
  command = new Space(command)
  // command like: background blue

//  command = command.split(/ /)
//  var property = command.shift()
//  var value = command.join(' ')
  $('.selection').each(function () {
    var style = $(this).scrap().get('style')
    if (!style) {
      $(this).scrap().set('style', new Space())
      style = $(this).scrap().get('style')
    }
    style.patch(command)
    $(this).css(command.values)
  })
}

nudgepad.stage.selection.cssPrompt = function () {
  var val = prompt('Enter a CSS command like font-family Arial', '')
  if (val)
    nudgepad.stage.selection.css(val)
}

nudgepad.stage.selection.distributeVertical = function () {
  
  var elements = _.sortBy($('.selection'), function(element){ return $(element).position().top })
  
  // calculate total whitespace.
  var whitespace = 0
  var count = 0
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var id = $(element).attr('id')
    // The space betweein
    whitespace += $(element).position().top - ($(last).position().top + $(last).outerHeight())
    count++
  })
  var theSpaceBetween = Math.floor(whitespace/count)
  if (theSpaceBetween < 0) theSpaceBetween = 0
  
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var scrap = $(element).scrap()
    scrap.set('style top', (($(last).position().top + $(last).outerHeight()) + theSpaceBetween) + 'px')
    $(element).css('top', scrap.get('style top'))
  })
  $('.handle').trigger('update')
  nudgepad.stage.commit()
}

nudgepad.stage.selection.distributeHorizontal = function () {
  // this function is currently 3N ish. But that should be fine. But we
  // could clearly make it faster if it feels slow.
  
  var elements = _.sortBy($('.selection'), function(element){ return $(element).position().left })
  
  // calculate total whitespace.
  var whitespace = 0
  var count = 0
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var id = $(element).attr('id')
    // The space betweein
    whitespace += $(element).position().left - ($(last).position().left + $(last).outerWidth())
    count++
  })
  var theSpaceBetween = Math.floor(whitespace/count)
  if (theSpaceBetween < 0) theSpaceBetween = 0
  
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var scrap = $(element).scrap()
    scrap.set('style left', ($(last).position().left + $(last).outerWidth() + theSpaceBetween) + 'px')
    $(element).css('left', scrap.get('style left'))
  })
  $('.handle').trigger('update')
  nudgepad.stage.commit()
  nudgepad.notify('Distributed', 1000)
}

/**
 * Duplicate the selected blocks. Offset them to the right.
 */
nudgepad.stage.selection.duplicate = function () {
  $('.selection').each(function () {
    $(this).duplicate()
  })
  nudgepad.stage.commit()
//  return nudgepad.stage.insert(nudgepad.stage.selection.toSpace(), false, 10, 10, false)
}

nudgepad.stage.selection.editLoop = function () {
  
  var property = prompt('What property do you want to edit?')
  if (!property)
    return false
  
  var todo = $('.selection').length
  $('.selection').each(function (index) {
    
    var scrap = $(this).scrap()
    $(this).addClass('nudgepadHighlightedScrap')
    // If its offscreen, scroll to bring it fully on screen.
    $(this).scrollMinimal()
    var value = scrap.get(property)
  
    var newValue = prompt('Set ' + property + ' of ' + id + ' to', value)
    
    
    if (!newValue) {
      return true
    }
    
    // If they didnt change name continue
    if (newValue == value) {
      $(this).removeClass('nudgepadHighlightedScrap')
      return true
    } 
    $(this).removeClass('nudgepadHighlightedScrap')
    
    scrap.set(property, newValue)
    scrap.render()
    
  })
  nudgepad.stage.commit()
}

nudgepad.stage.selection.editProperty = function () {
  
  var scrap = $('.selection').scrap()
  
  var prop = prompt('What property do you want to edit?', '')
  if (!prop)
    return false
  
  var value = scrap.get(prop)
  nudgepad.textPrompt('Enter new value...', value.toString(), function (val) {
      scrap.set(prop, val)
      nudgepad.stage.commit()
      nudgepad.stage.open(nudgepad.stage.activePage)
  })
}

/**
 * Advances position_index, advanced position.
 */
nudgepad.stage.selection.editSource = function () {
  nudgepad.stage.selection.capture()
  nudgepad.stage.selection.save()
  nudgepad.textPrompt('Enter code...', nudgepad.stage.selection.captured.toString(), nudgepad.stage.selection.modify)
}

/**
 * Return boolean
 */
nudgepad.stage.selection.exists = function () {
  return $('.selection').length
}

nudgepad.stage.selection.modify = function (val) {
  var space = new Space(val)
  Design.stage.patch(nudgepad.stage.selection.captured.diff(space))
  nudgepad.stage.commit()
  nudgepad.stage.open(nudgepad.stage.activePage)
  nudgepad.stage.selection.restore()
}

/**
 * Move the selected blocks.
 *
 * @param {number} Number of pixels to move x (positive is right)
 * @param {number} Number of pixels to move y (positive is down)
 */
nudgepad.stage.selection.move = function (x, y) {
  
  if (!$('.selection').length)
    return false
  
  $('.selection').each(function () {
    $(this).scrap().move(x, y)
  })
  
  // Show dimensions
  var el = $($('.selection')[0])
  var position = 'X ' + parseFloat(el.css('left')) + '<br>Y ' + parseFloat(el.css('top'))
  $('#nudgepadDimensions').css({
    left : 10 + el.offset().left + el.outerWidth(),
    top : -10 + el.offset().top + Math.round(el.outerHeight()/2)
    }).html(position)
  nudgepad.popup.open('#nudgepadDimensions')
  
  $('.handle').trigger("update")
  nudgepad.stage.commit()
}

nudgepad.stage.selection.nest = function (path) {
  var parent = Design.stage.get(path)
  if (!parent)
    return false
  if (!parent.get('scraps'))
    parent.set('scraps', new Space())
  parent = parent.get('scraps')
  var patch = nudgepad.stage.selection.toSpace()
  nudgepad.stage.selection.remove()
  
  // update the patch so there is no overwriting
  patch.each(function (key, value) {
    if (parent.get(key)) {
      this.rename(key, parent.autokey(key))
    }
  })
  
  parent.patch(patch)
  nudgepad.stage.commit()
  nudgepad.stage.open(nudgepad.stage.activePage)
}

/**
 * Apply a patch to all selected scraps
 *
 * @param {Space} The patch
 */
nudgepad.stage.selection.patch = function (space) {

  if (typeof space === 'string')
    space = new Space(space)

  $('.selection').each(function () {
    var scrap = $(this).scrap()
    $(this).deselect()
    scrap.patch(space)
    $(this).replaceWith(scrap.toHtml())
    scrap.element().selectMe()
  })
  nudgepad.stage.commit()
}

nudgepad.stage.selection.patchPrompt = function () {
  var val = prompt('Enter a patch like content hi', '')
  if (val)
    nudgepad.stage.selection.patch(val)
}

/**
 * Delete the selected blocks
 */
nudgepad.stage.selection.remove = function () {
  $('.selection').each(function () {
    // order probably matters here
    // should we move deselect and select to jquery level? i think we probably should
    var scrap = $(this).scrap()
    $(this).deselect().remove()
    if (scrap)
      Design.stage.delete(scrap.getPath())
  })
}

nudgepad.stage.selection.renameScraps = function () {
  var todo = $('.selection').length
  $('.selection').each(function (index) {
    var scrap = $(this).scrap()
    $(this).addClass('nudgepadHighlightedScrap')
    
    // If its offscreen, scroll to bring it fully on screen.
    $(this).scrollMinimal()
    
    var newId = prompt('Renaming block ' + (index + 1) + '/' + todo + '. Enter a new ID', scrap.id)
    
    // If they didnt change name continue
    if (newId == scrap.id) {
      $(this).removeClass('nudgepadHighlightedScrap')
      return true
    }
      
    
    if (!newId) {
      return true
    }
    
    var newScrap = new Scrap(newId, scrap.toString())
    Design.stage.set(newId, newScrap)
    
    $(this).deselect().remove()
    Design.stage.delete(scrap.getPath())
    
    
    newScrap.render()
    newScrap.element().selectMe()
    
  })
  nudgepad.stage.commit()
}

/**
 * Restore the saved selection
 */
nudgepad.stage.selection.restore = function () {
  for (var i in nudgepad.stage.selection.saved) {
    var selector = nudgepad.stage.selection.saved[i]
    if ($(selector).length)
      $(selector).selectMe()
  }
}

/**
 * Save the current selection
 */
nudgepad.stage.selection.save = function () {
  nudgepad.stage.selection.saved = []
  $('.selection').each(function () {
    nudgepad.stage.selection.saved.push($(this).scrap().selector())
  })
}

/**
 * Get all selected blocks as a Space.
 *
 * @return {string}
 */
nudgepad.stage.selection.toSpace = function () {
  var space = new Space()
  $('.selection').each(function () {
    var scrap = $(this).scrap()
    space.set(scrap.getPath(), new Space(scrap.toString()))
  })
  return space
}

nudgepad.broadcastSelection = function (extra) {
  nudgepad.setColor()
  var selection = extra || ''
  var first = ''
  $('.selection').each(function () {
    if ($(this).scrap()) {
      selection += first + $(this).scrap().selector()
      first = ','
    }
  })

  selection += '{box-shadow: 0 0 4px ' + nudgepad.tab.get('color') + ';cursor: not-allowed;}'
  nudgepad.tab.patch('selection ' + selection)
  
}

nudgepad.updateSelections = function () {
  $('#nudgepadRemoteSelections').html('')
  site.values.collage.each(function (key, value) {
    if (key == nudgepad.id)
      return true
    if (value.get('page') !== nudgepad.stage.activePage)
      return true
    var style = value.get('selection')
    if (style)
      $('#nudgepadRemoteSelections').append(style)
  })
}

nudgepad.on('selection', nudgepad.broadcastSelection)

nudgepad.on('collage.update', nudgepad.updateSelections)


