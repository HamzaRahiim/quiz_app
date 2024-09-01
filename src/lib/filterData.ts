import { RootState } from "@/store/redux/store";
import quizData from "@/lib/questions.json";
import { QuizQuestion } from "@/app/types";

export const filterQuizData = (state: RootState): QuizQuestion[] => {
  const { category, type, difficulty } = state.filter;

  return quizData.filter((question) => {
    return (
      (category === "All" ||
        category === decodeURIComponent(question.category)) &&
      (type === "All" || question.type === type) &&
      (difficulty === "All" || question.difficulty === difficulty)
    );
  });
};
