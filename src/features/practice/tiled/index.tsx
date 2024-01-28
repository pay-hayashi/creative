'use client'
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";
import {threeSketch} from "@/features/practice/tiled/threeSketch";
import {WorkComponent} from "@/types/workComponent";

export const Tiled: WorkComponent = ({size, showInfo}) => {
  const props: SketchLayoutProps = {
    title: 'Tiled',
    description: 'This is experiment. I will try to fill empty space with tiles.',
    sketch: threeSketch,
    size, showInfo
  }
  return <SketchLayout {...props} />
}
