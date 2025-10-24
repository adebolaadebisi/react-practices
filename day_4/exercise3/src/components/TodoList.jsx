import React from "react";
const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? ":ballot_box_with_tick:" : "☐"} {todo.text}
          </span>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;