import { useEffect, useState } from 'react'
import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY;

const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&hl=en&maxResults=20&regionCode=US&key=${apiKey}`


export default function useFetchData(){

  const [data, setData] = useState([]);

  // console.log(data);

    useEffect(()=>{
        const fetchDataFromURL = async()=>{
            try {
              const response = await axios.get(videoURL)
              // console.log(response.data.items);
              setData(response.data.items)
            } catch (error) {
              throw error
            }
        }
        fetchDataFromURL()
    },[apiKey])

    return {data}
}