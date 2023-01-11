import { configureStore } from "@reduxjs/toolkit";
import sortReducer from './components/sort_movies/sortSlice'
import filterReducer from './components/filter_movies/filterSlice'

export const store = configureStore({
    reducer: {
        sort: sortReducer,
        filter: filterReducer
    }
})