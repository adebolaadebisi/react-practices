import React from "react";
function Question({ data, selected, setSelected }) {
  return (
    <div className="question-box">
      <h3>{data.question}</h3>
      {data.options.map((option, index) => (
        <label key={index} className="option">
          <input
            type="radio"
            name="option"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
export default Question;