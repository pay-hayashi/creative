'use client'
import Image from "next/image";
import {twMerge} from "tailwind-merge";
import {useState} from "react";
import {worksList} from "@/app/works";

const useShiftedArray = (arr: any[]) => {
  const [shift, setShift] = useState(0)
  const shiftedArray = arr.slice(shift).concat(arr.slice(0, shift))
  const plusShift = () => setShift((shift + 1) % arr.length)
  const minusShift = () => setShift((shift - 1 + arr.length) % arr.length)
  return {shiftedArray, plusShift, minusShift}
}

const usePositions = (length: number) => {
  const posFront = 'translate-x-[calc(-50%-100px)] translate-y-[calc(150px)] -z-0 opacity-0 pointer-events-none'
  const positions = [
    'translate-x-[calc(-50%-050px)] translate-y-[calc(100px)] -z-10',
    'translate-x-[calc(-50%+000px)] translate-y-[calc(050px)] -z-20',
    'translate-x-[calc(-50%+050px)] translate-y-[calc(000px)] -z-30',
  ]
  const posBack = 'translate-x-[calc(-50%+100px)] translate-y-[calc(-50px)] -z-40 opacity-0'
  const rawPositions = positions.concat(Array(length - positions.length - 1).fill(posBack)).concat(posFront)
  const {shiftedArray, plusShift, minusShift} = useShiftedArray(rawPositions)
  return {classes: shiftedArray, plusShift, minusShift}
}

export const Home = () => {
  const duplicated = [...worksList, ...worksList]
  const {classes, plusShift, minusShift} = usePositions(duplicated.length)
  return (
    // 縦に並べる。間隔をgapで指定する。
    <div className='my-4 flex flex-col gap-4'>
      <div className='w-full h-[calc(600px+100px)] relative -z-0'>
        {
          duplicated.map(({path, name, Component}, index) => (
            <div key={index} className={twMerge(
              'w-4/5 max-w-[1024px] absolute left-1/2',
              'transition-all duration-500',
              classes[index]
            )}>
              <a href={`/practice/${path}`}>
                <Image src={`/practice/${path}.png`} alt={path} width={1280} height={720}/>
              </a>
            </div>
          ))
        }
      </div>
      <div className='flex justify-center'>
        <button className='w-10 h-10 border' onClick={minusShift}>-</button>
        <button className='w-10 h-10 border' onClick={plusShift}>+</button>
      </div>
    </div>
  )
}
