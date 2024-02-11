import {worksList} from "@/app/works";
import Image from "next/image";

export const Home = () => {
  return (
    <div>
      <div className='w-full flex gap-3 flex-wrap'>
        {
          worksList.map(({path, name, Component}) => (
            <div key={path} className='aspect-square transition-transform hover:scale-110'>
              <a href={`/practice/${path}`}>
                <Image src={`/practice/${path}.png`} alt={path} width={300} height={300} />
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}
