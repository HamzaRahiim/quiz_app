"use client";
import { useAppSelector } from "@/store/hooks";
import { selectQuiz } from "@/store/slices/quizSlice";

const ProgressBar = () => {
  const quizState = useAppSelector(selectQuiz);
  return (
    <div
      className="h-4 bg-slate-500"
      style={{ width: `${quizState.attemptProgress}%` }}
    ></div>
  );
};

export default ProgressBar;
