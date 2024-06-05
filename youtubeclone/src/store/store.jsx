import { configureStore } from '@reduxjs/toolkit';
import sideSlice from './sideSlice'
import videoSlice from './videoSlice'

const store = configureStore({
    reducer : {
        sidebarHandler : sideSlice,
        videoSliceHandler : videoSlice,
    },
    
})

export default store;
 