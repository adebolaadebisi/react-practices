import { Link } from "react-router-dom";

const courseData = [
  { id: "react-101", name: "React Basics", instructor: "Mr Fola. ", credits: 3 },
  { id: "javascript-basics", name: "JavaScript Essentials", instructor: "Mrs. Bola", credits: 2 },
  { id: "ai-intro", name: "Introduction to AI", instructor: "Dr. Tunde", credits: 3 },
  { id: "nutrition-202", name: "Human Nutrition", instructor: "Prof. Adebisi", credits: 2 },
];

function Courses() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Courses</h2>
      <ul>
        {courseData.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
