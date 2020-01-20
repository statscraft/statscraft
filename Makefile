dev:
	hugo serve --watch
	# pushd public; python -m SimpleHTTPServer; popd
prod:
	hugo -b https://www.statscraft.org.il/