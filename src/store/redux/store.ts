"use client";
import filterReducer from "@/store/slices/HeroSelect";
import quizReducer from "@/store/slices/quizSlice";
// store.ts
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    filter: filterReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
