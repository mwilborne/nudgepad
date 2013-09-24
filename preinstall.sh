#!/bin/bash
# only run this script if the /nudgepad folder does not exist yet.
# in other words, run this script when someone does "npm install nudgepad"
# Create folders to install NudgePad
if [ -d "/nudgepad" ]
  then
    exit
fi

if [ $OSTYPE == "darwin11" ] || [ $OSTYPE == "darwin12" ]
  then
    source install-osx.sh
  else
    source install-ubuntu.sh
fi
