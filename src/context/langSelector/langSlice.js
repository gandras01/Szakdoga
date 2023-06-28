import { createSlice } from "@reduxjs/toolkit";

const lang = localStorage.getItem('lng');

const initialState = {
    lang: lang ? lang : 'hu',
    loading: false,
    error: ''
};

const langSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        selectEnglish: (state) => {
          state.lang = 'en';
          localStorage.setItem('lng', 'en');
        },
        selectHungarian: (state) => {
          state.lang = 'hu';
          localStorage.setItem('lng', 'hu');
        }
    }
});

export const {selectEnglish, selectHungarian} = langSlice.actions;

export default langSlice.reducer;