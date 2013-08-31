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

Blog.set('description', 'Add a blog to your project.')
Blog.set('posts', new Space())

Blog.active = {}

Blog.active.filename = null

Blog.active.advanced = function () {
  var post = Blog.get('posts ' + Blog.active.filename)
  TextPrompt.open('Advanced', post.toString(), function (value) {
    post.patch(value)
    post.save()
    Blog.active.open(Blog.active.filename)
  })
}

Blog.active.close = function () {
  Blog.active.filename = null
  $('#BlogEditorColumn').hide()
}

Blog.active.delete = function () {
  var filename =  Blog.active.filename
  Blog.active.close()
  var post = Blog.get('posts ' + filename).trash()
  Blog.trigger('posts')
}

Blog.active.highlight = function (filename) {
  $('.BlogActivePost').removeClass('BlogActivePost')
  $('#BlogPosts div').each(function (){
    if ($(this).attr('filename') === filename)
      $(this).addClass('BlogActivePost')
  })
}

Blog.active.open = function (filename) {
  Blog.active.filename = filename
  var post = Blog.get('posts ' + filename)
  $('#BlogTitle').val(post.get('title'))
  $('#BlogContent').val(post.get('content'))
  $('#BlogEditorColumn').show()
  Blog.active.highlight(filename)
  $('#BlogTitle').focus()
  document.execCommand('selectAll',false,null)
}

Blog.active.publish = function () {
  var filename = Blog.active.filename
  var post = Blog.get('posts ' + filename)
  var path = 'private/posts/' + filename
  
  // Autogenerate a permalink
  // todo: cover exceptions like if file already exists
  if (!post.get('permalink')) {
    var title = $('#BlogTitle').val()
    var permalink = Blog.permalink(title)
    post.set('permalink', permalink)
  }
  else {
    var permalink = post.get('permalink')
  }
  // todo: if the title has changed since last publish, may want
  // to ask user if they'd like to update the permalink
  
  var templateName = $('#BlogTemplate').val()
  var html
  if (Project.get('pages ' + templateName))
    html = Project.get('pages ' + templateName)
  else
    html = $('#BlogDefaultTemplate').text()
  var pressedHtml = Blog.press(post.toString(), html.toString())
  expressfs.writeFileAndOpen(permalink, pressedHtml, 'published')
}

Blog.active.save = function () {
  var filename =  Blog.active.filename
  var post = Blog.get('posts ' + filename)
  post.set('title', $('#BlogTitle').val())
  post.set('content', $('#BlogContent').val())
  post.save()
  Blog.trigger('posts')
}

Blog.active.updateTitle = function () {
  $('.BlogActivePost').text($('#BlogTitle').val())
}

Blog.create = function () {
  // todo: remove this line, make writeFile mkdirs that it needs to
  expressfs.mkdir('private/posts')
  var timestamp = new Date().getTime()
  var filename = timestamp + '.space'
  var post = new Blog.Post(filename)
  post.set('timestamp', timestamp)
  post.set('title', 'Untitled')
  post.save()
  Blog.set('posts ' + filename, post, 0)
  Blog.trigger('posts')
  Blog.active.open(filename)
}

Blog.permalink = function (string) {
  if (!string)
    return ''
  return string.toLowerCase().replace(/[^a-z0-9- _\.]/gi, '').replace(/ /g, '-') + '.html'
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

Blog.downloadPosts = function () {
  Explorer.folderToSpace('private/posts', function (data) {
    var space = new Space(data)
    space.keys = space.keys.sort(function (a, b) {
      return b > a
    })
    space.each(function (filename, value) {
      Blog.set('posts ' + filename, new Blog.Post(filename, value))
    })
    Blog.trigger('posts')
  })
}

Blog.listPosts = function () {
  var posts = Blog.get('posts')
  $('#BlogPosts').html('')
  posts.each(function (filename, value) {
    var link = $('<div></div>')
    link.html(value.get('title'))
    link.on('click', function () {
      Blog.active.open(filename)
    })
    link.attr('filename', filename)
    $('#BlogPosts').append(link)
  })
  Blog.active.highlight(Blog.active.filename)
}

Blog.on('open', Blog.downloadPosts)
Blog.on('posts', Blog.listPosts)

Blog.Post = function (filename, patch) {
  this.clear()
  this._filename = filename
  if (patch)
    this.patch(patch)
  return this
}

Blog.Post.prototype = new Space()

Blog.Post.prototype.save = function () {
  var path = 'private/posts/' + this._filename
  expressfs.writeFile(path, this.toString(), function () {
    Alerts.success('Saved')
  })
}

Blog.Post.prototype.trash = function () {
  var path = 'private/posts/' + this._filename
  expressfs.unlink(path, function () {
    Alerts.success('Deleted')
  })
  Blog.delete('posts ' + this._filename)
}


