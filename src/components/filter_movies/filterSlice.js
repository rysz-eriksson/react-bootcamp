import { createSlice } from '@reduxjs/toolkit'

const initialState = {byGenre: 'All', byTitle: ''}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filterSet(state, action) {
            state[action.payload.key] = action.payload.value
        }
    }
})
export const {filterSet} = filterSlice.actions
export default filterSlice.reducer