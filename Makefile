open:
	open index.html
	# open -a "Chrome" --args --disable-web-security index.html
	# open -a "/Applications/Google\ Chrome\ Canary.app" index.html

static:
	jsx -w jsx/ static/

.PHONY: static
