import { useContext, useState, useEffect } from "react";
import { FeedContext } from "../contexts/FeedContext";
import { useFetchData } from "../customHooks/useFetchData";
import { useViewConverter } from "../customHooks/useViewConverter";
import { useCommentsConverter } from "../customHooks/useCommentConverter";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useSelector } from "react-redux";
import { IoTriangle } from "react-icons/io5";
import axios from "axios";
import moment from 'moment'

import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaBell } from "react-icons/fa";

//Channel URL
// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]

//Comments URL
// https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Rzo_IEz8vmg&key=[YOUR_API_KEY]

const apiKey = import.meta.env.VITE_API_KEY

const Video = () => {

  const {videoId, setVideoId, videoTitle, setVideoTitle, ChannelTitle, setChannelTitle, subscribers, setSubscribers, videoDescription, setVideoDescription, CommentsCount, setCommentsCount, Comments, setComments, ChannelId, setChannelId, likeCount, setLikeCount, viewCount, setViewCount, channelImage, setChannelImage, timeFormat, setTimeFormat } = useContext(FeedContext)

  const [discValue, setDiscValue] = useState(false)

  const navValue = useSelector((state) => state.sidebarHandler.navValue)

  const { data, loading, error } = useFetchData(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics%2C%20snippet&chart=mostPopular&hl=en&maxResults=100&regionCode=US&videoCategoryId=0&key=`)

  // console.log(data);

  const handledDiscValue = () => {
    setDiscValue(!discValue)
  }

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`)
      setComments(response.data.items)
    }
    fetchComments()

  }, [videoId])

  useEffect(() => {
    const fetchChannelInfo = async () => {
      const response2 = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${ChannelId}&key=${apiKey}`)
      const channelData = response2.data.items
      if(channelData.length > 0){
        setSubscribers(channelData[0].statistics.subscriberCount)
        setChannelImage(channelData[0].snippet.thumbnails.medium.url)
      }
    }

    fetchChannelInfo()
  }, [ChannelId])

  const handleVideoId = (Vid, vtitle, ctitle, vDesc, commentcount, viewcount, likecount, cid, TimeFormat) => {
    setVideoId(Vid)
    setVideoTitle(vtitle)
    setChannelTitle(ctitle)
    setVideoDescription(vDesc)
    setCommentsCount(commentcount)
    setViewCount(viewcount)
    setLikeCount(likecount)
    setChannelId(cid)
    setTimeFormat(TimeFormat)
  }


  return (
    <>
      <div className="main bg-yllow-300 lg:bg-rd-600 w-full h-screen relative ">
        <Navbar />
        <Sidebar />
        <div className={`bg-ble-400 ${navValue ? 'md:w-[85%] md:bg-rd-400 lg:w-[70%]' : ' md:w-[60.1%] lg:w-[63%]'} w-[100%] h-[30%] md:h-[24.2%] top-[5em] lg:h-[50%] absolute md:right-0 transition-all duration-200 lg:right-[29.7em] px-1 py-2`}>
          <iframe width="1250" height="703" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube Clone Using React JS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-[100%] h-[100%] rounded-xl"></iframe>
        </div>
        <div className={`bg-inc-400 ${navValue ? '  md:w-[85%] lg:w-[70%]' : 'md:w-[60.1%] lg:w-[63%]'} w-[100%] h-[10%] md:top-[22.8em] top-[21.8em] lg:top-[33.7em] lg:h-[10%] absolute md:right-0 transition-all duration-200 lg:right-[29.7em] `}>
          <div className="w-[100%] lg:w-[100%] md:w-[100%] h-[50%] flex px-5 lg:px-7 font-bold text-[0.8em] lg:text-[1em] text-white tracking-wider bg-rd-500 justify-center flex-col lg:gap-0 gap-[0.2em]">
            <p>{videoTitle}</p>
            <div className="flex gap-4 text-[0.8em] lg:text-[0.8em] font-semibold ">
            <p>{useViewConverter(viewCount)} <span>:</span> {moment(timeFormat).fromNow()}</p>
            </div>
          </div>
          <div className=" w-[100%] lg:w-[100%] md:w-[100%] h-[100%] flex px-4">
            <div className="bg-gren-400 w-[10%] h-[50%] lg:w-[7%] flex justify-ceter items-center">
              <img src={channelImage} alt="" className={`rounded-full ${navValue ? 'lg:w-[45%] lg:h-[90%] md:w-[65%] md:h-[70%]' : 'md:w-[85%] md:h-[66%] lg:w-[50%] lg:h-[90%]'} w-[90%] h-[80%] lg:w-[48%] lg:left-2 lg:top-[0] top-[-0.3em] relative`} />
            </div>
            <div className="bg-gren-700 w-[90%] h-[50%] text-white text-[0.6em] md:text-[0.7em] lg:text-[0.8em] tracking-wide ">
              <div className="w-[100%] h-[50%] bg-lue-500 px-2 font-semibold text-zinc-300">
                <p>{ChannelTitle}</p>
              </div>
              <div className="w-[100%] h-[50%] bg-rd-500 px-2 flex justify-between " >
                <p>{useCommentsConverter(subscribers)} Subscribers</p>
                <div className={`w-[68%] ${navValue ? ' md:w-[35%]' : ' md:w-[55%]'} lg:w-[25%] h-[100%] relative top-[-0.5em] flex items-center px-3 gap-3 bg-ed-500`}>
                  <div className="flex gap-2 items-center">
                  <BiSolidLike size={15}/>
                  <p>{useCommentsConverter(likeCount)}</p>
                  </div>
                  <BiSolidDislike size={15}/>
                  <button className="absolute right-2 bg-red-900 w-[50%] h-[90%] lg:w-[35%] rounded-full font-medium flex justify-center items-center gap-2">Subscribe <FaBell size={15}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-znc-700 ${navValue ? ' md:w-[85%] lg:w-[70%]' : 'md:w-[60.1%] lg:w-[63%]'} w-[100%] h-[27%] md:h-[32%] md:top-[30em] top-[27.5em] lg:top-[39.4em] lg:h-[31.4%] absolute md:right-0 transition-all duration-200 lg:right-[29.7em] flex flex-col items-center py-2`}>
          <div className={`w-[95%] ${discValue ? 'h-[73%]' : 'h-[10%]'} bg-zinc-800 rounded-lg absolute z-30 text-white  flex justify-between px-5 transition-all duration-300`}>
            <p className="relative top-[0em] md:top-[0.4em] lg:top-[0.1em]">Description</p>
            <p className="cursor-pointer top-[0.25em] md:top-[0.8em] lg:top-[0.5em] relative" onClick={() => handledDiscValue()}><IoTriangle className={`${discValue ? 'rotate-360' : 'rotate-180'} transition-all duration-100`} size={12} /></p>
            <div className={`${discValue ? '' : 'invisible'} absolute left-0 w-[100%] bg-zinc-800 h-[80%] md:h-[95%] lg:h-[112%] md:top-[2.5em] bottom-0 overflow-y-scroll no-scrollbar py-2 px-5`}>
              <p>{videoDescription}</p>
            </div>
          </div>
          <div className="w-[95%] h-[64%] top-[2em] md:top-[3em] md:h-[70%] lg:h-[83%] relative bg-geen-300 rounded-lg z-10">
            <div className="w-[100%] h-6 bg-rd-500 text-white px-5 flex gap-5 text-[0.9em] lg:text-[1em] border-b-[1px] border-zinc-600">
              <p>{useCommentsConverter(CommentsCount)} Comments</p>
            </div>
            <div className="bg-znc-500 w-[100%] h-[84%] md:h-[90%] overflow-y-scroll no-scrollbar gap-5 flex flex-col">
              {
                Comments.map((items, index) => (
                  <div key={index} className="w-[100%] bg-zinc-900 h-10 md:h-[4em] lg:h-[5em] flex px-0 rounded-xl">
                    <div className="bg-zinc-800 w-[30%] h-[2.5em] md:w-[35%] md:h-[4em] lg:w-[25%] lg:h-[5em] flex justify-between items-center gap-5 text-white rounded-xl md:px-5 overflow-hidden">
                      <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className={`${navValue ? 'lg:w-[15%] lg:h-[55%] md:w-[20%] md:h-[61%]' : 'lg:w-[18%] lg:h-[55%] md:w-[28%] md:h-[50%]'} w-[25%] h-[75%] rounded-full `} />
                      <div className="lg:text-[0.8em] md:text-[0.7em] text-[0.7em] right-3  relative transition-all">
                        <p>{items.snippet.topLevelComment.snippet.authorDisplayName}</p>
                      </div>
                    </div>
                    <div className="bg-bue-400 w-[65%] h-[100%] px-2 md:p-2 md:px-8 lg:justify-start  overflow-y-scroll no-scrollbar text-[0.8em] md:text-[0.8em] lg:text-[1em] text-white flex left-3 md:left-0 relative md:items-center ">
                      <p>{items.snippet.topLevelComment.snippet.textDisplay}</p>
                    </div>
                  </div>
                ))
              }

              {/* <div className="w-[100%] bg-zinc-900 h-10 md:h-[4em] lg:h-[5em] flex px-0 rounded-xl">
                <div className="bg-zinc-800 w-[10%] h-[2.5em] md:w-[35%] md:h-[4em] lg:w-[7%] lg:h-[5em] flex justify-center items-center gap-5 text-white rounded-xl">
                  <img src="https://images.unsplash.com/photo-1716659119388-efd4ef74bae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="" className={`${navValue ? 'lg:w-[50%] lg:h-[55%] md:w-[20%] md:h-[65%]' : 'lg:w-[55%] lg:h-[55%] md:w-[100%] md:h-[70%]'} w-[95%] h-[90%] rounded-full `} />
                  <div className="">
                    <p>nomad gfgnhmj,k</p>
                  </div>
                </div>
                <div className="bg-bue-400 w-[65%] h-[100%] px-2 md:p-2 md:px-8 lg:justify-start  overflow-y-scroll no-scrollbar text-[0.8em] md:text-[0.8em] lg:text-[1em] text-white flex md:justify-center md:items-center ">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eveniet cupiditate, voluptatibus quas laudantium dolore culpa amet molestiae.</p>
                </div>
              </div> */}

            </div>
          </div>
        </div>
        <div className={`bg-znc-400 ${navValue ? 'md:w-[85%]' : 'md:w-[60.1%]'} w-[100%] h-[20em] md:h-[32.2%] md:top-[50em] top-[40em] lg:top-[5em] lg:w-[25%] lg:h-[91.3%] lg:right-0 absolute md:right-0 transition-all duration-200 flex flex-col items-center py-3 overflow-y-scroll no-scrollbar`}>
          {
            data.map((items, index) => (
              <div key={index} className={`bg-rd-400 w-[95%] h-[50%] md:h-[50%] lg:h-[20%] flex`}>
                <div className="bg-lue-400 w-[50%] h-[100%] flex justify-center items-center">
                  <img src={items.snippet.thumbnails.medium.url} alt="thumbnail" className="rounded-xl h-[80%] md:w-[100%] w-[70%]  md:h-[85%] lg:w-[100%] lg:h-[90%] cursor-pointer" onClick={() => handleVideoId(items.id, items.snippet.title, items.snippet.channelTitle, items.snippet.description, items.statistics.commentCount, items.statistics.viewCount, items.statistics.likeCount, items.snippet.channelId, items.snippet.publishedAt)} />
                </div>
                <div className="bg-lue-800 w-[50%] h-[100%] text-white font-semibold">
                  <div className="bg-re-400 w-[100%] h-[50%] text-[0.8em] overflow-hidden p-3">
                    <p>{items.snippet.title}</p>
                  </div>
                  <div className="bg-re-700 w-[100%] h-[50%] text-[0.8em] px-3 py-1">
                    <p className="text-zinc-300">{items.snippet.channelTitle}</p>
                    <p>{useViewConverter(items.statistics.viewCount)}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Video