import { useAppSelector } from "@/store/hooks";
import { selectQuiz } from "@/store/slices/quizSlice";

const ScoreDisplay = () => {
  const { currentScore, lowestPossibleScore, highestPossibleScore } =
    useAppSelector(selectQuiz);

  // Calculate percentage values for the widths dynamically
  const progressWidth = currentScore; // Represents the current score achieved
  const lowestPossibleWidth = lowestPossibleScore; // Represents the minimum possible score
  const highestPossibleWidth = highestPossibleScore; // Represents the maximum possible score

  return (
    <div className="score-par">
      <p className="pl-10">Score: {currentScore.toFixed(2)}%</p>
      <p className="pl-28">Max Score: {highestPossibleScore.toFixed(2)}%</p>
      <div className="progres-div">
        {/* The red bar for lowest possible score */}
        <div
          className="progres-child bg-red-400"
          style={{ width: `${lowestPossibleWidth}%` }}
        ></div>

        {/* The green bar for current score */}
        <div
          className="progres-child bg-green-500"
          style={{
            left: `${lowestPossibleWidth}%`,
            width: `${progressWidth - lowestPossibleWidth}%`,
          }}
        ></div>

        {/* The gray bar for the remaining score to max score */}
        <div
          className="progres-child bg-slate-300"
          style={{
            left: `${progressWidth}%`,
            width: `${highestPossibleWidth - progressWidth}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
