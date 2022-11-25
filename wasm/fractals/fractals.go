package fractals

/*

INteresting::
https://medium.com/analytics-vidhya/concurrent-image-processing-in-go-pixelization-71164ad660d2


*/

import (
	"fmt"
	"image"
	"image/color"
	"image/png"
	"log"
	"math"
	"math/cmplx"
	"os"
	"os/exec"
	"sync"
	"time"

	"github.com/PerformLine/go-stockutil/colorutil"
)

type Picture [][]color.RGBA

type point_float struct {
	x, y float64
}

func GenerateImage(imageParams ImageParams) *image.RGBA {
	// width, height, goroutineCount int
	width := imageParams.width
	height := imageParams.height
	goroutineCount := imageParams.goroutineCount

	var wg sync.WaitGroup
	wg.Add(goroutineCount)

	upLeft := image.Point{0, 0}
	lowRight := image.Point{width, height}

	img := image.NewRGBA(image.Rectangle{upLeft, lowRight})

	sliceSize := width / goroutineCount
	for i := 0; i < goroutineCount; i++ {
		sliceStart := i * sliceSize
		go func() {
			defer wg.Done()
			processPicture(img, sliceStart, 0, sliceStart+sliceSize, height, imageParams)
		}()
	}

	return img
	// defer savePng(imageParams, img)
	// wg.Wait()

}

func savePng(imageParams ImageParams, img *image.RGBA) {
	os.MkdirAll(fmt.Sprintf("out/%s", imageParams.folder), os.ModePerm)
	f, _ := os.Create(fmt.Sprintf("out/%s/%04d.png", imageParams.folder, imageParams.imageIdx))
	png.Encode(f, img)

}

func processPicture(img *image.RGBA, x1, y1, x2, y2 int, imageParams ImageParams) {
	for x := x1; x < x2; x += 1 {
		for y := y1; y < y2; y += 1 {
			coord := mapScreenPositionToCoords(x, y, imageParams.width, imageParams.height)
			color := coordToColor(coord, imageParams.complexFunctionFactory, imageParams.hueOffset)
			img.Set(x, y, color)
		}
	}
}

func mapValueRange(x, in_min, in_max, out_min, out_max float64) float64 {
	return (x-in_min)*(out_max-out_min)/(in_max-in_min) + out_min
}

func mapScreenPositionToCoords(screenX, screenY, screenW, screenH int) point_float {
	aspectRatio := float64(screenH) / float64(screenW)

	desiredPlane := map[string]float64{"left": -2, "right": 1, "down": -1.5 * aspectRatio, "up": 1.5 * aspectRatio}

	x := mapValueRange(float64(screenX), 0, float64(screenW), desiredPlane["left"], desiredPlane["right"])
	y := mapValueRange(float64(screenY), 0, float64(screenH), desiredPlane["down"], desiredPlane["up"])

	return point_float{x, y}
}

func coordToColor(coord point_float, complexFunctionFactory ComplexFunctionFactory, hueOffset float64) color.RGBA {

	maxIteration := 100.0
	iter := 0.0

	z := complex(coord.x, coord.y)
	complexFunc := complexFunctionFactory(z)
	for cmplx.Abs(z) <= 10 && iter < maxIteration {
		z = complexFunc(z)
		iter += 1
	}

	brightnessNormalized := mapValueRange(iter, 0, maxIteration, 0, 1)
	brightnessUnNormalized := 1.0 - brightnessNormalized
	// brightnessDegrees := mapValueRange(math.Sqrt(brightnessNormalized), 0, 1, 360, 0)

	brightnessRadians := math.Pow(brightnessNormalized, 2) * 2 * math.Pi
	brightnessDistorted := math.Sin(brightnessRadians)
	brightnessDegrees := mapValueRange(brightnessDistorted, -1, 1, 360, 0)
	// basicly brightnessDegrees = (brightnessDegrees + hueoffset) %360 but for floats
	brightnessDegrees += hueOffset
	if brightnessDegrees > 360.0 {
		brightnessDegrees = 0.0
	}

	r, g, b := colorutil.HsvToRgb(brightnessDegrees, 0.5, brightnessUnNormalized)

	return color.RGBA{r, g, b, 0xff}
}

type ComplexFunctionFactory func(complex128) func(complex128) complex128
type ImageParams struct {
	imageIdx, width, height, goroutineCount int
	complexFunctionFactory                  ComplexFunctionFactory
	folder                                  string
	hueOffset                               float64
}

