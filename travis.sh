#!/bin/bash
rm -r ./public > /dev/null  || "no cleaning to do"
$GOPATH/bin/hugo
