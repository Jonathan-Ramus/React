import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchText',
    initialState: {
        value: ''
    },
    reducers: {
        setSearchText(state, action){
            state.value = action.payload
        }
    }
})

export const {setSearchText} = searchSlice.actions
export const searchReducer = searchSlice.reducer