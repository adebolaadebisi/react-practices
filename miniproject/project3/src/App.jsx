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
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setExpenses([...expenses, { ...newExpense, id: Date.now(), date, time }]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };
  const editExpense = (id, updatedFields) => {
    setExpenses(
      expenses.map((exp) =>
        exp.id === id ? { ...exp, ...updatedFields } : exp
      )
    );
  };
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === filter);
  return (
    <div className="container">
      <Header />
      <AddExpenseForm addExpense={addExpense} />
      <CategoryFilter setFilter={setFilter} current={filter} />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
      <ExpenseStats expenses={filteredExpenses} />
    </div>
  );
};
export default App;






















