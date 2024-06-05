import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { FeedContext } from '../contexts/FeedContext'
import { useFetchData } from '../customHooks/useFetchData'
import { useSelector } from 'react-redux'
import { useViewConverter } from '../customHooks/useViewConverter'
import { Link } from 'react-router-dom'


const CategoryPage = () => {

    const navValue = useSelector((state)=>state.sidebarHandler.navValue)
    const { categoriesId } = useContext(FeedContext)

    const { data, loading, error } = useFetchData(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics%2C%20snippet&chart=mostPopular&hl=en&maxResults=50&regionCode=US&videoCategoryId=0&key=`)

    console.log(data);

    const {setVideoId, setVideoTitle, setChannelTitle, setVideoDescription, setCommentsCount, setChannelId, setLikeCount, setViewCount, setTimeFormat } = useContext(FeedContext)

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
        <div className='bg-rd-500 w-full h-screen relative flex'>
            <Navbar/>
            <Sidebar/>
            <div className={`bg-inc-700 ${navValue ? 'lg:w-[95%] lg:h-[91.3%] md:w-[85%] right-0 md:grid-cols-2 md:gap-3 md:grid lg:grid lg:grid-cols-5 lg:gap-2 lg:grid-rows-auto' : 'lg:w-[88%] lg:h-[91.3%] md:w-[60%] right-0 lg:grid lg:grid-cols-4 lg:gap-4 '} w-[100%] h-[46em] md:h-[68.7em] lg:h-[52.5sem] absolute flex flex-col gap-y-4 overflow-y-scroll no-scrollbar top-[5em] px-3 py-2 transition-all duration-200`}>
              
                {
                  data.filter((items)=>items.snippet.categoryId === categoriesId).map((item, index)=>( 
                    <div key={index} className='bg-rd-400 w-[23em] h-[16em] md:w-[100%]'>
                    <div className='bg-zic-400 w-[100%] h-[12em]' onClick={()=>handleVideoId(item.id, item.snippet.title, item.snippet.channelTitle, item.snippet.description, item.statistics.commentCount, item.statistics.viewCount, item.statistics.likeCount, item.snippet.channelId, item.snippet.publishedAt)}>
                      <Link to='/Video'>
                      <img src={item.snippet.thumbnails.medium.url} alt="thumbnail image" className='w-[100%] h-[100%] rounded-xl hover:rounded-none transition-all duration-200'/>
                      </Link>
                    </div>
                    <div className='bg-zic-800 w-[100%] h-[4em] flex'>
                      <div className='w-[20%] h-[100%] bg-bue-400 flex justify-center items-center'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" className='w-[50%] h-[60%] rounded-full'/>
                      </div>
                      <div className='w-[80%] h-[100%] bg-bue-800'>
                        <div className='bg-znc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                          <div className='w-[100%] h-[100%] bg-lue-500 overflow-hidden flex items-center text-white'><p>{item.snippet.title}</p></div>
                          
                        </div>
                        <div className='bg-znc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                          <p className='text-zinc-400'>{item.snippet.channelTitle}</p>
                          <p className='text-white'>{useViewConverter(item.statistics.viewCount)}</p>
                        </div>
                      </div>
                    </div>
                  </div> 
                  )) 
                }

               

                {/* <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div>

                <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div> */}
                {/* <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div>
                <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div>
                <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div>
                <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div>
                <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div>
                <div className='bg-red-400 w-[23em] h-[16em] md:w-[100%]'>
                  <div className='bg-zinc-400 w-[100%] h-[12em]'>
                    <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail image" className='w-[100%] h-[100%]'/>
                  </div>
                  <div className='bg-zinc-800 w-[100%] h-[4em] flex'>
                    <div className='w-[20%] h-[100%] bg-blue-400 flex justify-center items-center'>
                      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-[60%] rounded-full'/>
                    </div>
                    <div className='w-[80%] h-[100%] bg-blue-800'>
                      <div className='bg-zinc-400 w-[100%] h-[50%] text-[0.7em] px-2 font-semibold'>
                        <div className='w-[100%] h-[50%] bg-blue-500 overflow-hidden'><p>teri mayi ka choda bsdk wala jana</p></div>
                        <div className='bg-red-500 w-[100%] h-[50%] flex'>
                          <p>43M views :</p>
                        </div>
                      </div>
                      <div className='bg-zinc-500 w-[100%] h-[50%] px-2 text-[0.7em]'>
                        <p className='text-zinc-400'>channel title</p>
                        <p>200k subs</p>
                      </div>
                    </div>
                  </div>

                  
                </div> */}
                
            </div>
        </div>
    </>
  )
}

export default CategoryPage
