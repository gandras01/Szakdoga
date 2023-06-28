import { combineReducers, configureStore } from '@reduxjs/toolkit'
import langReducer from './langSelector/langSlice'

const reducer = combineReducers({
    lang: langReducer
})

export const store = configureStore({
    reducer
})