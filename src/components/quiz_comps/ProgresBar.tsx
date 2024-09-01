"use client";
import { useAppSelector } from "@/store/redux/hooks";
import { selectQuiz } from "@/store/slices/quizSlice";

const ProgressBar = () => {
  const quizState = useAppSelector(selectQuiz);
  return (
    <div
      className="h-4 bg-[#b4cf3e73]"
      style={{ width: `${quizState.attemptProgress}%` }}
    ></div>
  );
};

export default ProgressBar;
