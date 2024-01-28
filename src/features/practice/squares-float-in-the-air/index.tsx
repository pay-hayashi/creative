'use client'
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";
import {twoSketch} from "@/features/practice/squares-float-in-the-air/twoSketch";
import {WorkComponent} from "@/types/workComponent";

export const SquaresFloatInTheAir:WorkComponent = ({size,showInfo}) => {
  const props: SketchLayoutProps = {
    title: 'Squares float in the air',
    description: 'This is one of study for 3D Generative Art.',
    sketch: twoSketch,
    size, showInfo
  }
  return <SketchLayout {...props}/>
}
