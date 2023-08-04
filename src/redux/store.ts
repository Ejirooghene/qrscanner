import { configureStore } from "@reduxjs/toolkit";
import scan from "./reducers/scan";


const store = configureStore({
    reducer: {
        scan
    },
})

export default store;