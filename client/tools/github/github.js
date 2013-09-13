var GitHub = new Tool('GitHub')

GitHub.gitignore = 'nudgepad/'

GitHub.add = function () {
  var message = $('#GitHubFilepath').val()
  GitHub.exec('git add ' + message, function () {
    Alerts.success('Added')
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
    Alerts.success('Origin Updated')
  })
}

GitHub.cloneRepo = function () {
  var origin = prompt('Enter clone URI', 'https://github.com/')
  if (!origin)
    return false
  GitHub.exec('git clone ' + origin + ' temp; mv temp/* .; mv temp/.git .; rm -rf temp', function () {
    Alerts.success('Cloned')
  })
}

GitHub.commit = function () {
  var message = $('#GitHubCommitMessage').val()
  GitHub.exec('git commit -am "' + message + '"', function () {
    Alerts.success('Commit Received')
  })
  $('#GitHubCommitMessage').val('')
}

GitHub.deployKey = function () {
  
  expressfs.exists('nudgepad/deploy.key.pub', function (exists) {
    if (exists)
      expressfs.readFile('nudgepad/deploy.key.pub', function (data) {
        var box = $('<pre id="PreviewBoxWhiteBox" style="text-align: left;">' + data + '</pre>')
        PreviewBox.open(box)
      })
    else
      GitHub.generateKey()
  })

}

GitHub.exec = function (command, callback) {
  var endpoint = 'nudgepad.exec'
  var output = $('#GitHubStatus')
  output.html('')
  $.post(endpoint, {command : command}, function (result) {
    output.append(result + '\n')
    if (callback)
      callback()
  }).fail(function (error, message) {
    output.append('ERROR\n')
    output.append(error.responseText + '\n')
  })
}

GitHub.generateKey = function () {
  var path = Explorer.paths.nudgepad + 'deploy.key'
  GitHub.exec('ssh-keygen -t rsa -N "" -f ' + path, function () {
    Alerts.success('Git SSH key created')
    GitHub.status()
  })
}

GitHub.init = function () {
  expressfs.writeFile('.gitignore', GitHub.gitignore, function () {
    GitHub.exec('git init', function () {
      Alerts.success('Git init OK')
      GitHub.status()
    })
  })
}

GitHub.pull = function () {
//  GitHub.exec('git pull')
  var command = "ssh-agent bash -c 'ssh-add /nudgepad/projects/" + document.location.hostname + "/nudgepad/deploy.key; git pull'"
  GitHub.exec(command)
}

GitHub.push = function () {
//  var command = 'git push -u origin master'
  var command = "ssh-agent bash -c 'ssh-add /nudgepad/projects/" + document.location.hostname + "/nudgepad/deploy.key; git push -u origin master'"
  console.log(command)
  GitHub.exec(command)
}

GitHub.setOrigin = function () {
  var origin = prompt('Enter origin URI')
  if (!origin)
    return false
  GitHub.exec('git remote set-url origin ' + origin, function () {
    Alerts.success('Origin Updated')
  })
}

GitHub.status = function () {
  GitHub.exec('git status')
}

GitHub.setup = function () {
  // http://pentestmonkey.net/blog/ssh-with-no-tty
  GitHub.exec('ssh-keyscan -t rsa1,rsa,dsa github.com >> /home/' + document.location.hostname +  '/.ssh/known_hosts')
}

GitHub.on('ready', GitHub.status)
