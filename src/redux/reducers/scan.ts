import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isDark: boolean
    primary: string
    secondary: string
}

const initialState: IinitialState = {
    isDark: true,
    primary: 'white',
    secondary: 'black'
}

const scanSlice = createSlice({
    name:'scan',
    initialState,
    reducers: {
        changeTheme: state => {
            state.isDark = !state.isDark;
        }
    }
})

export const { changeTheme } = scanSlice.actions;

export default scanSlice.reducer;