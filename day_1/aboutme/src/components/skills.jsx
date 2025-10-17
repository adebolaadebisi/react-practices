import "./skills.css";
function Skills() {
  const skills = ["FastAPI", "HTML", "JavaScript", "React", "Python"];
  return (
    <section className="skills">
      <h2>My Tech Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;












