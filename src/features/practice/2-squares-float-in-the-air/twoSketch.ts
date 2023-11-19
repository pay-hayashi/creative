import {SketchWrapper} from "@/types/sketch"
import {noiseRangeFactory} from "@/lib/Random";
import {ContinuousDrawer} from "@/lib/ContinuousDrawer";

export const twoSketch: SketchWrapper = ({w, h, noticeLoaded}) => (p5) => {

  const noiseRange = noiseRangeFactory(p5)
  const drawer = new ContinuousDrawer(p5)

  p5.setup = () => {
    p5.createCanvas(w, h, p5.WEBGL)
    p5.fill(255, 150)
    p5.frameRate(60)
    noticeLoaded?.()
  }

  const step = 100
  const range = step * 25
  p5.draw = () => {
    if (drawer.t > 1000) {
      p5.noLoop()
    }
    p5.background(255)
    for (let x = -range; x < range; x += step) {
      for (let y = -range; y < range; y += step) {
        const maxZ = noiseRange([x * 0.01 + drawer.seed, y * 0.01 + drawer.seed], 0, 250)
        const z = maxZ * (1 - p5.exp(-drawer.t * 0.1))
        p5.push()
        p5.translate(x, y, z)
          .box(step, step, 0)
        p5.pop()
      }
    }

    const camPos = [250, 750, 500]
    p5.camera(...camPos, 0, 0, 0, camPos[0], camPos[1], 0)
  }

  p5.mouseClicked = () => {
    drawer.reset()
  }
}
