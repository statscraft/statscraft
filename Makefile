dev:
	hugo serve --watch
	# pushd public; python -m SimpleHTTPServer; popd
prod:
	hugo
