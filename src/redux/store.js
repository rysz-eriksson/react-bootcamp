import { configureStore } from "@reduxjs/toolkit";
import sortReducer from './sortSlice'
import filterReducer from './filterSlice'
import countReducer from './countSlice'

export const store = configureStore({
    reducer: {
        sort: sortReducer,
        filter: filterReducer,
        count: countReducer
    }
})