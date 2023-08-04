import { createSlice } from "@reduxjs/toolkit";
import { ScanState } from "../types";

const scanSlice = createSlice({
    name: 'favorite',
    initialState: {
        count: 1
    },
    reducers: {}
})


export default scanSlice.reducer;