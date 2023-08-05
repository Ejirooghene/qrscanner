import { configureStore } from "@reduxjs/toolkit";
import { scanSlice, themeSlice, favoriteSlice, historySlice, settingSlice }  from './reducers'


const store = configureStore({
    reducer: {
       scan: scanSlice,
       theme: themeSlice,
       favorites: favoriteSlice,
       history: historySlice,
       settings: settingSlice
    },
})

export default store; 