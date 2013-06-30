var Pages = new Tool('Pages')
Pages.set('color', 'rgba(26, 134, 214, 1)')
Pages.set('description', 'Design pages in NudgePad.')

// What spot the maker is on the timeline for the current page
Pages.page = new Page()
Pages.edge = new Space()
Pages.stage = {}
Pages.stage.activePage = 'home'
// store.get('activePage')
Pages.stage.selection = {}

Pages.blank = function () {

  var page = new Space(
'head\n\
 tag head\n\
 scraps\n\
  title\n\
   tag title\n\
   content Untitled\n\
  stylesheet\n\
   tag link\n\
   href project.css\n\
   rel stylesheet\n\
body\n\
 tag body\n\
 scraps\n')
  var pageName = prompt('Name your page', Pages.nextName())
  if (!pageName)
    return null
  Pages.create(pageName, page)
  
}

/**
 *
 */
Pages.clearTimeline = function () {
  
  if (!confirm("Are you sure you want to erase the history of this page?"))
    return false
  
  
  
  // Send Commit to Server
  Project.delete('timelines ' + Pages.stage.activePage)
  Project.stage.setTimeline()
  Pages.trigger('selection')
  return true
}

Pages.compile = function (scraps) {
  /*********** sendPage method ************/
  var options = {
    beautify : true
  }

  var page = new Page(scraps.toString())
  var context = {}
  context.project = Project
  return page.toHtml(context, options)
}

/**
 * Creates a new page. todo: rename page param to edge
 *
 * @param {string} Name of the file
 * @param {Space} A first patch to initialize the page with.
 * @return {string} The name of the created page
 */
Pages.create = function (name, template) {
  
  name = (name ? Permalink(name) : Pages.nextName())
  
  // page already exists
  if (Project.get('pages ' + name))
    return Flasher.error('A page named ' + name + ' already exists.')
  
  var page = new Space()
  var timeline = new Space()
  if (template && template.toString().length > 2) {
    page = new Space(template.toString())
    var commit = new Space()
    commit.set('author', Cookie.email)
    commit.set('values', new Space(template.toString()))
    timeline.set(new Date().getTime(), commit)
  }
  
  Project.create('pages ' + name, page)
  Project.create('timelines ' + name, timeline)
  
  Pages.stage.open(name)
  mixpanel.track("I created a new webpage")
  return name
}

/**
 * Deletes a page.
 *
 * @param {string} Name of the file
 * @return {string} todo: why return a string?
 */
Pages.deletePage = function (name) {
  name = name || Pages.stage.activePage
  if (name === 'home')
    return Flasher.error('You cannot delete the home page')
  // If its the currently open page, open the previous page first
  if (Pages.stage.activePage === name)
    Pages.stage.back()

  Project.delete('pages ' + name)
  Project.delete('timelines ' + name)
  
  Flasher.success('Deleted ' + name, 1000)
  mixpanel.track('I deleted a page')
  return ''
}

/**
 * Duplicates the current open page.
 *
 * @param {string} name of page to duplicate. Defaults to current page.
 * @param {string} name of new page. Defaults to source + 1
 * @param {bool} We need to skip prompting for unit testing.
 * @return {string} Name of new page
 */
Pages.duplicatePage = function (source, destination, skipPrompt) {
  
  source = source || Pages.stage.activePage
  
  destination = Pages.nextName(destination || source)
  
  if (!skipPrompt) {
    destination = prompt('Name your new page', destination)
    if (!destination)
      return false
  }
  
  if (!Project.get('pages').get(source))
    return Flasher.error('Page ' + source + ' not found')
  
  mixpanel.track('I duplicated a page')
  
  // If we are duplicating a page thats not open, easy peasy
  if (source !== Pages.stage.activePage)
    return Pages.create(destination, Project.get('pages').get(source))
  
  return Pages.create(destination, Pages.page)
}

Pages.getPageDimensions = function (page) {
  page = new Page(page)
  page._static = true
  var iframe = $('<iframe class="deleteMe" style="position: fixed; right: 0px; top: 0px;"></iframe>')
  iframe.attr('frameborder', 0)
  iframe.attr('scrolling', 'no')
  iframe.css('width', 1)
  iframe.css('height', 1)
  $('#Temp').append(iframe)
  iframe.contents().find('body').append(page.toHtml())
  var box = {}
  var first = false
  iframe.contents().find('.scrap').each(function () {
    var left
    var right
    var _top
    var bottom
    if (!first) {
      box.left = $(this).position().left
      box.right = box.left + $(this).outerWidth()
      box.top = $(this).position().top
      box.bottom = box.top + $(this).outerHeight()
      first = true
    }
    else {
      left = $(this).position().left
      right = left + $(this).outerWidth()
      _top = $(this).position().top
      bottom = top + $(this).outerHeight()
      if (left < box.left)
        box.left = left
      if (right > box.right)
        box.right = right
      if (_top < box.top)
        box.top = _top
      if (bottom > box.bottom)
        box.bottom = bottom
    }
  })
  box.height = box.bottom - box.top
  box.width = box.right - box.left
  $('.deleteMe').remove()
  return box
}

