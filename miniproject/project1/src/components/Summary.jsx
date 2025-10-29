export default function Summary({ tasks, expenses }) {
  const doneCount = tasks.filter((t) => t.done).length;
  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <section className="overview">
      <div className="card">
        <h3>Tasks Completed</h3>
        <p>{doneCount} / {tasks.length}</p>
        <div className="progress">
          <div
            style={{ width: `${(doneCount / (tasks.length || 1)) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="card">
        <h3>Total Expenses</h3>
        <p>₦{totalSpent.toLocaleString()}</p>
      </div>
    </section>
  );
}






