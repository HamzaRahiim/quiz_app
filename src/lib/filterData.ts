// utils/filterData.ts
import { RootState } from "@/store/store";
import quizData from "@/app/questions.json"; // Assuming you have a JSON file with quiz data

type QuizQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export const filterQuizData = (state: RootState): QuizQuestion[] => {
  const { category, type, difficulty } = state.filter;

  console.log("Filtering with:", { category, type, difficulty });
  return quizData.filter((question) => {
    return (
      (category === "All" ||
        category === decodeURIComponent(question.category)) &&
      (type === "All" || question.type === type) &&
      (difficulty === "All" || question.difficulty === difficulty)
    );
  });
};
