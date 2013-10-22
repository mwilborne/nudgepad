isMac ()
{
  if [ $OSTYPE == "darwin11" ] || [ $OSTYPE == "darwin12" ] || [ $OSTYPE == "darwin13" ]
    then
      return 0
    else
      return 1
  fi
}

isNix ()
{
  if isMac
    then
    return 1
  else
    return 0
  fi
}
