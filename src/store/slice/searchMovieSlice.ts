import { SearchMovieType, MovieShortInformationType } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: SearchMovieType = {
  Search: [],
  totalResults: "",
  Response: "",
  Error: ""
};

export const searchMovieSlice = createSlice({
  name: "searchMovieParamsSlice",
  initialState,
  reducers: {
    setFirstSearchMovie: (state, action: PayloadAction<SearchMovieType>) => action.payload,
    setSearchMovie: (state, action: PayloadAction<MovieShortInformationType[]>) => {
      state.Search = [...state.Search, ...action.payload]
    },
    resetState: () => initialState
      }
});

export const { setFirstSearchMovie, setSearchMovie, resetState } = searchMovieSlice.actions;
