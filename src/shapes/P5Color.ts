// @ts-ignore
import {P5CanvasInstance} from "@p5-wrapper/react";

export class P5Color {
  p5: P5CanvasInstance
  color: number[] | string

  constructor(p5:P5CanvasInstance,color: number[] | string) {
    this.p5 = p5
    this.color = color
  }

  fill() {
    if (this.color instanceof Array) {
      this.p5.fill(...this.color)
    } else {
      this.p5.fill(this.color)
    }
  }
}
