const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "AI Web Development"];
  return (
    <div style={{ padding: "40px" }}>
      <h1>My Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;