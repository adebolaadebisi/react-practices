import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ expenses, onDelete, onEdit }) => (
  <div className="expense-list">
    {expenses.length === 0 ? (
      <p>No expenses yet.</p>
    ) : (
      expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          expense={exp}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))
    )}
  </div>
);
export default ExpenseList;
