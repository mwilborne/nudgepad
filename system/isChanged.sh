isChanged ()
{
  cd $projectsPath/$1
  setUsername $1
  if sudo -u $username git status | grep -q "nothing to commit"
     then
       return 1
     else
       return 0
   fi
}

is_not_changed ()
{
  if isChanged $1
    then
      return 1
    else
      return 0
  fi
}

