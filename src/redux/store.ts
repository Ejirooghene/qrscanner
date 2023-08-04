import { configureStore } from "@reduxjs/toolkit";
import { scanSlice, themeSlice, favoriteSlice, historySlice }  from './reducers'


const store = configureStore({
    reducer: {
       scan: scanSlice,
       theme: themeSlice,
       favorites: favoriteSlice,
       history: historySlice
    },
})

export default store; 