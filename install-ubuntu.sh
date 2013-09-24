#!/bin/bash
### Update System


sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git gcc make imagemagick sendmail-bin python-software-properties python g++


### Create NudgePad folder


sudo mkdir /nudgepad
sudo chown `whoami`:`whoami` /nudgepad


### Install mon


cd /nudgepad
git clone https://github.com/visionmedia/mon.git
cd mon
sudo make install


### Install git-extras


cd /nudgepad
git clone https://github.com/visionmedia/git-extras
cd git-extras
sudo make install


### Install N


cd /nudgepad
git clone https://github.com/visionmedia/n.git
cd n
sudo make install


### Install Node 0.8.25

#### Note: NudgePad requires node v0.8.*. NudgePad does NOT currently work reliably with node v0.10.x due to a proxy/websocket (issue #1).


cd /nudgepad
sudo n 0.8.25
    

### Increase the Number of iNotify Watches (is this still necessary?)


echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


### Add projects group


sudo groupadd projects
# where ubuntu = your username
sudo usermod -a -G projects `whoami`


### Update system's hostname


echo Enter your hostname
read newHostname
# enter your hostname
echo $newHostname | sudo tee /etc/hostname >/dev/null
sudo hostname $newHostname
# Name your hostname with the root domain of the server
# We recommend then adding a *.domain.com CNAME record to your DNS


### Clone NudgePad


cd /nudgepad
git clone https://github.com/nudgepad/nudgepad.git


### Install NudgePad


cd /nudgepad/nudgepad
sudo npm install
sudo chown -R `whoami`:`whoami` node_modules
# move node_modules to parent dir
mv /nudgepad/nudgepad/node_modules /nudgepad/
sudo npm install -g


### Start NudgePad


/nudgepad/nudgepad/system/nudgepad.sh start
# Go to http://localhost


### Create "np" shortcut. Optional.


echo "alias np='/nudgepad/nudgepad/system/nudgepad.sh'" >> ~/.bash_profile
# The next line is to allow you to run np as sudo if you need to for some things.
echo "alias sudo='sudo '" >> ~/.bash_profile
# Reload your bash_profile to get the np command
source ~/.bash_profile

