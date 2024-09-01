"use client";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  incrementCurrentQuestion,
  resetQuiz,
  selectQuiz,
  setSelectedAnswer,
} from "@/store/slices/quizSlice";
import Link from "next/link";

const AnswerFeedback = () => {
  const quizState = useAppSelector(selectQuiz);
  const dispatch = useAppDispatch();
  const isClosingPopup = useRef(false); // Add a ref to track if popup is closing
  const recentQuestion = quizState.currentQuestion;
  const selectedAnswer = quizState.selectedAnswer;
  // function to handle pop-up
  const lastQuestion =
    quizState.currentQuestionIndex === quizState.totalQuestions - 1;
  const answerChecking = selectedAnswer === recentQuestion?.correct_answer;
  const closePopup = () => {
    if (isClosingPopup.current) return; // Prevent multiple executions

    isClosingPopup.current = true;

    dispatch(setSelectedAnswer(null)); // this will also false the state of pop-up
    if (lastQuestion) {
      dispatch(resetQuiz());
    } else {
      dispatch(incrementCurrentQuestion());
    }
  };

  setTimeout(() => {
    isClosingPopup.current = false;
  }, 500);

  return (
    <>
      {quizState.showPopUp && (
        <AlertDialog open={quizState.showPopUp} onOpenChange={closePopup}>
          <AlertDialogContent className="pop-style">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-3xl text-white">
                {lastQuestion
                  ? "End of Paper"
                  : answerChecking
                  ? "Correct!"
                  : "Sorry!"}
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {!lastQuestion ? (
                <AlertDialogAction
                  onClick={closePopup}
                  className="button-class"
                >
                  Next Question
                </AlertDialogAction>
              ) : (
                <div className="space-x-8">
                  <AlertDialogAction
                    onClick={closePopup}
                    className="button-class"
                  >
                    <Link href={"/"}>Home</Link>
                  </AlertDialogAction>
                  <AlertDialogAction
                    onClick={closePopup}
                    className="button-class"
                  >
                    Re-Start Quiz
                  </AlertDialogAction>
                </div>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
export default AnswerFeedback;
