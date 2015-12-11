#!/bin/sh
disp=$1
url=$2
export DISPLAY=$disp && google-chrome --start-fullscreen --app=$url
