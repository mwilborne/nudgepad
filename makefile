REPORTER ?= dot

all:
	node /nudgepad/nudgepad/client/build.js prod
	cp /nudgepad/nudgepad/client/production/nudgepad.min.js /nudgepad/nudgepad/client/production/nudgepad.temp.js
	java -jar /nudgepad/compiler/compiler.jar --js=client/production/nudgepad.temp.js --js_output_file=client/production/nudgepad.min.js --language_in=ECMASCRIPT5
	rm /nudgepad/nudgepad/client/production/nudgepad.temp.js

ace:
	cp -R ~/ace-builds/src-noconflict /nudgepad/nudgepad/client/public/js/ace

cloc:
	~/cloc /nudgepad/nudgepad/client/tools /nudgepad/nudgepad/client/build.js /nudgepad/nudgepad/client/core /nudgepad/nudgepad/client/public/*.html /nudgepad/nudgepad/server/ /nudgepad/nudgepad/system/ /nudgepad/nudgepad/client/public/js/space.js /nudgepad/nudgepad/client/public/js/Lasso.js /nudgepad/nudgepad/client/public/js/scraps.js /nudgepad/nudgepad/client/public/js/events.js --by-file-by-lang
#test-client:
#	open /nudgepad/nudgepad/client/tests/main.dev.html

#test-client-min:
#	open /nudgepad/nudgepad/client/tests/main.html

csstospace:
	cp ~/csstospace/csstospace.js /nudgepad/nudgepad/client/public/js/csstospace.js

csvtospace:
	cp ~/csvtospace/csvtospace.js /nudgepad/nudgepad/client/public/js/csvtospace.js

expressfs:
	cp ~/expressfs/expressfs.browser.js /nudgepad/nudgepad/client/public/js/expressfs.browser.js
	# Todo: make expressfs an npm package
	cp ~/expressfs/expressfs.server.js /nudgepad/nudgepad/server/expressfs.server.js

events:
	cp ~/events/events.js /nudgepad/nudgepad/client/public/js/events.js
	cp ~/events/events.min.js /nudgepad/nudgepad/client/public/js/events.min.js

htmltoscraps:
	cp ~/htmltoscraps/jquery.htmltoscraps.js /nudgepad/nudgepad/client/public/js/jquery.htmltoscraps.js

mate:
	mate build.js core Makefile tools

scraps:
	cp ~/scraps/scraps.js /nudgepad/nudgepad/client/public/js/scraps.js
	cp ~/scraps/scraps.min.js /nudgepad/nudgepad/client/public/js/scraps.min.js

socketfs:
	cp ~/socketfs/socketfs.browser.js /nudgepad/nudgepad/client/public/js/socketfs.browser.js
	# Todo: make socketfs an npm package
	cp ~/socketfs/socketfs.server.js /nudgepad/nudgepad/server/socketfs.server.js

space:
	cp ~/space/space.js /nudgepad/nudgepad/client/public/js/space.js
	cp ~/space/space.min.js /nudgepad/nudgepad/client/public/js/space.min.js

test: test-server

test-server:
	@mocha \
		--reporter $(REPORTER) \
		server/tests

test-system:
	@node system/tests/test.js

# Retrack generated files to deploy
track:
	git update-index --no-assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.dev.html
	git update-index --no-assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.min.html
	git update-index --no-assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.min.css
	git update-index --no-assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.min.js

# Before you start developing, untrack generated files
untrack:
	git update-index --assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.dev.html
	git update-index --assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.min.html
	git update-index --assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.min.css
	git update-index --assume-unchanged /nudgepad/nudgepad/client/production/nudgepad.min.js

.PHONY: test-server test-system
