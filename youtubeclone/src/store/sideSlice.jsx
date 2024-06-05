import { createSlice } from "@reduxjs/toolkit"

const sideSlice = createSlice({
  name:"sidebarHandler",
  initialState : {
    navValue : true,
  },
  reducers : {
    setNavValue : (state, action)=>{
        state.navValue = action.payload
    },
    
  },
})


export const { setNavValue } = sideSlice.actions
export default sideSlice.reducer