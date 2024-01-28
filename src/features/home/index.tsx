import {worksList} from "@/app/works";

export const Home = () => {
  return (
    <div>
      <div className='w-full flex gap-3 flex-wrap'>
        {
          worksList.map(({path, name, Component}) => (
            <div key={path} className='aspect-square transition-transform hover:scale-110'>
              <Component size={{width: 240, height: 240}} showInfo={false}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
