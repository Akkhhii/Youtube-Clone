import Navbar from '../components/Navbar'
import Categories from '../components/categories'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FeedContext } from '../contexts/FeedContext';
import { useFetchData } from '../customHooks/useFetchData';
import { useViewConverter } from '../customHooks/useViewConverter';
import moment from 'moment'

// const apiKey = import.meta.env.VITE_API_KEY

const feed = () => {

  const navValue = useSelector((state) => state.sidebarHandler.navValue)

  const { setVideoId, setVideoTitle, setChannelTitle, setVideoDescription, setCommentsCount, setChannelId, setViewCount, setLikeCount } = useContext(FeedContext);

  const { data, loading, error } = useFetchData(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics%2C%20snippet&chart=mostPopular&hl=en&maxResults=50&regionCode=US&videoCategoryId=0&key=`)

  // console.log(data);

  const handleVideoId = (Vid, vtitle, ctitle, vDesc, commentcount, viewcount, likecount, cid) => {
    setVideoId(Vid)
    setVideoTitle(vtitle)
    setChannelTitle(ctitle)
    setVideoDescription(vDesc)
    setCommentsCount(commentcount)
    setViewCount(viewcount)
    setLikeCount(likecount)
    setChannelId(cid)
  }


  return (
    <>
      <div className='maincontainer w-full h-screen relative'>
        <Navbar />
        <Sidebar />
        <Categories />
        <div className={` ${navValue ? ' w-[90%] h-[85%] lg:w-[93%] lg:h-[85%] md:w-[80%] md:h-[88%] lg:left-[7em] ' : 'h-[84%] lg:w-[86%] lg:h-[85%] md:w-[80%] md:h-[88%] lg:left-[15em]'} text-white p-4 relative lg:top-[-49em] lg:left-[7em] md:top-[-65.5em] md:left-[9em] top-[8em] left-[1.3em] transition-all duration lg:grid lg:grid-cols-5 lg:grid-rows-auto grid grid-cols-2 gap-x-4 gap-y-[5em]   overflow-y-scroll no-scrollbar bottom-10`}>

          {
            loading ?
              data.map((item, index) => (
                <div className='w-[100%] h-[135%] ' key={index}>
                  <div className="videocontainer  w-[100%] h-[60%] " id={item.id} onClick={() => handleVideoId(item.id, item.snippet.title, item.snippet.channelTitle, item.snippet.description, item.statistics.commentCount, item.statistics.viewCount, item.statistics.likeCount, item.snippet.channelId)}>
                    <Link to="/Video">
                      <img src={item.snippet.thumbnails.medium.url} className='w-[100%] h-[100%] hover:rounded-none rounded-xl transition-all duration-200 cursor-pointer'></img>
                    </Link>
                  </div>
                  <div className="contentcontainer  w-[100%] h-[30%] flex">
                    <div className="profilepiccontainer w-[15%] h-[80%]  flex items-center justify-center">
                      <img src={item.snippet.thumbnails.medium.url} alt="profile image" className='w-[80%] h-[55%] rounded-full' />
                    </div>
                    <div className="textContainer w-[85%] h-[100%] md:text-[0.8em] relative flex flex-nowrap  text-[0.2em] bg--500">
                      <div className='bg--400 w-[100%] h-[62%] relative overflow-hidden'>
                        <p className='py-2 px-5 font-bold'>{item.snippet.title}</p>
                      </div>
                      <div className='w-[100%] h-10 absolute bottom-0 flex flex-col justify-between bg-rd-700  px-5  font-semibold py-5 md:py-1'>

                        <p className='text-stone-400'>{item.snippet.channelTitle}</p>

                        <div className='bg--500 w-[100%] h-[100%] bottom-0 relative flex gap-3'>
                          <p>{useViewConverter(item.statistics.viewCount)}</p>
                          <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              )) :
              <div>
                
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default feed