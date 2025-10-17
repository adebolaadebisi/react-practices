//SkillBadge.jsx

import "./SkillBadge.css";
const SkillBadge = ({ skill, level }) => {
  const getColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "gray";
      case "intermediate":
        return "blue";
      case "expert":
        return "green";
      default:
        return "black";
    }
  };
  return (
    <span className="skill-badge" style={{ backgroundColor: getColor(level) }}>
      {skill} ({level})
    </span>
  );
};
export default SkillBadge;






