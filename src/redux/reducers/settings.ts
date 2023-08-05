import { createSlice } from "@reduxjs/toolkit";
import { SettingState } from "../types";

const initialState: SettingState = {
    beep: false,
    vibration: false,
    copy: false,
    url: false,
    batch: false,
    autoFocus: false,
    touchFocus: false
}


const settingSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setBeep(state) {
            state.beep = !state.beep;
        },
        setVibration(state){
            state.vibration = !state.vibration;
        }, 
        setCopy(state){
            state.copy = !state.copy;
        }
    }
})

export const { setBeep, setVibration, setCopy } = settingSlice.actions;

export default settingSlice.reducer;