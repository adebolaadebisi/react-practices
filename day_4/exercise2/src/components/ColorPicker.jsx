import React, { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";
import "./ColorPicker.css";
const ColorPicker = () => {
  const [rgb, setRgb] = useState({ r: 255, g: 100, b: 50 });
  const handleChange = (color, value) => {
    setRgb({ ...rgb, [color]: parseInt(value) });
  };
  const rgbToHex = (r, g, b) => {
    const toHex = (x) => x.toString(16).padStart(2, "0").toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  return (
    <div className="color-picker-container">
      <h2> Color Picker</h2>
      <RGBSlider
        label="Red"
        color="r"
        value={rgb.r}
        onChange={handleChange}
      />
      <RGBSlider
        label="Green"
        color="g"
        value={rgb.g}
        onChange={handleChange}
      />
      <RGBSlider
        label="Blue"
        color="b"
        value={rgb.b}
        onChange={handleChange}
      />
      <ColorDisplay rgb={rgb} hex={rgbToHex(rgb.r, rgb.g, rgb.b)} />
    </div>
  );
};
export default ColorPicker;