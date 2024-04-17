import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'displayMovie',
    initialState: {
        value: {}
    },
    reducers: {
        setDisplayMovie(state, action){
            state.value = action.payload
        }
    }
})

export const {setDisplayMovie} = movieSlice.actions
export const movieReducer = movieSlice.reducer