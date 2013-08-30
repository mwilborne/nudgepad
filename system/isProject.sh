# Todo: update to check if a 31 char username with that project exists.
isProject ()
{
  domain=$1
  if [ -d "$projectsPath/$domain" ]
    then
      return 0
    else
      return 1
  fi
}

isNotProject ()
{
  if isProject $1
    then
      return 1
    else
      return 0
  fi
}
