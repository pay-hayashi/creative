import {SketchWrapper} from "@/types/sketch";
import {PointP5} from "@/shapes/Point";

export const netSketch: SketchWrapper = ({w, h, noticeLoaded}) => (p5) => {
  const x = 1250
  const y = 1250
  const z = 1250
  const points = new Array(250).fill(0).map(() =>
    new PointP5(
      p5,
      p5.random(-x / 2, x / 2),
      p5.random(-y / 2, y / 2),
      p5.random(-z / 2, z / 2)
    )
  )

  const nearSorted = points.map(p => (
    points
      .toSorted((p1, p2) => (
        p.distance(p1) - p.distance(p2)
      ))
      .filter(p1 => p1 !== p)
  ))

  p5.setup = () => {
    p5.createCanvas(w, h, p5.WEBGL)
    p5.frameRate(60)
    noticeLoaded?.()
  }

  p5.draw = () => {
    p5.background(40)
    p5.stroke(220)
    p5.rotateY(p5.frameCount * 0.002)

    p5.strokeWeight(5)
    points.forEach(point => point.draw())

    p5.strokeWeight(0.25)
    points.map((p1, i) => {
      nearSorted[i].slice(0, 4).forEach(p2 => {
        p5.line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
      })
    })
  }
}
