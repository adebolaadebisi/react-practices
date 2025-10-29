import { useState } from "react";
export default function TaskSection({ tasks, addTask, toggleTask, removeTask }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };
  return (
    <div className="panel">
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button>Add</button>
      </form>
      {tasks.length === 0 ? (
        <p className="empty">No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <label>
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggleTask(t.id)}
                />
                <span className={t.done ? "done" : ""}>{t.text}</span>
              </label>
              <button onClick={() => removeTask(t.id)}>×</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}









