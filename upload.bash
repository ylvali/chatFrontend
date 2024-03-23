#!/usr/bin/env bash
 
# Upload
#rsync -avz -e "ssh" --exclude-from 'exclude-list.txt' dist/my-app/ root@104.248.170.86://var/www/me-api2.ysojs.se/html/

rsync -avz -e "ssh" --exclude-from 'exclude-list.txt' index.html dist style.css root@104.248.170.86://var/www/chat-client.ysojs.se/html/

echo 'uploaded'