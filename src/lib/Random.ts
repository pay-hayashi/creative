import {p5InstanceExtensions} from "p5";

export const noiseRangeFactory = (p5: p5InstanceExtensions) => {
  function noiseRange(coord: [number, ...number[]]): number
  function noiseRange(coord: [number, ...number[]], max: number): number
  function noiseRange(coord: [number, ...number[]], min: number, max: number): number
  function noiseRange(coord: [number, ...number[]], arg1?: number, arg2?: number) {

    let min: number
    let max: number

    if (arg1 === undefined) {
      min = 0
      max = 1
    } else if (arg2 === undefined) {
      min = 0
      max = arg1
    } else {
      min = arg1
      max = arg2
    }
    return p5.noise(...coord) * (max - min) + min
  }

  return noiseRange
}

