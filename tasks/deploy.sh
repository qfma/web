#!/usr/bin/env bash
jekyll build && rsync -avz --delete build/ uberspace:~/html
