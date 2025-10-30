import React from "react";
const Header = () => {
  const today = new Date().toLocaleDateString();
  return (
    <header className="header">
      <h1> Expense Tracker</h1>
      <p>{today}</p>
    </header>
  );
};
export default Header;







