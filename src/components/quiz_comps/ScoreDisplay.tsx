"use client";

import { useAppSelector } from "@/store/redux/hooks";
import { selectQuiz } from "@/store/slices/quizSlice";

const ScoreDisplay = () => {
  const { currentScore, lowestPossibleScore, highestPossibleScore } =
    useAppSelector(selectQuiz);

  return (
    <div className="score-par">
      <p className="text-[#c5f008dc] text-res">
        Score: {currentScore.toFixed(1)}%
      </p>
      <p className="justify-self-end text-[#2ad3d3e5] text-res">
        Max Score: {highestPossibleScore.toFixed(1)}%
      </p>
      <div className="progres-div">
        {/* The red bar for lowest possible score */}
        <div
          className="progres-child bg-red-400"
          style={{ width: `${lowestPossibleScore}%` }}
        ></div>

        {/* The green bar for current score */}
        <div
          className="progres-child bg-green-500"
          style={{
            left: `${lowestPossibleScore}%`,
            width: `${currentScore - lowestPossibleScore}%`,
          }}
        ></div>

        {/* The gray bar for the remaining max score */}
        <div
          className="progres-child bg-slate-400"
          style={{
            left: `${currentScore}%`,
            width: `${highestPossibleScore - currentScore}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
