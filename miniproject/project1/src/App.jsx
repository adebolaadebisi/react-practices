import React, { useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TaskSection from "./components/TaskSection";
import ExpenseSection from "./components/ExpenseSection";
export default function App() {
  const [theme, setTheme] = useState("light");
  const [tab, setTab] = useState("tasks");
  const [tasks, setTasks] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };
  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const addExpense = (title, amount) => {
    if (!title.trim() || !amount) return;
    setExpenses([...expenses, { id: Date.now(), title, amount: +amount }]);
  };
  const removeExpense = (id) =>
    setExpenses(expenses.filter((e) => e.id !== id));
  return (
    <main className={`dashboard ${theme}`}>
      <Header
        theme={theme}
        setTheme={setTheme}
        tab={tab}
        setTab={setTab}
      />
      <Summary tasks={tasks} expenses={expenses} />
      {tab === "tasks" ? (
        <TaskSection
          tasks={tasks}
          addTask={addTask}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ) : (
        <ExpenseSection
          expenses={expenses}
          addExpense={addExpense}
          removeExpense={removeExpense}
        />
      )}
    </main>
  );
}






