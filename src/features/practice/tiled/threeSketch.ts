import {SketchWrapper} from "@/types/sketch";
import {RectP5} from "@/shapes/Rectangle";
import {Direction, directions} from "@/types/direction";

export const threeSketch: SketchWrapper = ({w, h, noticeLoaded}) => (p5) => {

  const rects: Rect[] = []

  const addRect = () => {
    let newRect: Rect
    while (true) {
      const [x, y] = [p5.random(w - 1), p5.random(h - 1)]
      newRect = new Rect(p5, x, y, x + 1, y + 1, [0, p5.random(40, 200)])
      if (newRect.isOverlapAny(rects)) {
        continue
      }
      break
    }
    rects.push(newRect)
  }
  const addRectLoop = (step: number) => {
    for (let i = 0; i < step; i++) {
      addRect()
    }
  }

  const expandRandomRect = () => {
    while (true) {
      const rect: Rect = p5.random(rects)
      const dir: Direction = p5.random(directions)
      rect.expand(dir)
      if (rect.isOverlapAny(rects)) {
        rect.rollbackLazy()
        continue
      }
      rect.applyLazy()
      break
    }
  }
  const expandRandomRectLoop = (step: number) => {
    for (let i = 0; i < step; i++) {
      expandRandomRect()
    }
  }

  const initRects = () => {
    addRectLoop(30)
    expandRandomRectLoop(100000)
  }

  p5.setup = () => {
    const cnv = p5.createCanvas(w, h)
    cnv.mouseClicked(() => {
      while (rects.length > 0) {
        rects.pop()
      }
      initRects()
    })
    p5.fill(245)
    initRects()
    noticeLoaded?.()
  }

  p5.draw = () => {
    p5.background(255)
    rects.forEach(rect => rect.draw())
  }
}

const step = 1

class Rect extends RectP5 {
  _expand(dir: Direction, step: number) {
    switch (dir) {
      case 'up':
        this.y1 -= step
        break
      case 'down':
        this.y2 += step
        break
      case 'left':
        this.x1 -= step
        break
      case 'right':
        this.x2 += step
        break
    }
  }

  expand(dir: Direction) {
    this._expand(dir, step)
  }

  shrink(dir: Direction) {
    this._expand(dir, -step)
  }

  isOverlapAny(rects: Rect[]): boolean {
    return rects.some(rect => rect !== this && this.isOverlap(rect))
  }
}
