import React, { useState } from "react";
const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  const { id, description, amount, category, date, time } = expense;
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(description);
  const [newAmt, setNewAmt] = useState(amount);
  const handleSave = () => {
    onEdit(id, { description: newDesc, amount: parseFloat(newAmt) });
    setIsEditing(false);
  };
  return (
    <tr>
      <td>
        {isEditing ? (
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
        ) : (
          description
        )}
      </td>
      <td>{category}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={newAmt}
            onChange={(e) => setNewAmt(e.target.value)}
          />
        ) : (
          `₦${amount.toLocaleString()}`
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};
export default ExpenseItem;







