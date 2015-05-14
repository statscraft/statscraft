#!/bin/bash
cd ${TRAVIS_BUILD_DIR}
bundle exec jekyll build
ls ${TRAVIS_BUILD_DIR}/_site
