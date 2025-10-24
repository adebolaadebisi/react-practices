import React, { useState } from "react";
const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    addTodo(text);
    setText("");
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") handleAdd();
  };
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export default TodoInput;

