'use client'
// @ts-ignore
import {NextReactP5Wrapper} from "@p5-wrapper/next";
import {sketch} from "@/features/practice/one/sketch";
import {useEffect, useLayoutEffect, useState} from "react";

export const One = () => {
  const [[w, h], setSize] = useState([0, 0])
  const setCurrentSize = () => setSize([window.innerWidth, window.innerHeight])

  useLayoutEffect(setCurrentSize, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    window.addEventListener('resize', () => {
      clearTimeout(timer)
      timer = setTimeout(setCurrentSize, 200)
    })
  }, [])
  return (
    <div className='relative'>
      <div className='m-5 p-5 h-50 absolute top-0 left-0 text-white bg-black/50 flex flex-col gap-5'>
        <h1 className='text-3xl'>Study for Learning the Basics of Generative Art: Inspired by
          Matt {"Pearson's"} {'"Wave Clock"'}</h1>
        <p>This is imitation of his work to study learning Generative Art. this is NOT my original work.</p>
      </div>
      <NextReactP5Wrapper className='absolute left-0 top-0' sketch={sketch({w, h})}/>
    </div>
  )
}
