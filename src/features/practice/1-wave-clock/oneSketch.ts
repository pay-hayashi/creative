import {SketchWrapper} from "@/types/sketch";
import {noiseRangeFactory} from "@/lib/Random";

export const oneSketch: SketchWrapper = ({w, h, noticeLoaded}) => (p5) => {

  const noiseRange = noiseRangeFactory(p5)

  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.background(255)
    p5.strokeWeight(1)
    p5.smooth()
    draw()
    noticeLoaded?.()
  }

  p5.mouseClicked = () => {
    draw()
  }

  const draw = () => {
    p5.push()
    const centX = p5.width / 2
    const centY = p5.height / 2
    p5.translate(centX, centY)

    p5.background(255)
    p5.strokeWeight(1)
    p5.stroke(50, 100)

    const radius = 1000
    let prevAngle = p5.random(180)
    let ticsX = p5.random(10)
    let ticsY = p5.random(10)
    let seed = p5.random(100)
    for (let i = 0; i < 500; i += 1) {
      const angle = prevAngle + noiseRange([i * 0.01 + seed], -1.5, 2)
      const rad = p5.radians(angle)
      const noiseX = noiseRange([ticsX + seed], -1, 1)
      const noiseY = noiseRange([ticsY + seed], -1, 1)
      p5.translate(noiseX, noiseY)
      const x = radius * p5.cos(rad)
      const y = radius * p5.sin(rad)
      p5.line(0, 0, x, y)
      p5.line(0, 0, -x, -y)
      prevAngle = angle
      ticsX += 0.001
      ticsX += 0.001
    }
    p5.pop()
  }
}

