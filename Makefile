TSC=tsc
TSD=tsd
TSCFLAGS= --module commonjs

build:
	mkdir -p build
	$(TSC) src/app.ts $(TSCFLAGS) --outDir ./build/

configure:
	npm install
	$(TSD) reinstall -so

test: build
	mocha build/

run:
	node ./build/app.js

clean:
	rm -rf build

clean-all: clean
	rm -rf typings
