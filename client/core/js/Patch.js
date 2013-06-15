/**
 * Singleton.
 * Namespace for methods that do realtime syncing.
 */
nudgepad.patch = {}

/**
 * Handles incoming patches to site
 *
 * @param {Space}
 */
nudgepad.patch.receive = function (patch) {
  
  patch = new Space(patch)
  var behind = Design.stage.isBehind()
  
  // If the page has been deleted, change page
  if (patch.get('pages ' + Design.stage.activePage) === '')
    Design.stage.back()
  
  site.patch(patch)
  Design.updateTabs()
  
  // If the active page isnt touched, we are all done
  if (!patch.get('timelines ' + Design.stage.activePage))
    return true    
  
  if (behind)
    return Design.stage.updateTimeline()
  
  if ($('input:focus, div:focus, textarea:focus, a:focus').length)
    return Design.stage.updateTimeline()

  // Todo: this breaks if you are in content editable
  Design.stage.redo()
  nudgepad.notify('Change received', 1000)
}

nudgepad.on('patch', nudgepad.patch.receive)

