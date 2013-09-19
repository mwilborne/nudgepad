How to Contribute to NudgePad 1.0 core
======================================

__CAUTION: NudgePad 1.0 comes out later this year, right now we are in BETA, so things are still broken and subject to change. In other words, we always are on the lookout for talented developers to help us on the core of NudgePad!__

Overview of the Codebase
------------------------

client
------

This code contains all of the front end code of the NudgePad user interface.

It also contains all the Community Tools.

client/
client/build.js - The build script that compiles core and all Community Tools into 1 html, css, and
javascript file.
client/core - A tiny bit of core code that provides some basics to the Community Tools
client/tools - This is where all the action is. These Community Tools are apps that make it easy for team members
to work on their projects.
client/public - Some additional pages, external libraries, and some css and images used by core.
client/production - Contains compiled nudgepad files. These are auto generated.
client/Makefile - some convenience commands for working on the client.

server
------

Each NudgePad Project is a website--specifically an Express app running as its own process.

The API here is still being simplified a bit, but the basic pattern is to create a module that
extends the user's project like this:

    function MyModuleName (app) {
      app.get('/helloWorld', function (req, res, next) {
        // do something
      })
    }
    module.exports = MyModuleName

Any file in a Project's packages folder is expected to follow that convention and will
be included when the project starts like this:

    require('./mymodulename.js')(app)

system
------

The code in system is responsible for creating new projects on the machine, load
balancing, proxying requests to projects, and offering tools to sysadmins for
managing a NudgePad server.

It's currently written mostly in BASH, but node scripts are welcome as well.

A fully running NudgePad server consists of:

- A control panel Express app running on port 4004
- user projects which run on ports 4005 - 9000
- An http-proxy app which sits in front of all of those on port 80.

Those ports are also configurable.

Overview of data storage
------------------------

All user data is stored in /nudgepad/

NudgePad does not use a database. Our thoughts are a database is premature optimization for
almost all projects. There are orders of magnitude more tools and ways to work with files
in the file system than on databases. This design decision makes it easy for projects to be
a git repo, to be moved from one server to another, to be modified not only by NudgePad
but by other tools, etc.

We write user data at the root level as opposed to some nested library on your machine because we
believe it greatly simplifies sysadmin and debugging.

The folders in /nudgepad are:

- /nudgepad/active Contains simple text files where filename is the domain and content is the port. As projects start and stop, files are created and removed.
- /nudgepad/backup Contains a backup copy of /nudgepad/projects that eschews some operational data for faster backups.
- /nudgepad/logs Contains log files for the panel server and proxy server (not individual projects!).
- /nudgepad/panel Allows you to skin the NudgePad panel look and feel.
- /nudgepad/ports Contains simple text files where filename is the port and content is the domain. As projects start and stop, files are created and removed.
- /nudgepad/projects Contains all the data for every project.
- /nudgepad/temp Contains temp files for panel and proxy.

The data for a project "foo.com" is stored in /nudgepad/projects/foo.com/ and is all served publicly by Express.

So a file /nudgepad/projects/foo.com/foo.html would be available at foo.com/foo.html

There is also a nudgepad folder where all NudgePad conventions are stored and that looks like this:

- packages/ Contains Node.js packages to include onstart. Each package extends the app object. So your package should export one function which takes an express app object as a param and extends it.
- team/ Stores user records. Each user is a file encoded in Space.

