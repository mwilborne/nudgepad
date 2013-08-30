deleteProject ()
{
  stopProject $1
  setUsername $1
  if isMac
    then
      sudo rm -rf $projectsPath/$1
    else
      sudo rm -rf $projectsPath/$1
      sudo deluser $username
      sudo delgroup $username
      sudo rm -rf /home/$username
  fi
}

