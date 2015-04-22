TSC=tsc
TSD=tsd
TSCFLAGS= --module commonjs

build:
	mkdir -p ./build/src
	$(TSC) src/*.ts $(TSCFLAGS) --outDir ./build/src

configure:
	npm install
	$(TSD) reinstall -so

test: build
	mkdir -p ./build/tests
	$(TSC) tests/test.ts $(TSCFLAGS) --outDir ./build/tests
	mocha build/tests

run:
	node ./build/app.js

clean:
	rm -rf build

clean-all: clean
	rm -rf typings
