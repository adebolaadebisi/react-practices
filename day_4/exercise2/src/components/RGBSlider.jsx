import React from "react";
const RGBSlider = ({ label, color, value, onChange }) => {
  const handleChange = (e) => {
    onChange(color, e.target.value);
  };
  return (
    <div className="slider-group">
      <label>{label}: {value}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
        className={`slider slider-${color}`}
      />
    </div>
  );
};
export default RGBSlider;