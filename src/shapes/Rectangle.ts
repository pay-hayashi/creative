// @ts-ignore
import {P5CanvasInstance} from "@p5-wrapper/react";
import {Shape} from "@/shapes/Shape";

export class Rectangle implements Shape {
  // 左上
  x1: number
  y1: number

  // 右下
  x2: number
  y2: number

  // 遅延評価用
  private lazyX1: number
  private lazyY1: number
  private lazyX2: number
  private lazyY2: number

  constructor(x1: number, y1: number, x2: number, y2: number) {
    // 左上と右下でない場合、入れ替える
    if (x1 > x2) {
      [x1, x2] = [x2, x1]
    }
    if (y1 > y2) {
      [y1, y2] = [y2, y1]
    }
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.lazyX1 = x1
    this.lazyY1 = y1
    this.lazyX2 = x2
    this.lazyY2 = y2
  }

  get w() {
    return this.x2 - this.x1
  }

  get h() {
    return this.y2 - this.y1
  }

  get area() {
    return this.w * this.h
  }

  isOverlap(other: Rectangle) {
    return Math.max(this.x1, other.x1) < Math.min(this.x2, other.x2) && Math.max(this.y1, other.y1) < Math.min(this.y2, other.y2)
  }

  applyLazy() {
    this.lazyX1 = this.x1
    this.lazyY1 = this.y1
    this.lazyX2 = this.x2
    this.lazyY2 = this.y2
  }

  rollbackLazy() {
    this.x1 = this.lazyX1
    this.y1 = this.lazyY1
    this.x2 = this.lazyX2
    this.y2 = this.lazyY2
  }
}

export class RectP5 extends Rectangle {
  p5: P5CanvasInstance
  color: Parameters<P5CanvasInstance['fill']>

  constructor(p5: P5CanvasInstance, x1: number, y1: number, x2: number, y2: number, color: Parameters<P5CanvasInstance['fill']> = [240]) {
    super(x1, y1, x2, y2)
    this.p5 = p5
    this.color = color
  }

  draw() {
    if (this.color instanceof Array) {
      this.p5.fill(...this.color)
    } else {
      this.p5.fill(this.color)
    }
    this.p5.rect(this.x1, this.y1, this.w, this.h)
  }
}
