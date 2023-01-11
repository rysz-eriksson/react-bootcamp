import { createSlice } from '@reduxjs/toolkit'

const releaseDate = 'release_date'

const sortSlice = createSlice({
    name: 'sort',
    initialState: {value: releaseDate},
    reducers: {
        sortSet(state, action) {
            state.value = action.payload
        }
    }
})
export const {sortSet} = sortSlice.actions
export default sortSlice.reducer