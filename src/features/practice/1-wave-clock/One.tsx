'use client'
// @ts-ignore
import {NextReactP5Wrapper} from "@p5-wrapper/next";
import {sketch} from "@/features/practice/1-wave-clock/sketch";
import {WorkLayout} from "@/components/Layout/WorkLayout";
import {useLoading} from "@/hooks/useLoading";
import {useWindowSize} from "@/hooks/useWindowSize";

export const One = () => {
  const {isLoading, noticeLoaded} = useLoading()

  const [w, h] = useWindowSize()

  return (
    <WorkLayout
      title={'Study for Learning the Basics of Generative Art: Inspired byMatt Pearson\'s "Wave Clock"'}
      description={'This is imitation of his work to study learning Generative Art. this is NOT my original work.'}
      isLoading={isLoading}
    >
      <NextReactP5Wrapper className='absolute left-0 top-0' sketch={sketch({w, h, noticeLoaded})}/>
    </WorkLayout>
  )
}
