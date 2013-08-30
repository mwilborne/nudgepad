var Domain = {}

Domain.validate = function (domain, relaxed) {
  
  if (!domain)
    return 'No domain provided'
  
  if (domain.match(/[^0-9a-z\-\.]/i))
    return 'Invalid character in domain'
  
  if (!domain.match(Domain.tld) && !relaxed)
    return 'Domain must end with ' + Domain.tld

  if (domain.length > 128)
    return 'Domain too long'
  
  return false
}

Domain.format = function (domain) {
  domain = domain.toLowerCase().replace(/ /g, '')
  if (!domain.match(Domain.tld))
    domain += Domain.tld
  return domain
}

// If Node.js, export as a module.
if (typeof exports !== 'undefined')
  module.exports = Domain;
// If running on the browser, use current hostname as tld
else
  Domain.tld = '.' + location.hostname
