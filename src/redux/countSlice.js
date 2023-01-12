import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: 'count',
    initialState: {value: 0},
    reducers: {
        countSet(state, action) {
            state.value = action.payload
        }
    }
})
export const {countSet} = countSlice.actions
export default countSlice.reducer