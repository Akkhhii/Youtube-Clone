import { createContext, useState } from "react";

export const FeedContext = createContext();

const FeedContextProvider = ({children})=>{

    const [categoriesId, setCategoriesId] = useState([]);
    const [videoId, setVideoId] = useState([]);
    const [videoTitle, setVideoTitle] = useState([])
    const [ChannelTitle, setChannelTitle] = useState([])
    const [subscribers, setSubscribers] = useState([])
    const [videoDescription, setVideoDescription] = useState([])
    const [CommentsCount, setCommentsCount] = useState([])
    const [Comments, setComments] = useState([])
    const [ChannelId, setChannelId] = useState([])
    const [likeCount, setLikeCount] = useState([])
    const [viewCount, setViewCount] = useState([])
    const [channelImage, setChannelImage] = useState([])
    const [timeFormat, setTimeFormat] = useState([])

    return(
    <FeedContext.Provider value={{categoriesId, setCategoriesId, videoId, setVideoId, videoTitle, setVideoTitle, ChannelTitle, setChannelTitle, subscribers, setSubscribers, videoDescription, setVideoDescription, CommentsCount, setCommentsCount, Comments, setComments, ChannelId, setChannelId, likeCount, setLikeCount, viewCount, setViewCount, channelImage, setChannelImage, timeFormat, setTimeFormat}}>
        {children}
    </FeedContext.Provider>
    )
}

export default FeedContextProvider