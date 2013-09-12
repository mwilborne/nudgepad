#!/bin/bash
projects="$(ls /nudgepad/projects/)"
for domain in $projects
do
  mv /nudgepad/projects/$domain/private /nudgepad/projects/$domain/nudgepad
done
