import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({
  name:"videoSliceHandler",
  initialState : {
    videoId : [],
  },
  reducers : {
    setVideoId : (state, action)=>{
        state.videoId = action.payload
    },
    
  },
})


export const { setVideoId } = videoSlice.actions
export default videoSlice.reducer