func MandelbrotSetFunctionFactory(initialZ complex128) func(complex128) complex128 {
	c := initialZ
	return func(z complex128) complex128 { return z*z + c }
}

// func main() {

// 	var timeStart time.Time
// 	var timeElapsed time.Duration
// 	timeStart = time.Now()
// 	log2file("----------------------------------------------------")

// 	generateMovie()

// 	timeElapsed = time.Since(timeStart)
// 	logText := fmt.Sprintf("totalTime %s ", timeElapsed)
// 	log2file(logText)
// 	fmt.Println("Generated png")
// 	fmt.Println(logText)

// }

func generateMovie() {
	t := time.Now()
	formattedDate := t.Format("20060102150405") //no idea what this means but it works

	// width, height := 1920, 1080 //fhd
	// width, height := 3840, 2160 //4k
	// width, height := 1000, 1000
	// width, height := 2000, 2000
	width, height := 200, 200

	folderName := fmt.Sprintf("%s_%dx%d", formattedDate, width, height)
	imageGoroutineCount := 8

	// imageCount := 60 * 60
	imageCount := 60 * 10

	// initialC := 0.4 + 0.6i

	// from := -0.8 + 0.156i
	// from := -0.4 + 0.6i
	// to := -0.7269 + 0.1889i
	// to := 0.285 + 0.01i
	// to := -0.8i

	// step := (to - from) / complex(float64(imageCount), 0)
	// fmt.Println(step)
	// angle := 0.0
	// step := 0.7885 * cmplx.Pow(complex(math.E, 0), complex(0, angle))

	goroutineCount := 100
	var wg sync.WaitGroup
	wg.Add(goroutineCount)

	sliceCount := imageCount / goroutineCount
	for goroutineIdx := 0; goroutineIdx < goroutineCount; goroutineIdx++ {
		go func(goroutineIdx, sliceCount int) {
			defer wg.Done()
			start := goroutineIdx * sliceCount
			end := start + sliceCount
			for i := start; i < end; i++ {
				angle := mapValueRange(float64(i), 0, float64(imageCount), 0, 2.0*math.Pi)
				c := 0.7885 * cmplx.Pow(complex(math.E, 0), complex(0, angle))

				// c := initialC + (step * complex(float64(i), 0))

				juliaSetFunctionFactory := func(initialZ complex128) func(complex128) complex128 {
					return func(z complex128) complex128 { return z*z + c }

				}
				hueOffset := float64(i % 360)
				imageParams := ImageParams{imageIdx: i, width: width, height: height, goroutineCount: imageGoroutineCount, complexFunctionFactory: juliaSetFunctionFactory, folder: folderName, hueOffset: hueOffset}
				GenerateImage(imageParams)
			}
		}(goroutineIdx, sliceCount)

	}

	defer combineToMovie(folderName)
	wg.Wait()
	log2file(fmt.Sprintf("image size:  %dX%d | goroutine count: %d |image count: %d ", width, height, imageGoroutineCount, imageCount))
}

func combineToMovie(folderName string) {
	fmt.Println("combining images to a movie")
	path, err := os.Getwd()
	if err != nil {
		log.Println(err)
	}
	os.Chdir(folderName)

	createMp4Cmd := exec.Command("ffmpeg", "-framerate", "60", "-pix_fmt", "yuv420p", "-i", "%04d.png", "movie_not_working.mp4")
	createMp4Cmd.Dir = fmt.Sprintf("%s/out/%s", path, folderName)
	out, err := createMp4Cmd.Output()

	if err != nil {
		println(err.Error())
		return
	}
	print(out)
	fmt.Println("mp4 created. fixing mp4...")

	fixMp4Cmd := exec.Command("ffmpeg", "-i", "movie_not_working.mp4", "-c:v", "libx264", "-profile:v", "baseline", "-level", "3.0", "-pix_fmt", "yuv420p", "movie.mp4")
	fixMp4Cmd.Dir = fmt.Sprintf("%s/out/%s", path, folderName)
	out, err = fixMp4Cmd.Output()

	if err != nil {
		println(err.Error())
		return
	}

	print(out)
	fmt.Println("mp4 fixed")

}

func GetImageParams() ImageParams {
	imageParams := ImageParams{imageIdx: 0, width: 100, height: 100, goroutineCount: 4, complexFunctionFactory: MandelbrotSetFunctionFactory, folder: "test", hueOffset: 200}
	return imageParams
}
