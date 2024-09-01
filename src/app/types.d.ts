export type QuizQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Options = {
  name: string;
  option1: string;
  option2?: string;
  option3?: string;
};

export interface FilterState {
  category: string;
  type: string;
  difficulty: string;
  isQuizReady: boolean;
}

export type QuizState = {
  currentQuestionIndex: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  lowestPossibleScore: number;
  currentScore: number;
  highestPossibleScore: number;
  attemptProgress: number;
  currentQuestion: QuizQuestion | null;
  selectedAnswer: string | null;
  showPopUp: boolean;
};
