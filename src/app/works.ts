import {WaveClock} from "@/features/practice/wave-clock";
import {SquaresFloatInTheAir} from "@/features/practice/squares-float-in-the-air";
import {Net} from "@/features/practice/net";
import {WorkComponent} from "@/types/workComponent";

type Work = {
  path: string
  name: string
  Component: WorkComponent
}
export const works: { [path: string]: Omit<Work, 'path'> } = {
  'wave-clock': {name: '', Component: WaveClock},
  'squares-float-in-the-air': {name: '', Component: SquaresFloatInTheAir},
  // 'tiled': {name: '', Component: Tiled},
  'net': {name: '', Component: Net},
} as const

export const worksList: Work[] = Object.entries(works).map(([path, {name, Component}]) => ({path, name, Component}))
