import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slice/appSlice";
import { searchMovieParamsSlice } from "../store/slice/searchMovieParamsSlice";
import { searchMovieSlice } from "../store/slice/searchMovieSlice";

export const store = configureStore({
  reducer: {
    searchMovie: searchMovieSlice.reducer,
    searchMovieParams: searchMovieParamsSlice.reducer,
    app: appSlice.reducer,
  }
});

export type RootStoreType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
