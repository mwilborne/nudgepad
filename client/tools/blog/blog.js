/*
var Space = require('space'),
    moment = require('moment'),
    html_beautify = require('html_beautify'),
    Tool = require('tool),
    fs = require('fs),
    Alerts = require('Alerts'),
    Project = require('Project'), // required for pages
    Explorer = require('Explorer'),
    Test = require('Test'),
    $ = require('jQuery')
*/

var Blog = new Tool('Blog')
Blog.set('color', 'rgba(224, 54, 52, 1)')
Blog.set('description', 'Add a blog to your project.')
Blog.set('beta', 'true')
Blog.set('posts', new Space())

Blog.active = {}

Blog.active.id = null

Blog.active.close = function () {
  Blog.active.id = null
  $('#BlogEditorColumn').hide()
}

Blog.active.delete = function () {
  var id =  Blog.active.id
  Blog.active.close()
  var post = Blog.get('posts ' + id).trash()
}

Blog.active.open = function (id) {
  Blog.active.id = id
  var post = Blog.get('posts ' + id)
  $('#BlogTitle').val(post.get('title'))
  $('#BlogContent').val(post.get('content'))
  $('#BlogEditorColumn').show()
  $('#BlogTitle').focus()
  document.execCommand('selectAll',false,null)
}

Blog.active.publish = function () {
  var id = Blog.active.id
  var post = Blog.get('posts ' + id)
  var path = 'private/posts/' + id + '.space'
  var permalink = Blog.permalink(post.get('title')) + '.html'
  var templateName = $('#BlogTemplate').val()
  var html
  if (Project.get('pages ' + templateName))
    html = Project.get('pages ' + templateName)
  else
    html = $('#BlogDefaultTemplate')
  var pressedHtml = Blog.press(post.toString(), html.toString())
  fs.writeFile(permalink, pressedHtml, function () {
    window.open(permalink, 'published')
  })
}

Blog.active.save = function () {
  var id =  Blog.active.id
  var post = Blog.get('posts ' + id)
  post.set('title', $('#BlogTitle').val())
  post.set('content', $('#BlogContent').val())
  post.save()
}

Blog.create = function () {
  // todo: remove this line, make writeFile mkdirs that it needs to
  fs.mkdir('private/posts')
  var id = new Date().getTime()
  var post = new Blog.Post()
  post.set('id', id)
  post.set('title', 'Untitled')
  post.save()
  Blog.set('posts ' + id, post)
  Blog.active.open(id)
}

Blog.permalink = function (string) {
  if (!string)
    return ''
  return string.toLowerCase().replace(/[^a-z0-9- _\.]/gi, '').replace(/ /g, '-')
}

/**
 * requires moment and html_beautify
 */
Blog.press = function (postString, pageString) {
  var post = new Space(postString)
  var htmlString = new Page(pageString).toHtml(function () {
    this.div.content = this.div.content.replace('Blog Post Content', post.get('content'))
    if (this.get('content_format') === 'markdown')
      this.div.content = marked(this.div.content)
    return this.div.toHtml()
  })
  htmlString = htmlString.replace(/Blog Post Title/g, post.get('title'))
  var timestamp = parseFloat(post.get('timestamp'))
  var date = moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
  htmlString = htmlString.replace(/Blog Post Date/g, date)
  htmlString = html_beautify(htmlString)
  return htmlString
}

Blog.Post = function (space) {
  this.clear()
  if (space)
    this.patch(space)
  return this
}

Blog.Post.prototype = new Space()

Blog.Post.prototype.save = function () {
  var path = 'private/posts/' + this.get('id') + '.space'
  fs.writeFile(path, this.toString(), function () {
    Alerts.success('Saved')
  })
}

Blog.Post.prototype.trash = function () {
  var path = 'private/posts/' + this.get('id') + '.space'
  fs.unlink(path, function () {
    Alerts.success('Deleted')
  })
}


