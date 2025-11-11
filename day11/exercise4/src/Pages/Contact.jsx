import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for reaching out!`);
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
