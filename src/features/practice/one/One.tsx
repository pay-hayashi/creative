'use client'
// @ts-ignore
import {NextReactP5Wrapper} from "@p5-wrapper/next";
import {sketch} from "@/features/practice/one/sketch";
import {useEffect, useLayoutEffect, useState} from "react";
import {WorkLayout} from "@/components/Layout/WorkLayout";

export const One = () => {
  const [[w, h], setSize] = useState([0, 0])
  const setCurrentSize = () => setSize([window.innerWidth, window.innerHeight])

  useEffect(setCurrentSize, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    window.addEventListener('resize', () => {
      clearTimeout(timer)
      timer = setTimeout(setCurrentSize, 200)
    })
  }, [])

  return (
    <WorkLayout
      title={'Study for Learning the Basics of Generative Art: Inspired byMatt Pearson\'s "Wave Clock"'}
      description={'This is imitation of his work to study learning Generative Art. this is NOT my original work.'}
    >
      <NextReactP5Wrapper className='absolute left-0 top-0' sketch={sketch({w, h})}/>
    </WorkLayout>
  )
}
