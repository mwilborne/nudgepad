#!/bin/bash
projects="$(ls /nudgepad/projects/)"
echo "Showing projects with an app.js file in root dir:"
for domain in $projects
do
  if [ -f /nudgepad/projects/$domain/app.js ]
    then
      echo $domain
  fi
done
echo "Done."
echo "Showing projects with a packages folder:"
for domain in $projects
do
  if [ -d /nudgepad/projects/$domain/nudgepad/packages ]
    then
      echo "***$domain***"
      ls /nudgepad/projects/$domain/nudgepad/packages
  fi
done
echo "Done."
