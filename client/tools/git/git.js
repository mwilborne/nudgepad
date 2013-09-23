var Git = new Tool('Git')

Git.gitignore = 'nudgepad/'

Git.add = function () {
  var message = $('#GitFilepath').val()
  Git.exec('git add ' + message, function () {
    Alerts.success('Added')
    Git.status()
  })
  $('#GitFilepath').val('')
}

Git.addAll = function () {
  Git.exec('git add .', Git.status)
}

Git.addOrigin = function () {
  var origin = prompt('Enter origin URI')
  if (!origin)
    return false
  Git.exec('git remote add origin ' + origin, function () {
    Alerts.success('Origin Updated')
  })
}

Git.autocommit = function () {
  Git.exec('git add .; git commit -am "autocommit"', function () {
    console.log('changed committed...')
  })
}

Git.cloneRepo = function () {
  var origin = prompt('Enter clone URI', 'https://github.com/')
  if (!origin)
    return false
  Git.exec('git clone ' + origin + ' temp; mv temp/* .; mv temp/.git .; rm -rf temp', function () {
    Alerts.success('Cloned')
  })
}

Git.checkout = function () {
  Git.exec('git checkout -b nudgepad', function () {
    Alerts.success('Switched to NudgePad branch')
  })
}

Git.commit = function () {
  var message = prompt('Enter your message')
  if (!message)
    return false
  Git.exec('git commit -am "' + message + '"', function () {
    Alerts.success('Commit Received')
  })
}

Git.deployKey = function () {
  
  expressfs.exists('nudgepad/deploy.key.pub', function (exists) {
    if (exists)
      expressfs.readFile('nudgepad/deploy.key.pub', function (data) {
        var box = $('<pre id="PreviewBoxWhiteBox" style="text-align: left;">' + data + '</pre>')
        PreviewBox.open(box)
      })
    else
      Git.generateKey()
  })

}

Git.exec = function (command, callback) {
  var endpoint = 'nudgepad.exec'
  var output = $('#GitStatus')
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

Git.fixKey = function () {
  // http://pentestmonkey.net/blog/ssh-with-no-tty
  Git.exec('ssh-keyscan -t rsa1,rsa,dsa github.com >> /home/' + document.location.hostname +  '/.ssh/known_hosts')
}

Git.generateKey = function () {
  var path = Explorer.paths.nudgepad + 'deploy.key'
  Git.exec('ssh-keygen -t rsa -N "" -f ' + path, function () {
    Alerts.success('Git SSH key created')
    Git.status()
  })
}

Git.init = function () {
  expressfs.writeFile('.gitignore', Git.gitignore, function () {
    Git.exec('git init', function () {
      Alerts.success('Git init OK')
      Git.status()
    })
  })
}

Git.install = function () {
  expressfs.writeFile('.gitignore', Git.gitignore, function () {
    Git.exec('git init; git add .; git commit -am "initial commit"; git checkout -b nudgepad;', function () {
      Alerts.success('Git setup OK')
    })
  })
}

Git.pull = function () {
//  Git.exec('git pull')
  var command = "ssh-agent bash -c 'ssh-add /nudgepad/projects/" + document.location.hostname + "/nudgepad/deploy.key; git pull'"
  Git.exec(command)
}

Git.push = function () {
//  var command = 'git push -u origin master'
  var command = "ssh-agent bash -c 'ssh-add /nudgepad/projects/" + document.location.hostname + "/nudgepad/deploy.key; git push -u origin master'"
  console.log(command)
  Git.exec(command)
}

Git.setOrigin = function () {
  var origin = prompt('Enter origin URI')
  if (!origin)
    return false
  Git.exec('git remote set-url origin ' + origin, function () {
    Alerts.success('Origin Updated')
  })
}

Git.squash = function () {
  var message = $('#GitSquashMessage').val()
  Git.exec('git checkout master; git squash nudgepad "' + message + '"; git checkout -b nudgepad')
  $('#GitSquashMessage').val('')
}

Git.status = function () {
  Git.exec('git status')
}

Git.on('ready', Git.status)
