import React from "react";
const TodoFilter = ({ filter, setFilter }) => {
  const filters = ["All", "Active", "Completed"];
  return (
    <div className="todo-filter">
      Filter:{" "}
      {filters.map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};
export default TodoFilter;