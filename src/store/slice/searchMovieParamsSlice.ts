import { SearchMovieParamsType } from "../../types/SearchMovieParamsType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: SearchMovieParamsType = {
  page: 1,
  type: "movie",
  s: "Batman"
};


export const searchMovieParamsSlice = createSlice({
  name: "searchMovieParamsSlice",
  initialState,
  reducers: {
    setSearchMovieParams: (state, action: PayloadAction<Partial<SearchMovieParamsType>>) => ({
      ...state,
      ...action.payload
    })
  },
});

export const { setSearchMovieParams } = searchMovieParamsSlice.actions;
