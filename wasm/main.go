package main

import (
	"fmt"
	"syscall/js"
	"wasm/fractals"
)

func Add(this js.Value, args []js.Value) interface{} {
	fmt.Println("addadishb")
	imageParams := fractals.GetImageParams()
	fmt.Println("hello world???")
	img := fractals.GenerateImage(imageParams)
	fmt.Println(img)
	// return fmt.Sprintf("%d <--> %s", args[0].Int()+args[1].Int(), args[0].String())
	return img.Rect.String()

}
func main() {

	// This should be in a "main_js.go"

	js.Global().Set("Add", js.FuncOf(Add))
	select {} // Code must not finish, otherwise Error: Go program has already exited

}
