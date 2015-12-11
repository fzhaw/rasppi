#!/bin/sh
disp=$1
url=$2
export DISPLAY=$disp && chromium-browser --start-fullscreen --app=$url
