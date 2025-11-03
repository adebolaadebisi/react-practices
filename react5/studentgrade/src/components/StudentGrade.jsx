import React, { useState } from "react";

const StudentGrade = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const getGrade = (score) => {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 45) return "D";
    if (score >= 40) return "E";
    return "F";
  };
  const handleAddStudent = () => {
    if (!name || !score) return alert("Please enter both name and score!");
    const grade = getGrade(Number(score));
    setStudents([...students, { name, score: Number(score), grade }]);
    setName("");
    setScore("");
  };
  return (
    <div className="grade-container">
      <h2> Student Grade List</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((s, index) => (
              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.score}</td>
                <td className={`grade ${s.grade}`}>{s.grade}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No students added yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default StudentGrade;











