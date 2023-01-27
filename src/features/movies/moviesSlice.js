import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { instance as axios, requests } from "../../config";

const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
    movies: []
}

export const getMovies = createAsyncThunk("movies/getAll", async (_, thunkAPI) => {
    try {
        return await axios.get(requests.fetchNetfixOriginals);
    } catch (error) {
        console.log("error", error);
        return thunkAPI.rejectWithValue();
    }
});

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
            state.movies = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getMovies.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.movies = action.payload.data.results;
        })
    }
});

export const { reset } = movieSlice.actions;

export default movieSlice.reducer;