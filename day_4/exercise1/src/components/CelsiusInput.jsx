import React from "react";
const CelsiusInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="input-group">
      <label>Celsius:</label>
      <input type="number" value={value} onChange={handleChange} placeholder="Enter °C" />
    </div>
  );
};
export default CelsiusInput;