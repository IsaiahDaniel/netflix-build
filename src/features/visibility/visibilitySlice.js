import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleVisible: false
}

const visiblity = createSlice({
    name: "visibility",
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.toggleVisible = !state.toggleVisible
        }
    }
});

export const { toggle } = visiblity.actions;

export default visiblity.reducer;