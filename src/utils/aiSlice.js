import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    name: "ai",
    initialState: {
        showAiSearch: false,

    },
    reducers:{
        toggleAiSearchView:(state,action)=>{
            state.showAiSearch = !state.showAiSearch;

        }
    }
})

export default aiSlice.reducer;

export const { toggleAiSearchView } = aiSlice.actions;