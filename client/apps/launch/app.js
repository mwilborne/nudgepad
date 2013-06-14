nudgepad.apps.home = new App('home')

nudgepad.apps.home.onopen = function () {
  $('.nudgepad#domainName').text(nudgepad.domain)
}
