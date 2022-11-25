package fractals

import (
	"log"
	"os"
)

func log2file(message string) {
	// If the file doesn't exist, create it or append to the fil
	file, err := os.OpenFile("logs.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		log.Fatal(err)
	}

	log.SetOutput(file)
	log.Println(message)
}
