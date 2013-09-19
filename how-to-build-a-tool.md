How to Build a Community Tool for NudgePad 1.0
==============================================

__CAUTION: NudgePad 1.0 comes out later this year, right now we are in BETA, so things are still broken and subject to change. However, we are here to help you build your tool, so don't be shy about contacting us via email or IRC.__

How can I help?
---------------

The core idea of NudgePad is the concept of Community Tools.

These are open source web apps built by the NudgePad Community to enable people to make things
in their browser.

Unlike apps built for consuming content, NudgePad Community Tools are built
for making content. You could build a blogging tool, a drawing tool, an
image editing tool, a vector tool, or something completely new.

Once your tool is working and useful, you can submit it to the core
of NudgePad as a pull request. You could go from idea to tool to having
your pull request accepted and deployed to all NudgePad servers in less
than 24 hours. There is no "Tool Store" in NudgePad. The entire NudgePad community
has access to all Community Tools that are accepted into core at all times.

Creating a Community Tool
-------------------------

To go from "Idea" to "wow my tool is available to all NudgePad Projects", the workflow looks like this:

1. Fork NudgePad & clone to localhost
2. Create the folder and required files for your tool
3. Edit, test and refine your tool.
4. Commit and push to your fork then submit a pull request

Before creating a tool, you may want to have our contact info handy if you run into any problems:

Email: breck@nudgepad.com
Phone: 1-415-937-1984


#### Installing on Localhost

[Installation instructions.](how-to-install-nudgepad.md)

#### Naming Your Community Tool

Getting the name right for your tool is very important. The fastest way to
choose a great name for your tool is to choose a bad name for your tool, and
then build your tool in a way that it is easy to find/replace the name later on.

Your tool name should be: unique and alphabet only. Tools in NudgePad
are always centered around "Making" and not "Consuming", so the name should
convey what the user is going to be doing with that tool.

It's also important to know that your Tool will reserve a single word in the
NudgePad namespace. So if you name your tool "Draw", the variable Draw
will be made a global in the NudgePad client and so it shouldn't interfere with
other community tools or Javascript/DOM reserved words.

There are no ugly closures required here. NudgePad is an open but controlled ecosystem
so we can ensure that there are no namespace conflicts and developers don't have
to create ugly nested hacks to avoid conflicts. Keeping things in core also ensures we can guarantee
to our users a strong, consistent experience, and that there's always one person to blame
if they have a bad experience--Breck!

#### Creating Your Community Tool

Community Tools in NudgePad are meant to be modular and sandboxed and contained in one
folder.

You can create a tool manually by replicating the basic skeleton
like this:

```
tool.js var Draw = new Tool('Draw')
tool.css 
tool.html 
package.space html tool.html
 js tool.js
 css tool.css
 description Draw and edit illustrations for your project.
 icon pen
 author Your name
 email youremail@domain.com
```

Once your tool is created, visit http://localhost and create a new project
to see it in action.

As you make changes to your tool, refresh your browser to see them.

NudgePad has a build system that compiles all tools into
a single page webapp for the user. This keeps NudgePad fast.
While developing, NudgePad will watch the tools folder for changes and will
run the build system each time.


Core Objects Available to Your Community Tool
---------------------------------------------

At this point you have created your tool and can open it in your browser. Now
you can start adding functionality to your tool.

Your tool does not actually have to interact with any core API, and in fact,
probably will only make a few method calls to the core to write and read files.

NudgePad exposes an API that your tool can use to read and write files to the user's
project. You also have access to the latest jQuery($), and some other libraries.

Currently, the NudgePad API consists of 1 core objects:

1. Tool

#### Tool

Each Tool is an instance of the Tool Object.

You create your tool like this:

```
var Draw = new Tool('Draw')
```

Your tool will have a few methods from the Tool prototype including:

```
// Open/Close your tool
Draw.open()
Draw.close()
Draw.restart()
```

Your tool can implement a number of standard handlers including:

```
Draw.on('close', function () {})
```

```
Draw.on('open', function () {})
```

Your tool can define and fire its own events like this:

```
Draw.on('foobar', doSomething)
Draw.trigger('foobar')
Draw.off('foobar', doSomething)
```

Other Objects
-------------

#### Screen

Screen is an instance of Space that contains information about the current tab.

```
// Get device info:
Screen.get('device')
// Get user name:
Screen.get('name')
```

#### Screens

Screens is an instance of Space that is composed of all the Screen instances.


```
// How many screens are currently open across the entire project:
Screens.length()
```

#### Launcher

Open an app

```
Launcher.open('Templates')
```

#### fs

A simple and dumb text editor.

```
// Rename a file
fs.rename('foobar.html', 'foobar2.html', callback)

```

#### TextPrompt

Like the browser's built in prompt method, but gives the user a bigger textarea for writing.

```
TextPrompt.open('Some textarea like thing', 'Default value', 'filename.html', callback)
```

#### Alerts

Growl like notifications

```
Alerts.success('Your action finished')
Alerts.error('Something went wrong')
```

#### mixpanel

Track aggregate user actions to help improve the tools.

```
mixpanel.track('I did something')

// Add additional info to the stats
mixpanel.track({
  'time' : howLongItTookToCreateThisProject
})

// Note: don't add any user data. We don't want someone to be sending their data,
// just usage data so we can improve the core and Community Tools.
//
// For now, to see the data, Breck needs to add you to our MixPanel account--
// just send me an email.
```


Server Side Routes
------------------

Your tool can access some server side routes that provide read and write access
to a maker's project.

#### GET

```
// Logged in user
http://domain/nudgepad.whoami
```

```
// The domain
http://domain/nudgepad.domain
```

```
// Status info
http://domain/nudgepad.status
```

```
// Logs
http://domain/nudgepad.logs
```

```
// Restart the project
http://domain/nudgepad.restart
```

```
// Dump all the Project Data encoded as Space
http://domain/nudgepad.export
```

#### POST

(fill this in)
