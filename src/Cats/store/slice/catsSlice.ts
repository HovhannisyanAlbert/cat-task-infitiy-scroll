import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatsItem, ICatsInitialState } from "../types";

const initialState: ICatsInitialState = {
  catsData: [],
  isLoadingCat: false,
};

export const catsSlice = createSlice({
  name: "catsSlice",
  initialState,
  reducers: {
    setCatsData: (
      state: ICatsInitialState,
      { payload }: PayloadAction<CatsItem[]>
    ) => {
      state.catsData = payload;
    },
    addCatsData: (
      state: ICatsInitialState,
      { payload }: PayloadAction<CatsItem[]>
    ) => {
      state.catsData = state.catsData.concat(payload);
    },
    setLoading: (
      state: ICatsInitialState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isLoadingCat = payload;
    },
  },
});
export const catsSliceReducer = catsSlice.reducer;
export const { setCatsData, setLoading, addCatsData } = catsSlice.actions;
