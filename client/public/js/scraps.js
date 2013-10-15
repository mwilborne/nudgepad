// If Node.js, import dependencies.
if (typeof exports !== 'undefined')
  var Space = require('space')

var Scraps = {}
Scraps.version = '0.8.2'

// Words that appear in both: title style
Scraps.tags = {}
Scraps.tagsArray = 'a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup command datalist dd del details dfn div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strong sub summary sup table tbody td tfoot th thead tr track u ul var video wbr'.split(/ /g)
Scraps.tagsArray.forEach(function (tag, i) {
  Scraps.tags[tag] = true
})

Scraps.voidTags = {
 "area": true,
 "base": true,
 "br": true,
 "col": true,
 "embed": true,
 "hr": true,
 "img": true,
 "input": true,
 "keygen": true,
 "link": true,
 "menuitem": true,
 "meta": true,
 "param": true,
 "source": true,
 "track": true,
 "wbr": true
}

Scraps.isTag = function (tag, value) {
  if (Scraps.tags[tag])
    return true
  if (value instanceof Space && value.get('tag') === tag)
    return true
  return false
}

/**
 * Turns a style object like color red into css like .scrap { color : red; }
 * Also evals any variables.
 *
 * @param {string} DOM selector. .class #id etc.
 * @param {object} Name/values of css
 * @param {object} Context to evaluate any variables in
 * @return {string} 
 */
Scraps.styleToCss = function (selector, obj) {
  var string = selector + ' {\n'
  for (var cssProperty in obj) {
    if (!obj.hasOwnProperty(cssProperty))
      continue
    // Add colon and semicolon back on
    string += '  ' + cssProperty + ' : ' + obj[cssProperty].toString().replace(/\;$/, '') + ';\n'
  }
  string += '}\n'
  return string
}

/**
 * Turns a style object like color red into color: red;
 * Also evals any variables.
 *
 * @param {object} Name/values of css
 * @param {object} Context to evaluate any variables in
 * @return {string} 
 */
Scraps.styleToInline = function (obj) {
  var string = ''
  for (var cssProperty in obj) {
    if (!obj.hasOwnProperty(cssProperty))
      continue
    // Add colon and semicolon back on
    string += cssProperty + ': ' + obj[cssProperty].toString().replace(/\;$/, '') + '; '
  }
  return string
}

