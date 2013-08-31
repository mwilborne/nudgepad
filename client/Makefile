all:
	node build.js prod
	cp production/nudgepad.min.js production/nudgepad.temp.js
	java -jar /nudgepad/compiler/compiler.jar --js=production/nudgepad.temp.js --js_output_file=production/nudgepad.min.js --language_in=ECMASCRIPT5
	rm production/nudgepad.temp.js

# Before you start developing, untrack generated files
untrack:
	git update-index --assume-unchanged production/nudgepad.dev.html
	git update-index --assume-unchanged production/nudgepad.min.html
	git update-index --assume-unchanged production/nudgepad.min.css
	git update-index --assume-unchanged production/nudgepad.min.js

# Retrack generated files to deploy
track:
	git update-index --no-assume-unchanged production/nudgepad.dev.html
	git update-index --no-assume-unchanged production/nudgepad.min.html
	git update-index --no-assume-unchanged production/nudgepad.min.css
	git update-index --no-assume-unchanged production/nudgepad.min.js

ace:
	cp -R ~/ace-builds/src-noconflict public/js/ace

space:
	cp ~/space/space.js public/js/space.js
	cp ~/space/space.min.js public/js/space.min.js

expressfs:
	cp ~/expressfs/expressfs.browser.js /nudgepad/nudgepad/client/public/js/expressfs.browser.js

events:
	cp ~/events/events.js public/js/events.js
	cp ~/events/events.min.js public/js/events.min.js

scraps:
	cp ~/scraps/scraps.js public/js/scraps.js
	cp ~/scraps/scraps.min.js public/js/scraps.min.js

htmltoscraps:
	cp ~/htmltoscraps/jquery.htmltoscraps.js public/js/jquery.htmltoscraps.js

csstospace:
	cp ~/csstospace/csstospace.js public/js/csstospace.js

mate:
	mate build.js core Makefile tools