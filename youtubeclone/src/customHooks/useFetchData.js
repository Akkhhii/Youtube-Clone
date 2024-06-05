import { useEffect, useState } from 'react'
import axios from 'axios'
import categories from '../components/categories';

const apiKey = import.meta.env.VITE_API_KEY;

 export const useFetchData= (url)=>{
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetailvideoUrl+s%2C%20statistics&chart=mostPopular&hl=en&maxResults=50&regionCode=US&key=${apiKey}`
  // https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=US&key=${apikey}

    useEffect(()=>{
      setLoading(false)
        const fetchDataFromURL = async()=>{
            try {
              const response = await axios.get(url+apiKey)
              // console.log(response.data.items);
              setData(response.data.items)
            } catch (error) {
              setError(error)
            }finally{
              setLoading(true)
            }
        }
        fetchDataFromURL()
    },[apiKey, url])

    return {data, loading, error}
}

// export default useFetchData