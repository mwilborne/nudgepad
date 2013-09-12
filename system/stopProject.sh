stopProject () {
  # check if project is already running
  if isActive $1
    then
      PID=$(cat $projectsPath/$1/nudgepad/monPid.txt)
      kill $PID
      echo stopped $1
      return 0
    else
      echo $1 not running
      return 1
  fi
}
