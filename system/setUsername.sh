# convert a username over 31 characters into a 31 character hash
# the first 31 characters must be unique
# Generate owner user file
setUsername ()
{
 username=`echo "$1" | cut -c1-30`
}
