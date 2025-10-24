import React from "react";
const ColorDisplay = ({ rgb, hex }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    alert(`Hex code ${hex} copied to clipboard!`);
  };
  const { r, g, b } = rgb;
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <div className="color-display">
      <p>RGB: ({r}, {g}, {b})</p>
      <p>HEX: {hex} <button onClick={handleCopy}>Copy Hex</button></p>
      <div className="color-box" style={{ backgroundColor: bgColor }}></div>
    </div>
  );
};
export default ColorDisplay;