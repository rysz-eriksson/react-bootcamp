import { createSlice } from '@reduxjs/toolkit'
import JSONData from '../data/movies.json';

const movieKeys = ['id', 'title', 'tagline', 'vote_average', 'vote_count', 'release_date', 'poster_path',
        'overview', 'budget', 'revenue', 'genres', 'runtime']

const initialState = JSONData

const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        movieAdded(state, action) {
            const newMovieObj = {}
            movieKeys.forEach(key => newMovieObj[key] = action.payload[key])
            state.movies.push(newMovieObj)
        },
        movieEdited(state, action) {
            const updatedMovie = {}
            movieKeys.forEach(key => newMovieObj[key] = action.payload[key])
            const movieIndex = state.findIndex(movie => movie.id === action.payload.id)
            state.movies.splice(movieIndex, 1, updatedMovie)
        },
        movieDeleted(state, action) {
            state.movies.filter(movie => movie.id !== action.payload.id)
        }
    }
})
export const {movieAdded, movieEdited, movieDeleted} = moviesSlice.actions
export default moviesSlice.reducer