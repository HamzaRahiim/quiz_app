"use client";
import { filterQuizData } from "@/lib/filterData";
import { Button } from "../ui/button";
import Difficulty from "@/components/quiz_comps/Difficulty";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { RootState } from "@/store/redux/store";
import { useEffect } from "react";
import {
  selectQuiz,
  setCurrentQuestion,
  setSelectedAnswer,
  setTotalQuestions,
} from "@/store/slices/quizSlice";
import Link from "next/link";

const QuestionDisplay = () => {
  const quizState = useAppSelector(selectQuiz);
  const dispatch = useAppDispatch();
  const entireAppState = useAppSelector((state: RootState) => state);

  const recentQuestion = quizState.currentQuestion;
  const filteredQuestions = filterQuizData(entireAppState);
  const currentFilterQuestion =
    filteredQuestions[quizState.currentQuestionIndex];

  const handleAnswerClick = (answer: string) => {
    dispatch(setSelectedAnswer(answer));
  };

  useEffect(() => {
    dispatch(setTotalQuestions(filteredQuestions.length));
    dispatch(setCurrentQuestion(currentFilterQuestion));
  }, [currentFilterQuestion]);

  return (
    <>
      {recentQuestion ? (
        <div className="md:mb-8 px-2 md:px-0">
          <h1 className="quiz-h1">
            Question {quizState.currentQuestionIndex + 1} of{" "}
            {quizState.totalQuestions}
          </h1>
          <h3 className="font-light text-white">
            {decodeURIComponent(recentQuestion.category)}
          </h3>
          <h4 className="text-white">
            <Difficulty level={recentQuestion.difficulty} />
          </h4>
          <p className="recent-q">
            {decodeURIComponent(recentQuestion.question)}
          </p>
          <ul className="button-div">
            {recentQuestion.incorrect_answers
              .concat(recentQuestion.correct_answer)
              .map((answer: string, idx: number) => (
                <li
                  key={idx}
                  className="justify-self-center md:justify-self-start"
                >
                  <Button
                    variant={"outline"}
                    className={`inside-butt`}
                    onClick={() => handleAnswerClick(answer)}
                    disabled={quizState.selectedAnswer !== null}
                  >
                    {decodeURIComponent(answer)}
                  </Button>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className="no-question">
          <h1 className="text-red-500 md:text-3xl text-2xl">
            No Question Loaded In This Section
          </h1>
          <h3 className="text-white pt-4">
            Please Visit to{" "}
            <Link href={"/"} className="link-style">
              Home Page
            </Link>{" "}
            and select the other Option
          </h3>
        </div>
      )}
    </>
  );
};

export default QuestionDisplay;
