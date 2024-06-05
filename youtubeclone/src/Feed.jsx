import Navbar from '../components/Navbar'
import Categories from '../components/categories'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios'
import useFetchData from '../customHooks/useFetchData';

const feed = () => {

  const navValue = useSelector((state) => state.sidebarHandler.navValue)

  // const apiKey = import.meta.env.VITE_API_KEY;

  // const [data, setData] = useState([])

  // const categoriesArray = Object.values(data);

  // console.log(categoriesArray);

  // const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&hl=en&maxResults=20&regionCode=US&key=${apiKey}`

  // const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=US&key=${apiKey}`

  // useEffect(()=>{
  //   const fetchDataFromURL = async()=>{
  //       try {
  //         const response = await axios.get(videoURL)
  //         // console.log(response);
  //         setData(response)
  //       } catch (error) {
  //         throw error
  //       }
  //   }
  //   fetchDataFromURL()
  // }, [apiKey])

  const { data } = useFetchData({})


  return (
    <>
      <div className='maincontainer w-full h-screen relative'>
        <Navbar />
        <Sidebar />
        <Categories />
        <div className={` ${navValue ? 'bg-red-500 w-[90%] h-[80%] lg:w-[93%] lg-[85%] md:w-[80%] md:h-[88%]' : ' lg:w-[86%] lg:h-[85%] md:w-[80%] md:h-[88%] lg:left-[15.5em]'} bg-zinc-800 text-white p-4 relative lg:top-[-49em] lg:left-[7em] md:top-[-65.5em] md:left-[9em] top-[8em] left-[1.3em] transition-all duration lg:grid lg:grid-cols-5 lg:grid-rows-4 gap-5 gap-y-[6em]  overflow-y-scroll no-scrollbar bottom-10 `}>


<div className='w-[100%] h-[100%]  relative'>
                <div className="videocontainer  w-[100%] h-[150%] ">
                  <img src="https://images.unsplash.com/photo-1716377239833-54b55d732bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" className='w-[100%] h-[100%] hover:rounded-lg transition-all duration-200'></img>
                </div>
                <div className="contentcontainer  w-[100%] h-[25%] flex">
                  <div className="profilepiccontainer w-[15%] h-[100%]  flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHN8ZW58MHx8MHx8fDA%3D" alt="profile image" className='w-[80%] h-[60%] rounded-full' />
                  </div>
                  <div className="textContainer w-[85%] h-[100%] text-[0.8em]   relative ">
                    <p className='py-2 px-5'>dfcghvbjntfrdcfrjgfhgyufhg</p>
                    <div className='w-[100%] h-6 absolute bottom-0 flex justify-start gap-10 px-5'>
                      <p>gfhj</p>
                      <p>gfhj</p>
                    </div>

                  </div>
                </div>

              </div>

          {
            data.map((item) => (
               console.log(item.snippet.thumbnails.medium.url)
              
            ))
          }

        </div>
      </div>
    </>
  )
}

export default feed