import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { ThemeState } from '../types';

const lightTheme = {
    bg: {
        primary: '#ffffff',
        secondary: '#F4F4F4'
    },
    text: {
        primary: '#000000',
        secondary: '#727272'
    },
    highLight: '#313131'
}

const darkTheme = {
    bg: {
        primary: '#232323',
        secondary: '#1B1B1B'
    },
    text: {
        primary: '#ffffff',
        secondary: '#D1D1D1'
    },
    highLight: '#313131'
}

const initialState: ThemeState = {
    theme: lightTheme
}


const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<string>) => {
            if(action.payload === 'Light'){
                state.theme = lightTheme;
            } else if(action.payload === 'Dark'){
                state.theme = darkTheme;
            }
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;