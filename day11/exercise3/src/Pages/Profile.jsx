import { Link } from "react-router-dom";

function Profile() {
  const student = {
    name: "Adebisi Odefemi",
    email: "adebisi@example.com",
    department: "Nutrition and Dietetics",
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <Link to="/edit-profile">
        <button>Edit Profile</button>
      </Link>
    </div>
  );
}

export default Profile;
