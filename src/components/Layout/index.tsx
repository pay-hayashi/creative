import {ReactNode} from "react";
// @ts-ignore
import {NextReactP5Wrapper} from "@p5-wrapper/next";
import {useLoading} from "@/hooks/useLoading";
import {useWindowSize} from "@/hooks/useWindowSize";
import {SketchWrapper} from "@/types/sketch";
import {twMerge} from "tailwind-merge";

type WorkLayoutProps = {
  title: string
  description: string
  children: ReactNode
  isLoading: boolean
  showInfo?: boolean
}
export const WorkLayout = ({title, description, children, isLoading, showInfo = true}: WorkLayoutProps) => {
  return (
    <div className='relative'>
      <div
        id="loading"
        className={twMerge(
          'w-full h-full fixed top-0 left-0 z-50 bg-white transition-opacity duration-500 pointer-events-none',
          isLoading ? 'opacity-100' : 'opacity-0',
        )}
      >
      </div>
      {
        showInfo ? (
          <div className='m-5 p-5 h-50 absolute top-0 left-0 text-white bg-black/50 flex flex-col gap-5'>
            <h1 className='text-3xl'>{title}</h1>
            <p>{description}</p>
          </div>
        ) : null
      }
      {children}
    </div>
  )
}

export type SketchLayoutProps =
  Omit<WorkLayoutProps, 'children' | 'isLoading'>
  & {
  sketch: SketchWrapper
  size?: {
    width: number
    height: number
  }
}
export const SketchLayout = ({title, description, sketch, size, showInfo}: SketchLayoutProps) => {
  const {isLoading, noticeLoaded} = useLoading()

  const [w, h] = useWindowSize({size})

  const props = {title, description, isLoading, sketch: sketch({w, h, noticeLoaded}), showInfo}

  return (
    <WorkLayout {...props}>
      <NextReactP5Wrapper className='absolute left-0 top-0' sketch={props.sketch}/>
    </WorkLayout>
  )
}

