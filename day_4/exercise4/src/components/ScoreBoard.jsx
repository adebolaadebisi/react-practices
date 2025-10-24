import React from "react";
function ScoreBoard({ score, total }) {
  return (
    <div className="scoreboard">
      <p>Score: {score}/{total}</p>
    </div>
  );
}
export default ScoreBoard;