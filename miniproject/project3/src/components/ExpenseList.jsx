import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div className="expense-table-container">
      {expenses.length === 0 ? (
        <p className="no-expense">No expenses yet.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount (₦)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <ExpenseItem
                key={exp.id}
                expense={exp}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ExpenseList;















