#!/bin/bash
ip=`curl http://169.254.169.254/latest/meta-data/public-ipv4 --connect-timeout 1 2>/dev/null`
if [ -z "$ip" ]; then
 ip=`ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/'  | head -c -1`
fi
name='mini-pi'
display=':1'
#echo "registering ip $ip ..."
curl -k -v -X POST -H 'Content-Type: application/json' -d '{"notify_url":"https://'$ip':1880/notify","name":"'$name'", "display":"'$display'", "sharing_url":"https://bettercast.ddns.net:8080/sharing/'$name'"}' https://bettercast.ddns.net:8080/register
