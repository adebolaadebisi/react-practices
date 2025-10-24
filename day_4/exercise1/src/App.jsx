import React from "react";
import TemperatureApp from "./components/TemperatureApp"; // import your main component
// import NameTag from "./NameTag";
// import ShoppingCart from "./ShoppingCart";
function App() {
  return (
    <div className="App">
      {/* You can switch between components for different tasks */}
      <TemperatureApp />
      {/* <NameTag /> */}
      {/* <ShoppingCart /> */}
    </div>
  );
}
export default App;