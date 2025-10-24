import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
import "./TemperatureApp.css";
const TemperatureApp = () => {
  const [temperature, setTemperature] = useState({ value: "", scale: "C" });
  const handleCelsiusChange = (value) => {
    setTemperature({ value, scale: "C" });
  };
  const handleFahrenheitChange = (value) => {
    setTemperature({ value, scale: "F" });
  };
  const celsius =
    temperature.scale === "F"
      ? ((parseFloat(temperature.value) - 32) * 5) / 9
      : parseFloat(temperature.value);
  const fahrenheit =
    temperature.scale === "C"
      ? (parseFloat(temperature.value) * 9) / 5 + 32
      : parseFloat(temperature.value);
  return (
    <div className="temp-container">
      <h2>Temperature Converter</h2>
      <CelsiusInput value={isNaN(celsius) ? "" : celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={isNaN(fahrenheit) ? "" : fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
};
export default TemperatureApp;






