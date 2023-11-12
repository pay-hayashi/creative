import {p5InstanceExtensions} from "p5";

export type SketchWrapper = ({w: number, h: number}) => (p5: p5InstanceExtensions) => void
