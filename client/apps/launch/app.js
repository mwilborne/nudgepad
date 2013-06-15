var Launch = new App('Launch')

Launch.onopen = function () {
  $('.nudgepad#domainName').text(nudgepad.domain)
}
