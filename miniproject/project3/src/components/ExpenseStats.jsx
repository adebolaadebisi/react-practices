import React from "react";
const ExpenseStats = ({ expenses }) => {
  if (expenses.length === 0)
    return <p className="no-stats">No expenses to show.</p>;
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const highest = Math.max(...expenses.map((exp) => exp.amount));
  const count = expenses.length;
  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});
  return (
    <div className="stats">
      <h3>Statistics</h3>
      <p>Total Spent: ₦{total.toLocaleString()}</p>
      <p>Number of Expenses: {count}</p>
      <p>Highest Single Expense: ₦{highest.toLocaleString()}</p>
      <h4>Spending by Category:</h4>
      <ul>
        {Object.entries(categoryTotals).map(([cat, amt]) => (
          <li key={cat}>
            {cat}: ₦{amt.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpenseStats;







