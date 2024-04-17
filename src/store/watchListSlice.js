import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: {
        value: []
    },
    reducers: {
        addMovie(state, action){
            state.value = state.value.filter((movie) => movie.id !== action.payload.id)
            state.value = [...state.value, action.payload]
        },
        removeMovie(state, action){
            state.value = state.value.filter((movie) => movie.id !== action.payload.id)
        }
    }
})

export const {addMovie, removeMovie} = watchlistSlice.actions
export const watchlistReducer = watchlistSlice.reducer