import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [], // 🔥 Change null to an empty array
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload || []; // 🔥 Ensure payload is always an array
    }, addPopularMovies: (state, action) => {
      state.popularMovies = action.payload || []; // 🔥 Ensure payload is always an array
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo ,addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
