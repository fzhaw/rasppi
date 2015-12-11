#!/bin/bash
ip=`curl http://169.254.169.254/latest/meta-data/public-ipv4 --connect-timeout 1 2>/dev/null`
if [ -z "$ip" ]; then
 ip=`ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/'  | head -c -1`
fi
ippi=160.85.142.40
name='mini-pi'
display=':1'
wakeup='http://'$ippi':1880/notify-wake-up'
browser='https://'$ip':1880/notify'
#echo "registering ip $ip ..."
curl -k -v -X POST -H 'Content-Type: application/json' -d '{"notify_url":{"browser":"'$browser'", "wakeup":"'$wakeup'"},"name":"'$name'"}' https://bettercast.ddns.net:8080/register
