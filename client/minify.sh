cp production/nudgepad.min.js production/nudgepad.temp.js
java -jar ~/compiler.jar --js=production/nudgepad.temp.js --js_output_file=production/nudgepad.min.js --language_in=ECMASCRIPT5
rm production/nudgepad.temp.js
# Google Closure compiler breaks our eval so we need to append it after.
cat public/js/compiler_workaround.js >> production/nudgepad.min.js
# todo: minify css
