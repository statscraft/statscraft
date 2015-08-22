#!/bin/bash
rm -r ./_site > /dev/null
$GOPATH/bin/hugo --theme=purehugo
