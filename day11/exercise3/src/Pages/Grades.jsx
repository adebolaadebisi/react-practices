function Grades() {
  const grades = [
    { course: "React Basics", grade: "A" },
    { course: "JavaScript Essentials", grade: "B+" },
    { course: "Introduction to AI", grade: "A-" },
    { course: "Human Nutrition", grade: "B" },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Grades</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g, i) => (
            <tr key={i}>
              <td>{g.course}</td>
              <td>{g.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;

