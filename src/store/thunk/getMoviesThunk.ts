import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api";
import { RootStoreType } from "../store";
import {
  resetState,
  setFirstSearchMovie,
  setIsProgress,
  setSearchMovie,
  setSearchMovieParams
} from "../";

export const getMoviesThunk = createAsyncThunk(
  "searchMovieSlice/getMoviesThunk",
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {

      dispatch(setIsProgress(true));
      const state = getState() as RootStoreType;

      const params = state.searchMovieParams;

      const res = await API.searchMovieByTitle(params);

      if (res.Error) {
        if (res.Error === "Movie not found!") {
          dispatch(resetState());
        }
        return rejectWithValue(res.Error);
      }

      if (state.searchMovieParams.page === 1) {
        dispatch(setFirstSearchMovie(res));
      } else {
        dispatch(setSearchMovie(res.Search));
      }

    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message);
      }
    } finally {
      dispatch(setIsProgress(false));
    }
  }
);
