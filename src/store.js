import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './moviesSlice'
import sortReducer from './components/sort_movies/sortSlice'
import filterReducer from './components/filter_movies/filterSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        sort: sortReducer,
        filter: filterReducer
    }
})