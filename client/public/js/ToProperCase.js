// http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
var ToProperCase = function (string) {
  return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
}
