import React from 'react'
import { useSelector } from 'react-redux'

const categories = () => {

  const categoriesArray = ['All', 'Live', 'Gaming', 'JavaScript', 'Music', 'Options Strategies', 'Manga', 'CPUs', 'Data Structures', 'Mixes', 'AI', 'Rendering', 'Python', 'Editing', 'Job interviews', 'Baking', 'Test', 'Recently Uploaded', 'Watched', 'New to you']

  const navValue = useSelector((state)=>state.sidebarHandler.navValue)

  return (
    <>
        <div className={`categoriescontainer ${navValue ? 'lg:w-[95%] md:w-[85%]' : ' w-[100%] md:w-[76%] lg:w-[88%]' } w-[94%] right-2 h-16 absolute text-white top-[4.2em] z-30 flex p-4 gap-10 overflow-x-scroll no-scrollbar transition-all duration-200 overflow-y-hidden`}>
          {
            categoriesArray.map((categories, idx)=>(
            <div key={idx} className={`bg-zinc-800 flex justify-center items-center h-[2em] rounded-md p-3 whitespace-nowrap cursor-pointer`}>
              <p>{categories}</p>
            </div>
            ))
          }
            
        </div>
    </>
  )
}

export default categories