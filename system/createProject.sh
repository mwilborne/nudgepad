createFromTemplate ()
{
  domain=$1
  template=$2
  shareCode=$3
  
  if [[ "$template" == *.space ]]
    then
      echo Creating from space file 1>&2
      createFromBlank $domain
      space $template $projectsPath/$domain
    else
      echo Creating from dir 1>&2
      # Check shareCode
      if [ ! -f $template/nudgepad/sharecode.txt ]
        then
          echo ERROR. No Share Code present.
          exit 1
      fi
      
      if [[ "$shareCode" == `cat $template/nudgepad/sharecode.txt` ]]
        then
          cp -R $template $projectsPath/$domain
        else
          echo ERROR. Invalid Share Code: $shareCode
          exit 1
      fi
  fi
}

createFromBlank ()
{
  domain=$1

  # echo NO source provided. Creating blank project from blank.
  cp -R blank $projectsPath/$domain
  mkdir $projectsPath/$domain/nudgepad/
  mkdir $projectsPath/$domain/nudgepad/team
  mkdir $projectsPath/$domain/nudgepad/time
  # Create this here for mon so we dont have to create it later.
  # theres probably a way to get mon to make it itself if it does not exist
  touch $projectsPath/$domain/nudgepad/app.log.txt
}

createProject ()
{
  domain=$1
  ownerEmail=$2
  template=$3
  shareCode=$4
  
  if [ -z $domain ]
    then
      echo ERROR. No domain entered. Your project needs a name. Usage: create domain owner@owner.com template.space
      return 1
  fi
  if [ -z $ownerEmail ]
    then
      echo ERROR. No email entered. Your project needs an owner. Usage: create domain owner@owner.com template.space
      return 1
  fi
  if isProject $domain
    then
      echo $domain already exists
      return 1
  fi
  
  if [ -n "$template" ]
    then
      createFromTemplate $domain $template $shareCode
    else
      createFromBlank $domain
  fi
  
  speedcoach "$domain created"
  # Create the owner file in the team folder
  createOwnerFile $domain $ownerEmail
  
  if isNix
    then
      # Allow the group and owner full access to dir
      chmod -R 770 $projectsPath/$domain/
      # todo: how can we do this without sudo? sudo cause a 400ms delay
      # sudo $systemPath/createUser.sh $domain $USER
      $systemPath/createUser.sh $domain $USER
    else
      # On Mac Change owner in case this script as called as root
      chown -R $macUser:staff $projectsPath/$domain
  fi
  
  # if on localhost, append to the hosts file to add the domain
  if isMac
    then
      echo "127.0.0.1 $domain" | sudo tee -a /etc/hosts >/dev/null
  fi

  return 0
}



