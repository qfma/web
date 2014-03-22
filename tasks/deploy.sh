#!/usr/bin/env bash
jekyll build && rsync -avz  --delete --exclude=".htaccess" build/ uberspace:~/html
