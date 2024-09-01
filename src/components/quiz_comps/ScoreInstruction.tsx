const ScoreInstruction = () => {
  return (
    <div>
      <ul className="instt-main">
        <li>
          <span className="instt-span bg-green-500"></span>
          <span className="instt-h">Current Score</span>
        </li>
        <li>
          <span className="instt-span bg-red-400"></span>
          <span className="instt-h">Min Possible Score</span>
        </li>
        <li>
          <span className="instt-span bg-slate-400"></span>
          <span className="instt-h">Max Possible Score</span>
        </li>
      </ul>
    </div>
  );
};
export default ScoreInstruction;
