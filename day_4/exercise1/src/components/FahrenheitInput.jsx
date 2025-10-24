import React from "react";
const FahrenheitInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="input-group">
      <label>Fahrenheit:</label>
      <input type="number" value={value} onChange={handleChange} placeholder="Enter °F" />
    </div>
  );
};
export default FahrenheitInput;