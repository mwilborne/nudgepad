Redirect
========

A tool to redirect URL requests from 1 url to another.

Useful for if you have to change a URL, but want to ensure that you don't break someone else's links to your current url.

This can be very important for SEO.

This client tool depends on 1 server side package called redirects.js.

It works by reading and writing a space file to nudgepad/redirects.space

That file stores all the redirects in a simple manner:

```
/current /new.html
```

You can also do absolute redirects:

```
/current http://newdomain.com/new.html
```


v 0.1 - Done
------------
- Get the basics working

v 0.2
-----
- Add unit tests for the basics
