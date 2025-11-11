import React, { useRef, useState } from "react";
const ClickTracker = () => {
  const clickRef = useRef(0);
  const [stateCount, setStateCount] = useState(0);
  const renderCount = useRef(1);
  renderCount.current++;
  const countClick = () => {
    clickRef.current++;
  };
  const showTotal = () => {
    alert(`Total clicks (useRef): ${clickRef.current}`);
  };
  return (
    <div className="tracker-container">
      <h2>Click Counter (useRef - No Re-renders)</h2>
      <button onClick={countClick}>Count Clicks</button>
      <button onClick={showTotal}>Show Total</button>
      <h3>State Counter (Re-renders)</h3>
      <p>Clicks: {stateCount}</p>
      <button onClick={() => setStateCount((prev) => prev + 1)}>Click Me</button>
      <p className="render-count"> Render Count: {renderCount.current}</p>
    </div>
  );
};
export default ClickTracker;