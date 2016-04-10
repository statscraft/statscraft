#!/bin/bash
rm -r ./public > /dev/null  || echo "no cleaning to do"
BASEURL="http://www.statscraft.org.il/"
if [[ "${TRAVIS_BRANCH}" != "master" ]]; then
    BASEURL="http://statscraft-temp.s3-website-us-east-1.amazonaws.com/${TRAVIS_BRANCH}/"
fi
echo "Building with ${BASEURL} as baseurl"
$GOPATH/bin/hugo -b ${BASEURL}
