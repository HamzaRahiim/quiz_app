import ScoreDisplay from "@/components/quiz_comps/ScoreDisplay";
import ProgressBar from "@/components/quiz_comps/ProgresBar";
import QuestionDisplay from "@/components/quiz_comps/QuestionDisplay";
import AnswerFeedback from "@/components/quiz_comps/AnswerFeedback";
import ScoreInstruction from "@/components/quiz_comps/ScoreInstruction";

const Quiz = () => {
  return (
    <>
      <section className="bg-teal-950 w-full min-h-screen relative">
        {/* Showing Attempt Question Progress */}
        <ProgressBar />
        <main className="quiz-main">
          {/* Question and Answer Display */}
          <QuestionDisplay />
          {/* Pop-up for Correct/Incorrect Answer */}
          <AnswerFeedback />
        </main>
        <section className="score-sect">
          {/* Updated Score Display */}
          <ScoreDisplay />
          <ScoreInstruction />
        </section>
      </section>
    </>
  );
};

export default Quiz;
