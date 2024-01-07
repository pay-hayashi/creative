import {Shape} from "@/shapes/Shape";
// @ts-ignore
import {P5CanvasInstance} from "@p5-wrapper/react";
import {P5Color} from "@/shapes/P5Color";

export class Point implements Shape {
  x: number
  y: number
  z?: number

  // 遅延評価用
  private lazyX: number
  private lazyY: number
  private lazyZ?: number

  constructor(x: number, y: number, z?: number) {
    this.x = x
    this.y = y
    this.z = z
    this.lazyX = x
    this.lazyY = y
    this.lazyZ = z
  }

  isOverlap(other: Point): boolean {
    return this.x === other.x
      && this.y === other.y
      && (this.z === undefined && other.z === undefined || this.z === other.z)
  }

  applyLazy(): void {
    this.lazyX = this.x
    this.lazyY = this.y
  }

  rollbackLazy(): void {
    this.x = this.lazyX
    this.y = this.lazyY
  }

  distance(other: Point): number {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2 + ((this.z ?? 0) - (other.z ?? 0)) ** 2)
  }

  get area(): number {
    return 0
  }
}

export class PointP5 extends Point implements Shape {
  p5: P5CanvasInstance
  color: P5Color

  constructor(p5: P5CanvasInstance, x: number, y: number, z?: number, color: number[] | string = [240]) {
    super(x, y, z)
    this.p5 = p5
    this.color = new P5Color(p5, color)
  }

  draw(): void {
    this.color.fill()
    this.p5.point(this.x, this.y, this.z)
  }
}
