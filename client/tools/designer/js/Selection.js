/**
 * @special Singleton
 */

Designer.stage.selection.saved = []

Designer.stage.selection.capture = function () {
  Designer.stage.selection.captured = Designer.stage.selection.toSpace()
}

/**
 * Deselect all blocks
 */
Designer.stage.selection.clear = function () {
  if (!$('.selection').length)
    return true
  $('.selection').each(function () {
    $(this).deselect(true)
  })
  Designer.trigger('selection')
}

/**
 * Execute a CSS command against the selected blocks such as color red.
 * Commits the change.
 *
 * @param {string}
 */
Designer.stage.selection.css = function (command) {
  Designer.stage.selection.cssPreview(command)
  Designer.stage.commit()
  $('.handle').trigger('update')
}

/**
 * Execute a CSS command against the selected blocks such as color red
 *
 * @param {string}
 */
Designer.stage.selection.cssPreview = function (command) {
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

/**
 * Delete the selected blocks
 */
Designer.stage.selection.delete = function () {
  $('.selection').each(function () {
    // order probably matters here
    // should we move deselect and select to jquery level? i think we probably should
    var scrap = $(this).scrap()
    $(this).deselect(true).remove()
    if (scrap)
      Designer.page.delete(scrap.getPath())
  })
}

/**
 * Duplicate the selected blocks. Offset them to the right.
 */
Designer.stage.selection.duplicate = function () {
  $('.selection').each(function () {
    $(this).duplicate()
  })
  Designer.stage.commit()
//  return Designer.stage.insert(Designer.stage.selection.toSpace(), false, 10, 10, false)
}

/**
 * Advances position_index, advanced position.
 */
Designer.stage.selection.editSource = function () {
  Designer.stage.selection.capture()
  Designer.stage.selection.save()
  TextPrompt.open('Enter code...', Designer.stage.selection.captured.toString(), Designer.stage.selection.modify)
}

/**
 * Return boolean
 */
Designer.stage.selection.exists = function () {
  return $('.selection').length
}

Designer.stage.selection.modify = function (val) {
  var space = new Space(val)
  Designer.page.patch(Designer.stage.selection.captured.diff(space))
  Designer.stage.commit()
  Designer.stage.open(Designer.stage.activePage)
  Designer.stage.selection.restore()
}

/**
 * Move the selected blocks.
 *
 * @param {number} Number of pixels to move x (positive is right)
 * @param {number} Number of pixels to move y (positive is down)
 */
Designer.stage.selection.move = function (x, y) {
  
  if (!$('.selection').length)
    return false
  
  $('.selection').each(function () {
    $(this).scrap().move(x, y)
  })
  
  // Show dimensions
  var el = $($('.selection')[0])
  var position = 'X ' + parseFloat(el.css('left')) + '<br>Y ' + parseFloat(el.css('top'))
  $('#DesignerDimensions').css({
    left : 10 + el.offset().left + el.outerWidth(),
    top : -10 + el.offset().top + Math.round(el.outerHeight()/2)
    }).html(position)
  Popup.open('#DesignerDimensions')
  
  $('.handle').trigger("update")
  Designer.stage.commit()
}

Designer.stage.selection.nest = function (path) {
  var parent = Designer.page.get(path)
  if (!parent)
    return false
  if (!parent.get('scraps'))
    parent.set('scraps', new Space())
  parent = parent.get('scraps')
  var patch = Designer.stage.selection.toSpace()
  Designer.stage.selection.delete()
  
  // update the patch so there is no overwriting
  patch.each(function (key, value) {
    if (parent.get(key)) {
      this.rename(key, Designer.autokey(parent, key))
    }
  })
  
  parent.patch(patch)
  Designer.stage.commit()
  Designer.stage.open(Designer.stage.activePage)
}

/**
 * Apply a patch to all selected scraps
 *
 * @param {Space} The patch
 */
Designer.stage.selection.patch = function (space) {

  if (typeof space === 'string')
    space = new Space(space)

  $('.selection').each(function () {
    var scrap = $(this).scrap()
    $(this).deselect()
    scrap.patch(space)
    $(this).replaceWith(scrap.toHtml(Scrap.devFilter))
    scrap.element().selectMe()
  })
  Designer.stage.commit()
}

/**
 * Restore the saved selection
 */
Designer.stage.selection.restore = function () {
  for (var i in Designer.stage.selection.saved) {
    var selector = Designer.stage.selection.saved[i]
    if ($(selector).length)
      $(selector).selectMe(true)
  }
  Designer.trigger('selection')
}

/**
 * Save the current selection
 */
Designer.stage.selection.save = function () {
  Designer.stage.selection.saved = []
  $('.selection').each(function () {
    Designer.stage.selection.saved.push($(this).scrap().selector())
  })
}

/**
 * Get all selected blocks as a Space.
 *
 * @return {string}
 */
Designer.stage.selection.toSpace = function () {
  var space = new Space()
  $('.selection').each(function () {
    var scrap = $(this).scrap()
    space.set(scrap.getPath(), new Space(scrap.toString()))
  })
  return space
}

Designer.broadcastSelection = function (extra) {
  var selection = extra || ''
  var first = ''
  $('.selection').each(function () {
    if ($(this).scrap()) {
      selection += first + $(this).scrap().selector()
      first = ','
    }
  })
  selection += '{box-shadow: 0 0 4px ' + Screen.get('color') + ';cursor: not-allowed;}'
  Screen.set('selection', selection)
}

Designer.updateSelections = function () {
  $('#DesignerRemoteSelections').html('')
  
  Screens.each(function (key, value) {
    if (value.get('tool') !== 'Designer')
      return true
    if (value.get('id') === Screen.get('id'))
      return true
    // check if its this screen. todo.
    // if this screen
    // return true
    if (value.get('page') !== Designer.stage.activePage)
      return true
    var style = value.get('selection')
    if (style)
      $('#DesignerRemoteSelections').append(style)
  })
}




