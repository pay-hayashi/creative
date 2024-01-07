'use client'
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";
import {netSketch} from "@/features/practice/net/sketch";

export const Net = () => {
  const props: SketchLayoutProps = {
    title: 'Net',
    description: 'This is one of study for 3D Generative Art.',
    sketch: netSketch
  }
  return <SketchLayout {...props}/>
}
