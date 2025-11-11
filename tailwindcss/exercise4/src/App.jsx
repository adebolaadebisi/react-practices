import React from "react";
import "./index.css";
const colors = [
  
  { name: "Naija Green", hex: "#008751" },
  { name: "White", hex: "#FFFFFF" },
  
  { name: "Naija Green 50", hex: "#E6F4EF" },
  { name: "Naija Green 100", hex: "#CCE9DF" },
  { name: "Naija Green 200", hex: "#99D3BF" },
  { name: "Naija Green 300", hex: "#66BD9F" },
  { name: "Naija Green 400", hex: "#33A77F" },
  { name: "Naija Green 500", hex: "#008751" },
  { name: "Naija Green 600", hex: "#006B41" },
  { name: "Naija Green 700", hex: "#005231" },
  { name: "Naija Green 800", hex: "#003921" },
  { name: "Naija Green 900", hex: "#002111" },
  { name: "Naija Green 950", hex: "#00180C" },
];
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
         Color Palette Showcase
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {colors.map((color) => (
          <div
            key={color.name}
            className="flex flex-col items-center"
          >
            <div
              className="w-20 h-20 rounded-md shadow-md border"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p
              className={`mt-2 text-sm font-medium ${
                color.hex === "#FFFFFF" ? "text-gray-800" : "text-gray-900"
              }`}
            >
              {color.name}
            </p>
            <p
              className={`text-xs ${
                color.hex === "#FFFFFF" ? "text-gray-600" : "text-gray-700"
              }`}
            >
              {color.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;







