import React, { useState } from "react";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseStats from "./components/ExpenseStats";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");
  const addExpense = (newExpense) => {
    if (!newExpense.description || newExpense.amount <= 0) return;
    setExpenses([
      ...expenses,
      { ...newExpense, id: Date.now(), date: new Date().toLocaleDateString() },
    ]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };
  const editExpense = (id, updated) => {
    setExpenses(
      expenses.map((exp) => (exp.id === id ? { ...exp, ...updated } : exp))
    );
  };
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === filter);
  return (
    <div className="app-container">
      <Header />
      <AddExpenseForm onAdd={addExpense} />
      <CategoryFilter setFilter={setFilter} current={filter} />
      <ExpenseStats expenses={filteredExpenses} />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
    </div>
  );
};
export default App;







