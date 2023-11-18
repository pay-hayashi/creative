'use client'
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";
import {twoSketch} from "@/features/practice/2-squares-float-in-the-air/twoSketch";

export const Two = () => {
  const props: SketchLayoutProps = {
    title: 'Squares float in the air',
    description: 'This is one of study for 3D Generative Art.',
    sketch: twoSketch
  }
  return <SketchLayout {...props}/>
}
