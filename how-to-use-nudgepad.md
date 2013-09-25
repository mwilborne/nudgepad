How to Build Your Project with NudgePad 1.0
===========================================

1. Go to your NudgePad server (or the demo server at http://www.nudgepad.com)
2. Enter a name for your project
3. Click "Make"

Your project is now live on the web.

There are two ways to build your project:

1. Use the NudgePad Tools.

2. Ignore the NudgePad Tools and just use simple HTML, CSS, Javascript, images, et cetera.

There is no wrong way to build your project. Sometimes you may want to use the NudgePad Tools,
sometimes you may want to just use NudgePad as a simple web server to serve static files.

#### Method 1 - Using NudgePad Tools.

Each NudgePad project contains a Home Tool which shows you the various Tools you can use to build your project.

For example, you might use the Templates Tool to import a design for your site, and the Pages Tool to edit content of the pages.

#### Method 2 - Using NudgePad as a simple web server

Under the hood, NudgePad projects are simply a folder with simple files in it. Although the Tools give you easy methods of modifying those files, you are always free to edit and modify those folders and files directly.

Each project is a single directory on the server like this:

yourprojectname.nudgepad.com/

If you upload a file like "index.html" to this folder, then http://yourprojectname.nudgepad.com/index.html will be the homepage of your project.

That folder called "nudgepad/" in your project directory, contains all the NudgePad specific data if you
are using the NudgePad tools to build your project. However, you are free to completely ignore this folder and just use NudgePad as a simple web server.
