import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppInitialStateType } from "../../types";

export const initialState: AppInitialStateType = {
  errorMessage: "",
  isProgress: false
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsProgress: (state, action: PayloadAction<boolean>) => {
      state.isProgress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action: PayloadAction<string>) => {
        state.errorMessage = action.payload;
      }
    );
  }
});

export const { setIsProgress } = appSlice.actions;
