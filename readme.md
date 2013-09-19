NudgePad BETA
=============

NudgePad is an open source operating system for making websites. NudgePad works in your browser and can be used to make websites, apps, and more.

The Problem
-----------

Hundreds of millions of people and organizations now have websites. These websites are expected to do more and more.

The problem with current web building tools is that they are specialized and only allow you to create very limited sites. What ends up happening is more than half of websites end up being coded from scratch, which is expensive and time consuming.

The Solution
------------

NudgePad solves this problem by providing a general purpose operating system that has tools for any kind of task, can support any future feature, and is built from the start with collaboration in mind.

Try it
------

Try the beta now at http://nudgepad.com

When can I use it?
------------------

NudgePad 1.0 will launch to the general public at some point in late 2013.

If you are a developer, now is a great time to get involved in the NudgePad
community. Your contributions can have a big impact. You also can have
a head start on learning to use NudgePad to build projects faster.

How to Build Your Project with NudgePad 1.0
===========================================

__CAUTION: NudgePad 1.0 comes out later this year, right now we are in BETA, so things are still broken and subject to change. You've been warned!__

1. Go to http://nudgepad.com
2. Enter a name for your project (don't worry you can change this in seconds later!)
3. Click "Make"

Your project is now live on the web!

There are two ways to build your project:

1. Use the NudgePad Community Tools.

2. Ignore the NudgePad Community Tools and just use simple HTML, CSS, Javascript, images, et cetera.

There is no wrong way to build your project. Sometimes you may want to use the NudgePad Community Tools,
sometimes you may want to just use NudgePad as a simple web server to serve static files.


#### Method 1 - Using NudgePad Community Tools.

Each NudgePad project contains a Home Tool which shows you the various Community Tools you can use to build your project.

For example, you might use the Templates Tool to import a design for your site, and the Pages Tool to edit content of the pages.

#### Method 2 - Using NudgePad as a simple web server


Under the hood, NudgePad projects are simply a folder with simple files in it. Although the Community Tools give you easy methods of modifying those files, you are always free to edit and modify those folders and files directly.

Each project is a single directory on the server like this:

yourprojectname.nudgepad.com/

If you upload a file like "index.html" to this folder, then http://yourprojectname.nudgepad.com/index.html will be the homepage of your project.

That folder called "nudgepad/" in your project directory, contains all the NudgePad specific data if you
are using the NudgePad tools to build your project. However, you are free to completely ignore this folder and just use NudgePad as a simple web server.

More Docs
---------

Developers: [How to Build a Community Tool for NudgePad](how-to-build-a-tool.md)
Sysadmins: [How to Host NudgePad](install.md)
Developers: [Overview of the code base](how-to-contribute.md)

Build Status
------------

[![Build Status](https://travis-ci.org/nudgepad/nudgepad.png?branch=master)](https://travis-ci.org/nudgepad/nudgepad)
