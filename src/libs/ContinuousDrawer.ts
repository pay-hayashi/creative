// @ts-ignore
import {P5CanvasInstance} from "@p5-wrapper/react";

export class ContinuousDrawer {
  private p5: P5CanvasInstance
  private _resetFrame

  constructor(p5: P5CanvasInstance) {
    this.p5 = p5
    this._resetFrame = this.p5.frameCount
  }

  reset = () => {
    this._resetFrame = this.p5.frameCount
  }

  get t() {
    return this.p5.frameCount - this._resetFrame
  }

  get seed() {
    return this._resetFrame
  }
}