;(function () {
  
  

function Element (tag, attrs) {
  this.tag = tag
  this.attrs = attrs || {}
  this.content = ''
  return this
}

Element.prototype.addClass = function (className) {
  if (this.attrs['class'])
    this.attrs['class'] += ' ' + className
  else
    this.attrs['class'] = className
}

Element.prototype.append = function (string) {
  this.content += string
}

Element.prototype.attr = function (key, value) {
  this.attrs[key] = value
}

Element.prototype.html = function (string) {
  this.content += string
}

Element.prototype.toHtml = function () {
  if (this.draft)
    return ''
  var string = '<' + this.tag

  for (var i in this.attrs) {
    if (!this.attrs.hasOwnProperty(i))
      continue
    string += ' ' + i + '="' + this.attrs[i] + '"' 
  }
  
  if (Scraps.voidTags[this.tag]) {
    
    // Void tags
    if (this.content)
      string += ' content="' + this.content + '"'

    return string + ' />'
    
  }
  
  else {
    string += '>' + this.content
    string += '</' + this.tag + '>'
    return string
  }

}

/**
 * Scrap constructor
 * 
 * @param {string}
 * @param {Space}
 */
function Scrap (tag, space, content, index) {
  this.tag = tag.replace(/(\.|\#).+$/)
  this.clear()
  this.reload(space)
  this.index = index
  if (content)
    this.set('content', content)
  // load content?
  this.loadChildren()
  return this
}

// Scrap extends Space.
Scrap.prototype = new Space()

/**
 * @return {Scrap}
 */
Scrap.prototype.clone = function (id) {
  return new Scrap(id, this)
}

Scrap.prototype.loadChildren = function () {
  var parent = this
  this.each(function (key, scrap, i){
    var index = (this.index ? this.index + ' ' : '') + i.toString()
    if (!Scraps.isTag(key, scrap))
      return true
    if (scrap instanceof Space)
      parent.update(i, key, new Scrap(key, scrap, null, index))
    else
      parent.update(i, key, new Scrap(key, '', scrap, index))
  })
}

Scrap.prototype.setChildren = function (filter) {
  var parent = this
  this.each(function (key, scrap) {
    if (Scraps.isTag(key, scrap))
      parent.div.html(scrap.toHtml(filter))
  })
  return this
}

/**
 * Set the innerHTML.
 *
 * @param {object} Context to evaluate any variables in.
 */
Scrap.prototype.setContent = function () {

  // If leaf node
  if (this.get('content'))
    this.div.html(this.get('content'))

  // If styles node
  var styles = this.get('styles')
  if (styles && styles instanceof Space) {
    var div = this.div
    styles.each(function (key, value) {
      div.html(Scraps.styleToCss(key, value.toObject()))
    })
  }
  return this
}

/**
 * Return all javascript necessary for scraps operation
 *
 * todo: refacor this
 *
 * @return {string}
 */
Scrap.prototype.setHandlers = function () {

  this.each(function (event, value) {
    // Events all follow onclick onfocus on*
    if (!event.match(/^on.*$/))
      return true
    this.div.attr(event, value)
  })
}

Scrap.prototype.setProperties = function (name) {
  this.each(function (property, value) {
    // Skip certain properties
    if (property.match(/^(content|on.*|style)$/))
      return true
    if (Scraps.isTag(property, value))
      return true
    this.setProperty(property)
  })
}

/**
 * Set the standard HTML properties like value, title, et cetera.
 *
 * @param {string} Name of the property to set
 * @param {object} Context to evaluate the variables in.
 */
Scrap.prototype.setProperty = function (name) {
  if (this.get(name))
    this.div.attr(name, this.get(name))
}

/**
 * Return all css for a scrap.
 *
 * @param {object} Context to evaluate any variables in.
 * @return {string}
 */
Scrap.prototype.setStyle = function () {
  if (!this.get('style'))
    return null
  if (Scraps.isTag('style', this.get('style')))
    return null
  if (!(this.get('style') instanceof Space))
    return this.div.attr('style', this.get('style'))
  this.div.attr('style', Scraps.styleToInline(this.get('style').toObject()))
}

/**
 * Returns the HTML for a scrap without CSS or Script.
 *
 * @param {object} Context to evaluate any variables in.
 * @return {string}
 */
Scrap.prototype.toHtml = function (filter) {
  this.div = new Element(this.tag)
  this.setProperties()
  this.setContent()
  this.setChildren(filter)
  this.setStyle()
  this.setHandlers()
  if (filter)
    filter.call(this)
  return this.div.toHtml()
}

/**
 * Constructor.
 *
 * @param {Space} Any values to load from.
 */
function Page (space) {

  this.clear()
  this.reload(space)
  this.loadScraps()
  return this
}

// Page inherits from Space
Page.prototype = new Space()

/**
 * Does a deep copy
 *
 * @return {Page}
 */
Page.prototype.clone = function () {
  return new Page(this.toObject())
}

/**
 * Converts any scraps from Space to class of Scrap.
 */
Page.prototype.loadScraps = function () {
  // load all scraps
  var page = this
  this.each(function (key, value, i) {
    if (value instanceof Space)
      page.update(i, key, new Scrap(key, value, null, i.toString()))
    else
      page.update(i, key, new Scrap(key, null, value, i.toString()))
  })
}


/**
 * Get the full HTML of the page.
 *
 * @param {object} Context to evaluate variables in.
 * @return {string}
 */
Page.prototype.toHtml = function (options) {

  // todo: separate css option
  // todo: separate javascript option
  options = options || {}
  var html = ''
  if (options.wrap)
    html += '<!doctype html>\n<html>'

  // Get all the html for every scrap
  // Todo: support after property
  this.each(function (key, scrap) {
    html += '\n  ' + scrap.toHtml(options.filter)
  })
  
  if (options.wrap)
    html += '\n</html>\n'
  return html
}

Page.prototype.toConciseString = function (spaces) {
  var clone = new Space(this.toString())
  clone.every(function (key, value, index) {
    if (value instanceof Space && value.length() === 1 && value.get('content'))
      this.update(index, key, value.get('content'))
  })
  return clone.toString()
}

Scraps.Element = Element
Scraps.Scrap = Scrap
Scraps.Page = Page
  
}())
// If Node.js, export as a module.
if (typeof exports !== 'undefined')
  module.exports = Scraps;

