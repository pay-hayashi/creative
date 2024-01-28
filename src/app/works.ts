import {ReactNode} from "react";
import {WaveClock} from "@/features/practice/wave-clock";
import {SquaresFloatInTheAir} from "@/features/practice/squares-float-in-the-air";
import {Net} from "@/features/practice/net";
import {Tiled} from "@/features/practice/tiled";

type Work = {
  path: string
  name: string
  Component: (options: { size?: { width: number, height: number }, showInfo?: boolean }) => ReactNode
}
export const works: { [path: string]: Omit<Work, 'path'> } = {
  'wave-clock': {name: '', Component: WaveClock},
  'squares-float-in-the-air': {name: '', Component: SquaresFloatInTheAir},
  // 'tiled': {name: '', Component: Tiled},
  'net': {name: '', Component: Net},
} as const

export const worksList: Work[] = Object.entries(works).map(([path, {name, Component}]) => ({path, name, Component}))
