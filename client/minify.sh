java -jar ~/compiler.jar --js=public/nudgepad.dev.js --js_output_file=public/nudgepad.min.js --language_in=ECMASCRIPT5
# Google Closure compiler breaks our eval so we need to append it after.
cat public/js/compiler_workaround.js >> public/nudgepad.min.js
