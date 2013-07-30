var GitHub = new Tool('GitHub')
GitHub.set('color', 'rgba(171, 193, 199, 1)')
GitHub.set('description', 'Sync your project with GitHub.')
GitHub.set('beta', 'true')

GitHub.add = function () {
  var message = $('#GitHubFilepath').val()
  GitHub.exec('git add ' + message, function () {
    Flasher.success('Added')
    GitHub.status()
  })
  $('#GitHubFilepath').val('')
}

GitHub.addAll = function () {
  GitHub.exec('git add .', GitHub.status)
}

GitHub.addOrigin = function () {
  var origin = prompt('Enter origin URI')
  if (!origin)
    return false
  GitHub.exec('git remote add origin ' + origin, function () {
    Flasher.success('Origin Updated')
  })
}

GitHub.cloneRepo = function () {
  var origin = prompt('Enter clone URI')
  if (!origin)
    return false
  GitHub.exec('git clone ' + origin + ' temp; mv temp/* .; mv temp/.git .; rm -rf temp', function () {
    Flasher.success('Cloned')
  })
}

GitHub.commit = function () {
  var message = $('#GitHubCommitMessage').val()
  GitHub.exec('git commit -am "' + message + '"', function () {
    Flasher.success('Commit Received')
  })
  $('#GitHubCommitMessage').val('')
}

GitHub.exec = function (command, callback) {
  var endpoint = 'nudgepad.exec'
  var output = $('#GitHubStatus')
  output.html('')
  $.post(endpoint, {command : command}, function (result) {
    output.append(result + '\n')
    if (callback)
      callback()
  }).error(function (error, message) {
    output.append('ERROR\n')
    output.append(error.responseText + '\n')
  })
}

GitHub.generateKey = function () {
  var filename = '/nudgepad/projects/' + document.location.host  + '/private/github.key'
  GitHub.exec('ssh-keygen -t rsa -N "" -f ' + filename, function () {
    Flasher.success('Git SSH key created')
    GitHub.status()
  })
}

GitHub.init = function () {
  GitHub.exec('git init', function () {
    Flasher.success('Git init OK')
    GitHub.status()
  })
}

GitHub.pull = function () {
  GitHub.exec('git pull')
}

GitHub.push = function () {
  GitHub.exec('git push -u origin master')
}

GitHub.setOrigin = function () {
  var origin = prompt('Enter origin URI')
  if (!origin)
    return false
  GitHub.exec('git remote set-url origin ' + origin, function () {
    Flasher.success('Origin Updated')
  })
}

GitHub.status = function () {
  GitHub.exec('git status')
}

GitHub.on('open', GitHub.status)
