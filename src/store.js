import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './moviesSlice'
import sortReducer from './components/sort_movies/sortSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        sort: sortReducer
    }
})