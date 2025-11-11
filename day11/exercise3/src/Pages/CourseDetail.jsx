import { useParams, Link } from "react-router-dom";

const courseData = {
  "react-101": {
    name: "React Basics",
    instructor: "Mr. Fola",
    credits: 3,
    description: "Learn the basics of React including components and hooks.",
  },
  "javascript-basics": {
    name: "JavaScript Essentials",
    instructor: "Mrs. Bola",
    credits: 2,
    description: "Understand JS fundamentals and modern ES6+ syntax.",
  },
  "ai-intro": {
    name: "Introduction to AI",
    instructor: "Dr. Tunde",
    credits: 3,
    description: "An introduction to Artificial Intelligence concepts.",
  },
  "nutrition-202": {
    name: "Human Nutrition",
    instructor: "Prof. Adebisi",
    credits: 2,
    description: "Explore the fundamentals of human nutrition and dietetics.",
  },
};

function CourseDetail() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course)
    return (
      <div style={{ padding: "30px" }}>
        <h3>Course not found</h3>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );

  return (
    <div style={{ padding: "30px" }}>
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Credits:</strong> {course.credits}</p>
      <p>{course.description}</p>
      <Link to="/courses">← Back to Courses</Link>
    </div>
  );
}

export default CourseDetail;
