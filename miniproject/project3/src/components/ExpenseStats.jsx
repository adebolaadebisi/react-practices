import React from "react";
const ExpenseStats = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const count = expenses.length;
  const highest = expenses.length
    ? Math.max(...expenses.map((e) => e.amount))
    : 0;
  const breakdown = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});
  return (
    <div className="stats-container">
      <p><b>Total:</b> ₦{total.toLocaleString()}</p>
      <p><b>Expenses:</b> {count}</p>
      <p><b>Highest:</b> ₦{highest.toLocaleString()}</p>
      <div>
        <b>By Category:</b>
        {Object.entries(breakdown).map(([cat, amt]) => (
          <p key={cat}>{cat}: ₦{amt.toLocaleString()}</p>
        ))}
      </div>
    </div>
  );
};
export default ExpenseStats;
