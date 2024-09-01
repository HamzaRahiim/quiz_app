import { FilterState } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FilterState = {
  category: "",
  type: "",
  difficulty: "",
  isQuizReady: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.isQuizReady =
        !!state.category && !!state.type && !!state.difficulty;
    },
    updateType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
      state.isQuizReady =
        !!state.category && !!state.type && !!state.difficulty;
    },
    updateDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
      state.isQuizReady =
        !!state.category && !!state.type && !!state.difficulty;
    },
  },
});

export const { updateCategory, updateType, updateDifficulty } =
  filterSlice.actions;
export default filterSlice.reducer;
