import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    AiMovies: null,
    AiMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addAiMovieResults: (state, action) => {
      const { gptMovies, Aimovies } = action.payload;
      state.AiMovies = Aimovies;
      state.AiMovieNames = gptMovies;
    },
  },
});

export const { toggleGptSearchView, addAiMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
