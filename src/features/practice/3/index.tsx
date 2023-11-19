'use client'
import {SketchLayout, SketchLayoutProps} from "@/components/Layout";
import {threeSketch} from "@/features/practice/3/threeSketch";

export const Tiled = () => {
  const props: SketchLayoutProps = {
    title: 'Tiled',
    description: 'This is experiment. I will try to fill empty space with tiles.',
    sketch: threeSketch
  }
  return <SketchLayout {...props} />
}
