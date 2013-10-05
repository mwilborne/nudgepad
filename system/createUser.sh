#!/bin/bash
source setUsername.sh
domain=$1
serverUser=$2
projectsPath=/nudgepad/projects
PW=`echo $RANDOM$RANDOM`
setUsername $domain
useradd -m -p "$PW" -G projects $username
usermod -a -G $username $serverUser
echo $PW > $projectsPath/$domain/nudgepad/pw.txt
chown -R $username:$username $projectsPath/$domain