Pages.import = function (url) {
  $.get('/nudgepad.import/' + url, {}, function (data) {
    Pages.page = new Page(data)
    Pages.stage.commit()
    Pages.stage.open(Pages.stage.activePage)
  })
}

Pages.importPrompt = function () {
  
  var url = prompt('Enter a url to import')
  if (!url)
    return false
  
  if (!url.match(/^https?\:\/\//))
    url = 'http://' + url
  Pages.import(url)
  
}

/**
 * Get the next available name. For example untitled_1 or untitled_2
 *
 * @param {string} Optional prefix to add to the name. Defaults to untitled_
 * @return {string} The new name
 */
Pages.nextName = function (prefix) {
  var prefix = prefix || 'untitled'
  if (!(prefix in Project.values.pages.values))
    return prefix
  for (var i = 1; i < 1000; i++) {
    if (!(prefix + i in Project.values.pages.values))
      return prefix + i
  }
}

/**
 */
Pages.oncut = function(e) {
  
  // Return true if maker is editing an input
  if ($('input:focus, div:focus, textarea:focus, a:focus').length)
    return true
  
  if (!Pages.stage.selection.exists())
    return true
    
  if (e.clipboardData) {
    e.preventDefault()
    e.clipboardData.setData(
        'text/xcustom', Pages.stage.selection.toSpace().toString())

    var setStatus = e.clipboardData.setData(
        'text/plain', Pages.stage.selection.toSpace().toString())
    console.log('setData: ' + setStatus)
  }
  if (window.clipboardData) {
    e.returnValue = false
    var setStatus = window.clipboardData.setData(
      'Text', Pages.stage.selection.toSpace().toString())
    console.log('setData: ' + setStatus)
  }
  Pages.stage.selection.delete()
  Pages.stage.commit()
  mixpanel.track('I cut something')
}

/**
 * Allows you to drag and drop files from finder onto the page.
 * Only supports 1 file at a time for now. And chrome. Very limited.
 */
Pages.ondrop = function(e) {
  mixpanel.track('I dropped a file onto the page')
  var reader = new FileReader()
  reader.onload = function(evt) {
    var space = new Space(
      "tag img\n" +
      "src " + evt.target.result +
      "\nstyle" +
      "\n width auto" +
      "\n height auto")
    var scraps = new Space().set('scrap1', space)
    Pages.stage.insert(scraps)
  }
  reader.readAsDataURL(e.dataTransfer.files[0])
  e.preventDefault()
}

Pages.stopPropagation = function(event) {
  if (event.originalEvent.touches.length > 1) {
    event.stopPropagation()
  }
}

Pages.preventDefault = function(event) {
  if (event.originalEvent.touches.length == 1) {
    event.preventDefault()
  }
}

/**
 * Start editing text when maker enters a character key.
 *
 * @param {object} keydown event.
 * @return {bool} Allow propagation unless we start editing.
 */
Pages.onkeydown = function (event) {
  // if maker is typing in a div or input already dont do anything
  if ($('input:focus, div:focus, textarea:focus, a:focus').length != 0)
    return true
  // allow control key combos to pass through
  if (event.ctrlKey || event.metaKey || event.shiftKey)
    return true
  // if a f key or something dont return.
  if ((event.keyCode < 48 && event.keyCode != 32) || event.keyCode > 90)
    return true
  // if no subject return
  if (!$('.selection').length)
    return true
  // if an input or something return true
  if ($('.selection').is("input") || $('.selection').is("textarea"))
    return true
  // trigger edit event on the scrap
  $('.selection').scrap().edit()
}

Pages.onresize = function () {
  // Update all handles on resize
  $('.handle').trigger('update')
}

/**
 * Renames the currently open page.
 *
 * @param {string} New name
 * @return {string} todo: why return a string?
 */
Pages.renamePage = function (newName) {
  
  mixpanel.track('I renamed a page')
  
  newName = Permalink(newName)
  var oldName = Pages.stage.activePage
  
  if (!newName.length)
    return Flasher.error('Name cannot be blank')
  
  if (oldName == 'home')
    return Flasher.error('You cannot rename the home page.')
  
  // page already exists
  if (Project.get('pages ' + newName))
    return Flasher.error('A page named ' + newName + ' already exists.')  

  Project.rename('pages ' + oldName, 'pages ' + newName)
  Project.rename('timelines ' + oldName, 'timelines ' + newName)
  
  Pages.stage.open(newName)
  
  mixpanel.track('I renamed a page')
  
  return ''

}

Pages.renamePrompt = function () {
  var name = prompt('Enter a new name', Pages.stage.activePage)
  if (name)
    Pages.renamePage(name)
}

/**
 * Launches the spotlight page picker
 */
Pages.spotlight = function () {
  
  var name = prompt('Enter the name of the page to open...', '')
  if (name)
    Pages.stage.open(name)
}


