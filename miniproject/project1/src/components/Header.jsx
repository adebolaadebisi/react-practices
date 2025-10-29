export default function Header({ theme, setTheme, tab, setTab }) {
  return (
    <header>
      <h1>My Task & Expense Board</h1>
      <div className="actions">
        <button
          onClick={() => setTab("tasks")}
          className={tab === "tasks" ? "active" : ""}
        >
          Tasks
        </button>
        <button
          onClick={() => setTab("expenses")}
          className={tab === "expenses" ? "active" : ""}
        >
          Expenses
        </button>
        <button
          className="theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? ":crescent_moon:" : ":sunny:"}
        </button>
      </div>
    </header>
  );
}