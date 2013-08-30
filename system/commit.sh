commit ()
{
  setUsername $1
  cd $projectsPath/$1
  sudo -u $username git add .
  sudo -u $username git commit --author="Nudgepad Backup <autobackup@$1>" -am "Auto backup..."
}
