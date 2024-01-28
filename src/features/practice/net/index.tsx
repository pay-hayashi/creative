'use client'
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";
import {netSketch} from "@/features/practice/net/sketch";
import {WorkComponent} from "@/types/workComponent";

export const Net: WorkComponent = ({size, showInfo}) => {
  const props: SketchLayoutProps = {
    title: 'Net',
    description: 'This is one of study for 3D Generative Art.',
    sketch: netSketch,
    size, showInfo
  }
  return <SketchLayout {...props}/>
}
