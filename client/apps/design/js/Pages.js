// What spot the worker is on the timeline for the current page
Design.stage = new Page()
Design.edge = new Space()

Design.blank = function () {

  var page = new Space(
'head\n\
 tag head\n\
 scraps\n\
  title\n\
   tag title\n\
   content Untitled\n\
  stylesheet\n\
   tag link\n\
   href site.css\n\
   rel stylesheet\n\
body\n\
 tag body\n\
 scraps\n')
  var pageName = prompt('Name your page', Design.nextName())
  if (!pageName)
    return null
  Design.create(pageName, page)
  
}

/**
 *
 */
Design.clearTimeline = function () {
  
  if (!confirm("Are you sure you want to erase the history of this page?"))
    return false
  
  var timestamp = new Date().getTime()
  
  // Send Commit to Server
  var patch = new Space()
  patch.set('timelines ' + nudgepad.stage.activePage, new Space())
  for (var i in nudgepad.stage.timeline.keys) {
    var key = nudgepad.stage.timeline.keys[i]
    patch.set('timelines ' + nudgepad.stage.activePage + ' ' + key, '')
    nudgepad.stage.timeline.delete(key)
  }
  
  patch.set('timelines ' + nudgepad.stage.activePage + ' ' + timestamp, Design.edge)
  // collapse at edge
  nudgepad.stage.timeline.set(timestamp, Design.edge)

  nudgepad.stage.version = nudgepad.stage.timeline.keys.length
  nudgepad.emit('patch', patch.toString())
  nudgepad.trigger('selection')
  return true
}

/**
 * Creates a new page. todo: rename page param to edge
 *
 * @param {string} Name of the file
 * @param {Space} A first patch to initialize the page with.
 * @return {string} The name of the created page
 */
Design.create = function (name, template) {
  
  name = (name ? Permalink(name) : Design.nextName())
  
  // page already exists
  if (site.get('pages ' + name))
    return nudgepad.error('A page named ' + name + ' already exists.')
  
  var page = new Space()
  var timeline = new Space()
  if (template && template.toString().length > 2) {
    page = new Space(template.toString())
    var commit = new Space()
    commit.set('author', nudgepad.cookie.email)
    commit.set('values', new Space(template.toString()))
    timeline.set(new Date().getTime(), commit)
  }
  
  site.set('pages ' + name, page)
  site.set('timelines ' + name, timeline)
  
  var patch = new Space()
  patch.set('pages ' + name, page)
  patch.set('timelines ' + name, timeline)
  
  nudgepad.emit('patch', patch.toString())
  
  nudgepad.stage.open(name)
  mixpanel.track("I created a new webpage")
  return name
}

/**
 * Duplicates the current open page.
 *
 * @param {string} name of page to duplicate. Defaults to current page.
 * @param {string} name of new page. Defaults to source + 1
 * @param {bool} We need to skip prompting for unit testing.
 * @return {string} Name of new page
 */
Design.duplicate = function (source, destination, skipPrompt) {
  
  source = source || nudgepad.stage.activePage
  
  destination = Design.nextName(destination || source)
  
  if (!skipPrompt) {
    destination = prompt('Name your new page', destination)
    if (!destination)
      return false
  }
  
  if (!site.get('pages').get(source))
    return nudgepad.error('Page ' + source + ' not found')
  
  mixpanel.track('I duplicated a page')
  
  // If we are duplicating a page thats not open, easy peasy
  if (source !== nudgepad.stage.activePage)
    return Design.create(destination, site.get('pages').get(source))
  
  return Design.create(destination, Design.stage)
}

/**
 * Get the next available name. For example untitled_1 or untitled_2
 *
 * @param {string} Optional prefix to add to the name. Defaults to untitled_
 * @return {string} The new name
 */
Design.nextName = function (prefix) {
  var prefix = prefix || 'untitled'
  if (!(prefix in site.values.pages.values))
    return prefix
  for (var i = 1; i < 1000; i++) {
    if (!(prefix + i in site.values.pages.values))
      return prefix + i
  }
}

Design.open = function () {
  if (App.openApp)
    App.openApp.close()
}

/**
 * Renames the currently open page.
 *
 * @param {string} New name
 * @return {string} todo: why return a string?
 */
Design.rename = function (new_name) {
  
  mixpanel.track('I renamed a page')
  
  new_name = Permalink(new_name)
  var old_name = nudgepad.stage.activePage
  
  if (!new_name.length)
    return nudgepad.error('Name cannot be blank')
  
  if (old_name == 'home')
    return nudgepad.error('You cannot rename the home page.')
  
  // page already exists
  if (site.get('pages ' + new_name))
    return nudgepad.error('A page named ' + new_name + ' already exists.')  

  site.set('pages ' + new_name, site.get('pages ' + old_name))
  site.set('timelines ' + new_name, site.get('timelines ' + old_name))
  site.delete('pages ' + old_name)
  site.delete('timelines ' + old_name)
  
  Design.updateTabs()
  
  // Todo, push this to server side?
  var patch = new Space()
  patch.set('pages ' + old_name, '')
  patch.set('timelines ' + old_name, '')
  patch.set('pages ' + new_name, site.get('pages ' + new_name))
  patch.set('timelines ' + new_name, site.get('timelines ' + new_name))

  nudgepad.emit('patch', patch.toString())
  
  nudgepad.stage.open(new_name)
  
  mixpanel.track('I renamed a page')
  
  return ''

}

Design.renamePrompt = function () {
  var name = prompt('Enter a new name', nudgepad.stage.activePage)
  if (name)
    Design.rename(name)
}

/**
 * Deletes a page.
 *
 * @param {string} Name of the file
 * @return {string} todo: why return a string?
 */
Design.trash = function (name) {
  name = name || nudgepad.stage.activePage
  if (name === 'home')
    return nudgepad.error('You cannot delete the home page')
  // If its the currently open page, open the previous page first
  if (nudgepad.stage.activePage === name)
    nudgepad.stage.back()
  
  var patch = new Space()
  patch.set('pages ' + name, '')
  patch.set('timelines ' + name, '')
  nudgepad.emit('patch', patch.toString())

  site.get('pages').delete(name)
  site.get('timelines').delete(name)
  
  // Delete page from open pages
  Design.updateTabs()
  nudgepad.notify('Deleted ' + name, 1000)
  mixpanel.track('I deleted a page')
  return ''
}

