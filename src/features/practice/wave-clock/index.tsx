'use client'
import {oneSketch} from "@/features/practice/wave-clock/oneSketch";
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";
import {WorkComponent} from "@/types/workComponent";

export const WaveClock: WorkComponent = ({size, showInfo}) => {
  const props: SketchLayoutProps = ({
    title: 'Study for Learning the Basics of Generative Art: Inspired byMatt Pearson\'s "Wave Clock"',
    description: 'This is imitation of his work to study learning Generative Art. this is NOT my original work.',
    sketch: oneSketch,
    size, showInfo
  })
  return <SketchLayout {...props}/>
}
