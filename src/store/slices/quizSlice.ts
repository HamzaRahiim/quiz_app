import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

type QuizState = {
  currentQuestionIndex: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  lowestPossibleScore: number;
  currentScore: number;
  highestPossibleScore: number;
  attemptProgress: number;
};

const initialState: QuizState = {
  currentQuestionIndex: 0,
  totalQuestions: 20, // Adjust this according to your actual total questions
  correctAnswers: 0,
  incorrectAnswers: 0,
  lowestPossibleScore: 0,
  currentScore: 0,
  highestPossibleScore: 100,
  attemptProgress: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setTotalQuestions(state, action: PayloadAction<number>) {
      state.totalQuestions = action.payload;
    },
    incrementCurrentQuestion(state) {
      if (state.currentQuestionIndex < state.totalQuestions - 1) {
        state.currentQuestionIndex += 1;
        state.attemptProgress =
          ((state.currentQuestionIndex + 1) / state.totalQuestions) * 100;
      }
    },
    incrementCorrectAnswers(state) {
      state.correctAnswers += 1;
      state.currentScore = (state.correctAnswers / state.totalQuestions) * 100;
      state.highestPossibleScore =
        ((state.correctAnswers +
          (state.totalQuestions - state.currentQuestionIndex - 1)) /
          state.totalQuestions) *
        100;
    },
    incrementIncorrectAnswers(state) {
      state.incorrectAnswers += 1;
      state.lowestPossibleScore =
        (state.correctAnswers / state.totalQuestions) * 100;
    },
    resetQuiz(state) {
      state.currentQuestionIndex = 0;
      state.correctAnswers = 0;
      state.incorrectAnswers = 0;
      state.lowestPossibleScore = 0;
      state.currentScore = 0;
      state.highestPossibleScore = 100;
      state.attemptProgress = 0;
    },
  },
});

export const {
  setTotalQuestions,
  incrementCurrentQuestion,
  incrementCorrectAnswers,
  incrementIncorrectAnswers,
  resetQuiz,
} = quizSlice.actions;

export const selectQuiz = (state: RootState) => state.quiz;

export default quizSlice.reducer;
