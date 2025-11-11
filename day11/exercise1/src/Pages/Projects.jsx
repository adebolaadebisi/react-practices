const Projects = () => {
  const projects = [
    { id: 1, name: "React Expense Tracker", desc: "A simple app to manage your daily expenses." },
    { id: 2, name: "AI Web Dev Portfolio", desc: "Showcase of AI web development projects." },
    { id: 3, name: "Student Dashboard", desc: "An interactive dashboard for students." },
  ];
  return (
    <div style={{ padding: "40px" }}>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: "10px" }}>
            <strong>{project.name}</strong> — {project.desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Projects;







