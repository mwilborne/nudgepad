# Generate owner user file
createOwnerFile ()
{
  domain=$1
  ownerEmail=$2
  OWNERKEY=$(echo $ownerEmail$RANDOM$RANDOM | shasum -a 256 | sed "s/  -//g")
  OWNERNAME=$(echo $ownerEmail | sed "s/@.*//g" | sed "s/[0-9]//g" | sed "s/\./ /g")
  OWNERLINK=$(echo "http://$domain/nudgepad.login?email=$ownerEmail&key=$OWNERKEY")
  if isMac
    then
      printf "name $OWNERNAME\nkey $OWNERKEY\nrole owner\n" | tee -a $projectsPath/$domain/nudgepad/team/$ownerEmail.space >/dev/null
    else
      printf "name $OWNERNAME\nkey $OWNERKEY\nrole owner\n" > $projectsPath/$domain/nudgepad/team/$ownerEmail.space
  fi
  
}
