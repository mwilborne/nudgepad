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
Blog.activePost = null
Blog.set('posts', '')

Blog.deletePostPrompt = function () {
  Blog.activePost = null
  var name = Blog.permalink($('#BlogPermalink').attr('value'))
  if (!name)
    return Alerts.error('No post to delete')
  
  fs.unlink('private/posts/' + name + '.space')
}

Blog.editPost = function (name) {
  Blog.activePost = name
  var post = Blog.get('posts ' + name)
  $('#BlogContent').val(post.get('content'))
  $('#BlogTitle').val(post.get('title'))
  var postSettings = new Space(post.toString())
  postSettings.delete('title')
  postSettings.delete('content')
  $('#BlogAdvanced').val(postSettings.toString())
  $('#BlogPermalink').text('http://' + document.location.host + '/' + name).attr('value', name)
  $('#BlogPosts div').css('color', '#777')
  // todo: improve this
  $('#BlogPosts div').each(function () {
    if ($(this).attr('value') == Blog.activePost)
      $(this).css('color', '#333')  
  })
  $('#BlogContent').focus()
}

Blog.downloadPosts = function () {
  Explorer.folderToSpace('private/posts', function (data) {
    var posts = new Space(data)
    posts.each(function (filename, value) {
      console.log(filename)
      Blog.set('posts ' + filename, new Space(value))
      
    })
    Blog.renderList(Blog.get('posts').toString())
  })
}

Blog.install = function () {
  // don't do this if it exists?
  fs.mkdir('private/posts')
}

/**
 * Make a string URL friendly. Turns "$foo Bar%!@$" into "foo-bar"
 *
 * @param {string}
 * @return {object}
 */
Blog.permalink = function (string) {
  if (!string) return ''
  // strip non alphanumeric characters from string and lowercase it.
  return string.toLowerCase().replace(/[^a-z0-9- _\.]/gi, '').replace(/ /g, '-')
}

/**
 * requires moment and html_beautify
 */
Blog.pressPost = function (postString, pageString) {
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

Blog.publishPost = function (nameString, postString) {
  // Open post in new tab
  var post = new Space(postString)
  var permalink = Blog.permalink(nameString)
  var templateString = post.get('template')
  var view = Project.get('pages ' + templateString)
  if (!view)
    view = new Space($('#BlogTheme').text())
  
  var pressedHtml = Blog.pressPost(post.toString(), view.toString())
  fs.writeFile(permalink + '.html', pressedHtml, function () {
    window.open(name + '.html', 'published')
  })
}

// Temporary routine for migration
Blog.publishAll = function () {
  Explorer.folderToSpace('private/posts', function (data) {
    var posts = new Space(data)
    posts.each(function (filename, post) {
      post = new Space(post.toString())
      var permalink = Blog.permalink(post.get('title'))
      var template = post.get('template')
      var view = Project.get('pages ' + template)
      if (!view)
        view = new Space($('#BlogTheme').text())
      var pressedHtml = Blog.pressPost(post.toString(), view.toString())
      fs.writeFile(permalink + '.html', pressedHtml, function () {
        Alerts.success('published ' + permalink)
      })
    })
  })
}

Blog.renderList = function (postsString) {
  $('#BlogPosts').html('')
  var posts = new Space(postsString)
  var list = new Space()
  list.set('list', new Space())
  posts.each(function (filename, post) {
    post = new Space(post.toString())
    var permalink = Blog.permalink(post.get('title'))
    var link = $('<a>' + post.get('title') + '</a>')
    link.attr('value', filename)
    $('#BlogPosts').append(link)
    link.on('click', function () {
      Blog.editPost($(this).attr('value')) 
    })
  })
}

Blog.resetForm = function () {
  $('#BlogContent,#BlogTitle').val('')
  $('#BlogAdvanced').val('timestamp ' + new Date().getTime() + '\ntemplate blogPostTemplate')
  $('#BlogPermalink').attr('value', '')
  $('#BlogTitle').focus()
  Blog.activePost = null
}

// Save it to private/posts/post-name.space
Blog.savePost = function () {

  var name = Blog.permalink($('#BlogPermalink').attr('value'))
  
  if (!name)
    return Alerts.error('Title cannot be blank')

  mixpanel.track('I saved a blog post')
  var post = new Space()

  post.set('content', $('#BlogContent').val())
  post.set('title', $('#BlogTitle').val())
  post.patch($('#BlogAdvanced').val())
  
  fs.writeFile('private/posts/' + name + '.space', post.toString(), function () {
    Alerts.success('Post saved')
  })
  
  Blog.activePost = name
  
}

Blog.updatePermalink = function () {
  var permalink = Blog.permalink($('#BlogTitle').val())
  $('#BlogPermalink').text('http://' + document.location.host + '/' + permalink + '.html').attr('value', permalink)
}

Blog.on('close', function () {

})

Blog.on('once', function () {
  Blog.downloadPosts()
})

Blog.on('open', function () {
  
  Blog.install()
  if (Blog.get('posts'))
    Blog.renderList(Blog.get('posts'))
})


