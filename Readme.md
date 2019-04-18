
Training In Ionic4
-------------------

# After Git pull :
 	
`npm install`

`ionic cordova platform add android`

# Basic Commands:

`ionic start myAppUdemy tabs`

`ionic cordova platform add android`

`cd myAppUdemy/`

`ionic cordova platform add android`

`ionic cordova build android`

`cat > ~/.bash_profile`
`export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:/opt/gradle/gradle-5.2.1/bin`

`source ~/.bash_profile`

`echo $PATH`

`ionic cordova build android`

`ionic cordova run android`

`ionic serve`

`ionic cordova emulate android`