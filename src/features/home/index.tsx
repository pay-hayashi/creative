import {worksList} from "@/app/works";

export const Home = () => {
  return (
    <div>
      <div className='flex'>
        {
          worksList.map(({path, name, Component}) => (
            <div key={path} className='w-60 aspect-square bg-gray-100'>
              <Component size={{width:240,height:240}} showInfo={false}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
