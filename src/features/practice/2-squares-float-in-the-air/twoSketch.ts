import {SketchWrapper} from "@/types/sketch"
// @ts-ignore
import {P5CanvasInstance} from "@p5-wrapper/react"
import {noiseRangeFactory} from "@/lib/Random";

export const twoSketch: SketchWrapper = ({w, h, noticeLoaded}) => (p5: P5CanvasInstance) => {
  const noiseRange = noiseRangeFactory(p5)

  p5.setup = () => {
    p5.createCanvas(w, h, p5.WEBGL)
    p5.fill(255, 150)
    p5.frameRate(60)
    noticeLoaded?.()
  }

  const step = 100
  const range = step * 25
  p5.draw = () => {
    if (p5.frameCount > 1000) {
      p5.noLoop()
    }
    p5.background(255)
    for (let x = -range; x < range; x += step) {
      for (let y = -range; y < range; y += step) {
        const maxZ = noiseRange([x * 0.01, y * 0.01], 0, 250)
        const z = maxZ * (1 - p5.exp(-p5.frameCount * 0.1))
        p5.push()
        p5.translate(x, y, z)
          .box(step, step, 0)
        p5.pop()
      }
    }

    const camPos = [250, 750, 500]
    p5.camera(...camPos, 0, 0, 0, camPos[0], camPos[1], 0)
  }
}
