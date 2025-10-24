import React from "react";
function AnswerFeedback({ feedback }) {
  if (!feedback) return null;
  return <p className="feedback">{feedback}</p>;
}
export default AnswerFeedback;