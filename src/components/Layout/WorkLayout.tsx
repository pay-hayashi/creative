import {ReactNode} from "react";

type WorkLayoutProps = {
  title: string
  description: string
  children: ReactNode
  isLoading: boolean
}
export const WorkLayout = ({title, description, children, isLoading}: WorkLayoutProps) => {
  return (
    <div className='relative'>
      <div
        id="loading"
        className={`w-full h-full fixed top-0 left-0 z-50 bg-white transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}
      >
      </div>
      <div className='m-5 p-5 h-50 absolute top-0 left-0 text-white bg-black/50 flex flex-col gap-5'>
        <h1 className='text-3xl'>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  )
}
