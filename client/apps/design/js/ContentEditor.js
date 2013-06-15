Design.contentEditor = {}

/**
 * Fires when a block being edited a blur occurs.
 */
Design.contentEditor.onblur = function () {
  
  var scrap = $(this).scrap()
  scrap.set('content', $(this).html())

  // rebind the blocks
  $(this).off('tap mousedown slide slidestart hold slideend', Design.contentEditor.killEvent)

  // remove the ability to edit & select text.
  $(this).removeAttr('contenteditable')

  // record the changes for undo/redo
  Design.stage.commit()
  Design.broadcastSelection()
}

/**
 * Focus and start editing the text of a block.
 *
 * @param {string} Scrap id
 * @param {bool} Whether to select all on focus
 */
Design.contentEditor.focus = function (selector, selectAll) {
  
  
  // When focused, it's as if you have nothing selected. We're really going to do 
  // a patch instead
  Design.stage.selection.clear()
  
  var element = $(selector)
  var scrap = element.scrap()  
  
  // If not suitable for contenteditable, pop prompt instead.
  if (!scrap.isContentEditable()) {
    
    var attr = 'content'
    var tag = scrap.values.tag
    
    if (tag && tag.match(/^(list)$/)) {
      Design.stage.selection.clear()
      element.selectMe()
      Design.stage.selection.editSource()
      return false
    }
    
    if (tag && tag.match(/^(textarea|input|password)$/))
      attr = 'placeholder'
    
    TextPrompt('Editing content for this block', scrap.values[attr], function (val) {
      scrap.values[attr] = val
      Design.stage.commit()
      element.remove()
      $('#DesignStageBody').append(scrap.toHtml(null, true))
      element.selectMe()
    })
    return
  }
  
  Design.broadcastSelection(scrap.selector())

  // set element to editable
  element.attr('contenteditable', 'true')
  
  // stop propagation (todo: perhaps we could use these to make some sweet events!)
  element.on('tap slide slidestart hold slideend', Design.contentEditor.killEvent)
  
  // on blur, remove all this stuff.
  element.on('blur', Design.contentEditor.onblur)
  
  // focus the element
  element.focus()
  
  // move the cursor to the end of the element
  MoveCursorToEnd(element[0])

  // Select all
  if (selectAll)
    document.execCommand('selectAll',false,null)
}

/**
 * Stop propagation and prevent default by returning false.
 *
 * we name this instead of using an anonymous function so we can then remove it from
 * the element its bound to.
 *
 * @param {object} event
 * @return false.
 */
Design.contentEditor.killEvent = function (event) {
  // 
  Mouse.down.stopPropagation()
  return false
}


