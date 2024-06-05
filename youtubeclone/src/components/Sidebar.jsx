import '../index.css'
import { useSelector } from 'react-redux'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";

import { FaRegAddressCard } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { RiPlayList2Fill } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

import { HiOutlineFire } from "react-icons/hi2";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { GiClapperboard } from "react-icons/gi";
import { HiMiniSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsTrophy } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { FeedContext } from '../contexts/FeedContext'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {

  const navValue = useSelector((state) => state.sidebarHandler.navValue)
  const { setCategoriesId } = useContext(FeedContext)

  const apikey = import.meta.env.VITE_API_KEY

  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=US&key=${apikey}`

  const navigate = useNavigate();

  const handleRoute = (categoryTitle) => {
    switch (categoryTitle) {
      case 'Home':
        navigate('/');
        break;

      default:
        break;
    }
  };

  //https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=US&key=

  const [categoryArray, setCategoryArray] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=US&key=${apikey}`)
      setCategoryArray(res.data.items)
      // console.log(res.data.items);
    }
    dataFetch()
  }, [])

  const sideArray = [
    {
      title: "Home",
      icon: <MdHomeFilled />,
    },
    {
      id: 42,
      title: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      title: "Subscriptions",
      icon: <MdSubscriptions />,
    },
    {
      title: "You",
      icon: <BiSolidVideos />,
    }
  ]

  const sideArray2 = [
    {
      title: "Your channel",
      icon: <FaRegAddressCard />,
    },
    {
      title: "History",
      icon: <LuHistory />,
    },
    {
      title: "Playlists",
      icon: <RiPlayList2Fill />,
    },
    {
      title: "Your videos",
      icon: <GoVideo />,
    },
    {
      title: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      title: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ]

  // const sideArray3 = [
  //   {
  //     // id:,
  //     title: 'Trending',
  //     icon: <HiOutlineFire />,
  //   },
  //   {
  //     // id: ,
  //     title: 'Shopping',
  //     icon: <RiShoppingBag4Line />,
  //   },
  //   {
  //     id: 10,
  //     title: 'Music',
  //     icon: <IoMusicalNoteOutline />,
  //   },
  //   {
  //     id: 30,
  //     title: 'Movies',
  //     icon: <GiClapperboard />,
  //   },
  //   {
  //     // id:,
  //     title: 'Live',
  //     icon: <HiMiniSignal />,
  //   },
  //   {
  //     id: 20,
  //     title: 'Gaming',
  //     icon: <SiYoutubegaming />,
  //   },
  //   {
  //     // id:,
  //     title: 'News',
  //     icon: <IoNewspaperOutline />,
  //   },
  //   {
  //     id: 17,
  //     title: 'Sports',
  //     icon: <BsTrophy />,
  //   },
  //   {
  //     // id:,
  //     title: 'Course',
  //     icon: <GoLightBulb />,
  //   },
  //   {
  //     // id:,
  //     title: 'Fashion & Beauty',
  //     icon: <GiHanger />,
  //   },
  //   {
  //     // id:,
  //     title: 'Podcasts',
  //     icon: <MdOutlinePodcasts />,
  //   }
  // ]
  const sideArrayLogo = [
    {
      icon: <HiOutlineFire />,
    },
    {
      icon: <RiShoppingBag4Line />,
    },
    {
      icon: <IoMusicalNoteOutline />,
    },
    {
      icon: <GiClapperboard />,
    },
    {
      icon: <HiMiniSignal />,
    },
    {
      icon: <SiYoutubegaming />,
    },
    {
      icon: <IoNewspaperOutline />,
    },
    {
      icon: <BsTrophy />,
    },
    {
      icon: <GoLightBulb />,
    },
    {
      icon: <GiHanger />,
    },
    {
      icon: <MdOutlinePodcasts />,
    }
  ]

  const sideArraySlice = sideArray.slice(0, 3)

  const handleId = (id) => {
    setCategoriesId(id)
  }

  return (
    <>
      <div className={`sidebar-container bg-black absolute w-[0] h-[60em] bg-stne-950  md:relative ${navValue ? 'lg:h-[57.4em] md:h-[73.6em] md:left-[-45%]  lg:w-[5%] lg:left-[0] md:w-[60%] z-[35] ' : 'lg:h-[57.4em] md:h-[73.6em] left-[0] lg:w-[12%]  w-[55%] md:w-[23%] z-40'} transition-all linear duration-200 md:w-[40%] text-white pt-[5em] flex flex-col items-center overflow-y-scroll no-scrollbar`}>
        {
          navValue ?
            <>

              <div className='w-[100%] h-[60%] flex flex-col items-center gap-4 invisible md:visible'>
                {
                  sideArray.map((items, index) => (
                    <div key={index} className='logos w-[60%] h-[5em] hover:bg-zinc-800 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-4 md:left-[38%] lg:left-[0] relative hover:md:w-[15%] hover:md:h-[13%] hover:lg:w-[62%] hover:lg:h-[16%]' onClick={() => handleRoute(items.title)} >
                      <span className='text-2xl'>{items.icon}</span>
                      <div className='w-[20%] h-[20%] flex justify-center px-10 text-[0.6em] '>
                        <p className=''>{items.title}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </> :
            <>

              <div className=' w-[100%] h-[100%] flex flex-col items -center py-2 items-center gap-5'>

                <div className=' w-[95%] h-[20%] flex flex-col justify-center items-center gap-3 border-b-[1px] border-zinc-700'>
                  {
                    sideArraySlice.map((items, index) => (
                      <div key={index} className='w-[100%] h-8 flex justify-between px-8 hover:bg-zinc-800 rounded-md cursor-pointer' onClick={() => handleRoute(items.title)} >
                        < span className='text-2xl py-1'>{items.icon}</span>
                        <span className=' w-[70%] text-[0.8em] flex justify-start items-center'>{items.title}</span>
                      </div>
                    ))
                  }

                </div>

                <div className=' w-[95%] h-[40%] flex flex-col justify-center items-center gap-3 border-b-[1px] border-zinc-700'>

                  <span className=' w-[100%] h-10 flex items-center px-8 text-lg font-semibold cursor-pointer'>You </span>

                  {
                    sideArray2.map((items, index) => (
                      <div key={index} className='w-[100%] h-8 flex justify-between px-8 hover:bg-zinc-800 rounded-md cursor-pointer'>
                        <span className='text-2xl py-1'>{items.icon}</span>
                        <span className=' w-[70%] text-[0.8em] flex justify-start items-center'>{items.title}</span>
                      </div>
                    ))
                  }

                </div>

                <div className=' w-[95%] h-[80%] flex flex-col justify-center items-center gap-3 border-b-[1px] border-zinc-700'>

                  <span className=' w-[100%] h-10 flex items-center px-8 text-lg font-semibold cursor-pointer'>Explore </span>

                  {/* {
                    sideArray3.map((items, index) => (
                      <div key={index} className='w-[100%] h-8 flex justify-between px-8 hover:bg-zinc-800 rounded-md cursor-pointer ' onClick={() => handleId(items.id)}>
                        <span className='text-2xl py-1'>{items.icon}</span>
                        <span className=' w-[70%] text-[0.8em] flex justify-start items-center'>{items.title}</span>
                      </div>
                    ))
                  } */}
                  {
                    categoryArray.slice(0, 15).map((items, index) => (
                      <Link to='/category' key={index} className='w-[100%] h-8 flex justify-between hover:bg-zinc-800 rounded-md cursor-pointer ' onClick={() => handleId(items.id)}>
                        <span className='text-2xl py-1'>{items.icon}</span>
                        <span className=' w-[70%] text-[0.8em] flex justify-start items-center'>{items.snippet.title}</span>
                      </Link>
                    ))
                  }

                </div>


              </div>

            </>
        }

      </div >
    </>
  )
}

export default Sidebar
