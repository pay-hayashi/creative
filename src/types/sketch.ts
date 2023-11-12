import {p5InstanceExtensions} from "p5";

export type SketchWrapper = ({w, h}: {
  w: number
  h: number
  noticeLoaded?: () => void
}) => (p5: p5InstanceExtensions) => void
