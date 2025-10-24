import React, { useState } from "react";
import "./NameTag.css"; // Import CSS
const NameTag = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const handleDownload = () => {
    alert(`--- NAME TAG ---
Hello, my name is
${name.toUpperCase()}
${title}
${company}`);
  };
  return (
    <div className="name-tag-container">
      <h2>:dart: Name Tag Generator</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="preview">
        <h3>--- NAME TAG ---</h3>
        <p className="greeting">Hello, my name is</p>
        <h1>{name ? name.toUpperCase() : "YOUR NAME"}</h1>
        <p className="title">{title || "Your Job Title"}</p>
        <p className="company">{company || "Your Company"}</p>
      </div>
      <button className="download-btn" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};
export default NameTag;