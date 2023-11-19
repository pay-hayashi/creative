// @ts-ignore
import {P5CanvasInstance} from "@p5-wrapper/react";

export type SketchWrapper = ({w, h}: {
  w: number
  h: number
  noticeLoaded?: () => void
}) => (p5: P5CanvasInstance) => void
