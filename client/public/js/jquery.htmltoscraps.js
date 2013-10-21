// https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
/*
 * DOMParser HTML extension
 * 2012-09-04
 * 
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
	"use strict";

	var
	  DOMParser_proto = DOMParser.prototype
	, real_parseFromString = DOMParser_proto.parseFromString
	;

	// Firefox/Opera/IE throw errors on unsupported types
	try {
		// WebKit returns null on unsupported types
		if ((new DOMParser).parseFromString("", "text/html")) {
			// text/html parsing is natively supported
			return;
		}
	} catch (ex) {}

	DOMParser_proto.parseFromString = function(markup, type) {
		if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
			var
			  doc = document.implementation.createHTMLDocument("")
			;
	      		if (markup.toLowerCase().indexOf('<!doctype') > -1) {
        			doc.documentElement.innerHTML = markup;
      			}
      			else {
        			doc.body.innerHTML = markup;
      			}
			return doc;
		} else {
			return real_parseFromString.apply(this, arguments);
		}
	};
}(DOMParser));

$.htmlTags = {}
'a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup command datalist dd del details dfn div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strong sub summary sup table tbody td tfoot th thead tr track u ul var video wbr'.split(/ /g).forEach(function (tag, i) {
  $.htmlTags[tag] = true
})

$.inlineStyleToSpace = function (style) {
  var rules = style.split(';')
  var space = new Space()
  rules.forEach(function (value, index) {
    value = value.trim()
    if (!value)
      return true
    var parts = value.split(/\:/)
    if (parts.length < 2)
      return true
    space.set(parts[0].trim(), parts[1].trim())
  })
  return space
}

$.fn.toSpace = function () {
  var space = new Space()
  var el = $(this)
  var tag = $(this).get(0).tagName.toLowerCase()
  $($(this).get(0).attributes).each(function() {
    if (this.nodeName === 'style')
      space.set(this.nodeName, $.inlineStyleToSpace(this.nodeValue))
    else
      space.set(this.nodeName, this.nodeValue)
  })
  if (!$.htmlTags[tag])
    space.set('tag', tag)
  
  // if leaf node
  if (!$(this).children().length) {
    
    // Meta is a special case. :(
    if (tag !== 'meta')
      space.set('content', $(this).html())
    else if ($(this).attr('content'))
      space.set('content', $(this).attr('content'))
  
  }
  else if ($(this).contents().length > 1) {
    // wrap text nodes in spans
    $(this).contents().each(function () {
      if (this.nodeType === 3) {
        if ($(this).text().trim().length)
          space.append('span', new Space('content ' + $(this).text()))
      } else if (this.nodeType === 1) {
        tag = this.tagName.toLowerCase()
        space.append(tag, $(this).toSpace())
      }
    })
  }
  else {
    $(this).children().each(function () {
      tag = $(this).get(0).tagName.toLowerCase()
      space.append(tag, $(this).toSpace())
    })
  }
  // Return concise mode
  if (space.length() === 1 && space.get('content'))
    return space.get('content')
  return space
}

$.htmlToScraps = function (html) {
  
  var doc = new DOMParser().parseFromString(html, "text/html")
  var space = new Space()
  
  if (!html)
    return space
  
  $('html', doc).children().each(function () {
    // Skip whitespace
    if (!$(this).get(0).tagName)
      return true
    var tag = $(this).get(0).tagName.toLowerCase()
    // Skip br tags
//    if (tag === 'br')
//      return true
    var scrap = $(this).toSpace()
    space.append(tag, scrap)
  })
//  iframe.remove()

// does html contain <head>?
// does html contain <body>?

//
  var hasHead = html.match(/\<head/)
  var hasBody = html.match(/\<body/)

  // If it has a head but no body, just read head
  if (hasHead && !hasBody)
    return space.delete('body')
  
  // If it has a head AND body, return both
  if (hasHead && html.match(/\<body/))
    return space

  // if it has no head, and no body, return body children
  if (!hasHead && !hasBody) {
    space.delete('head')
    return space.get('body')
  }
  
  // if it has no head, and just a body, just return body
  if (!hasHead && hasBody)
    return space.delete('head')

  return space
}
