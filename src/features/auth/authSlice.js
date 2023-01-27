import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "auth",
    initialState: {
        uid: null,
        user:  null
    },
    reducers: {
        login: (state, action) => {
            console.log("action", action);
            state.user = action.payload.email;
            state.uid = action.payload.uid;
        },
        logout: (state, action) => {
            console.log("logout ran..");
            state.uid = null;
            state.user = null;
        }
    }
})

export const { login, logout } = auth.actions;

export default auth.reducer;