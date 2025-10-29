import { useState } from "react";
export default function ExpenseSection({ expenses, addExpense, removeExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(title, amount);
    setTitle("");
    setAmount("");
  };
  return (
    <div className="panel">
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Expense name"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button>Add</button>
      </form>
      {expenses.length === 0 ? (
        <p className="empty">No expenses added.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>₦</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.title}</td>
                <td>{e.amount.toLocaleString()}</td>
                <td>
                  <button onClick={() => removeExpense(e.id)}>×</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


















