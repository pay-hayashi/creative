'use client'
import {oneSketch} from "@/features/practice/wave-clock/oneSketch";
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";

export const WaveClock = () => {
  const props: SketchLayoutProps = ({
    title: 'Study for Learning the Basics of Generative Art: Inspired byMatt Pearson\'s "Wave Clock"',
    description: 'This is imitation of his work to study learning Generative Art. this is NOT my original work.',
    sketch: oneSketch
  })
  return <SketchLayout {...props}/>
}
