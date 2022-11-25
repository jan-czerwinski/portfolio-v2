build:
	cd wasm && mkdir -p assets && GOOS=js GOARCH=wasm go build -o  ../public/main.wasm

# setup:
#do this lol https://golangbot.com/webassembly-using-go/
