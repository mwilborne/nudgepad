REPORTER ?= dot

test: test-server

test-server:
	@mocha \
		--reporter $(REPORTER) \
		server/tests

cloc:
	~/cloc client/apps client/build.js client/core client/public install/ server/ system/ client/public/js/space.js client/public/js/Lasso.js client/public/js/scraps.js client/public/js/events.js
#test-client:
#	open client/tests/main.dev.html

#test-client-min:
#	open client/tests/main.html

test-system:
	@node system/tests/test.js

.PHONY: test-server test-system