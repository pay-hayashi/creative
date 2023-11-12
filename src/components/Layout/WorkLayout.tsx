import {ReactNode} from "react";

type WorkLayoutProps = {
  title: string
  description: string
  children: ReactNode
}
export const WorkLayout = ({title,description,children}:WorkLayoutProps) =>{
  return (
    <div className='relative'>
      <div className='m-5 p-5 h-50 absolute top-0 left-0 text-white bg-black/50 flex flex-col gap-5'>
        <h1 className='text-3xl'>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  )
}
