"use client";

import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { filterQuizData } from "@/lib/filterData";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  incrementCurrentQuestion,
  incrementCorrectAnswers,
  incrementIncorrectAnswers,
  selectQuiz,
  resetQuiz,
} from "@/store/slices/quizSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ScoreDisplay from "@/components/ScoreDisplay";
import { Button } from "@/components/ui/button";
import Difficulty from "@/components/Difficulty";
import ProgressBar from "@/components/ProgresBar";

const Quiz = () => {
  const dispatch = useAppDispatch();
  const quizState = useAppSelector(selectQuiz);
  const quizStat = useAppSelector((state: RootState) => state);
  const filteredQuestions = filterQuizData(quizStat);
  const currentQuestion = filteredQuestions[quizState.currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (selectedAnswer) {
      setShowPopup(true);
    }
  }, [selectedAnswer]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct_answer) {
      dispatch(incrementCorrectAnswers());
    } else {
      dispatch(incrementIncorrectAnswers());
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedAnswer(null);
    if (quizState.currentQuestionIndex === filteredQuestions.length - 1) {
      // Last question answered, reset the quiz
      dispatch(resetQuiz());
    } else {
      dispatch(incrementCurrentQuestion());
    }
  };

  return (
    <>
      <ProgressBar />
      {/* main comp  */}
      <main className="quiz-main">
        {currentQuestion && (
          <section>
            <div className="mb-8">
              <h1 className="quiz-h1">
                Question {quizState.currentQuestionIndex + 1} of{" "}
                {filteredQuestions.length}
              </h1>
              <h3 className="font-light">
                {decodeURIComponent(currentQuestion.category)}
              </h3>
              <h4>
                <Difficulty level={currentQuestion.difficulty} />
              </h4>
              <p className="py-10 font-medium">
                {decodeURIComponent(currentQuestion.question)}
              </p>
              <ul className="button-div">
                {currentQuestion.incorrect_answers
                  .concat(currentQuestion.correct_answer)
                  .map((answer: string, idx: number) => (
                    <li key={idx}>
                      <Button
                        variant={"outline"}
                        className={`border-black w-60`}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={selectedAnswer !== null}
                      >
                        {decodeURIComponent(answer)}
                      </Button>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Pop-up for Correct/Incorrect Answer */}
            {showPopup && (
              <AlertDialog open={showPopup} onOpenChange={closePopup}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {selectedAnswer === currentQuestion.correct_answer
                        ? "Correct!"
                        : "Sorry!"}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {selectedAnswer === currentQuestion.correct_answer
                        ? "You got it right! Let's move to the next question."
                        : "Sorry, that's not the correct answer. Try again next time!"}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction onClick={closePopup}>
                      {quizState.currentQuestionIndex ===
                      filteredQuestions.length - 1
                        ? "End Paper" // Change button text for the last question
                        : "Next Question"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </section>
        )}

        <section className="mt-40 w-full">
          <ScoreDisplay />
        </section>
      </main>
    </>
  );
};

export default Quiz;
