import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import visibilityReducer from "../features/visibility/visibilitySlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer:{
        movies: moviesReducer,
        visibility: visibilityReducer,
        auth: authReducer
    }
});

export default store;