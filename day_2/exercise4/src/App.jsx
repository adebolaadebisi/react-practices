
//App.jsx

import ProfileHeader from "./component/ProfileHeader";
import ProfileStats from "./component/ProfileStats";
import SkillBadge from "./component/SkillBadge";
import ProfileCard from "./component/ProfileCard";
function App() {
  return (
    <div style={{ backgroundColor: "#e9ecef", minHeight: "100vh", padding: "40px" }}>
      <ProfileCard>
        <ProfileHeader
          name="Adebola Adebisi"
          title="AI Developer Traniee"
          avatar="https://media.istockphoto.com/id/1468830962/photo/attractive-young-female-university-student-using-a-laptop-while-studying.jpg?s=612x612&w=0&k=20&c=83aQUi8FwXMN1kqjfuM7oqZkckX05SebsBtemAn1kfc="
        />
        <ProfileStats projects={56} followers={1200} following={980} />
        <div style={{ textAlign: "center" }}>
          <h4>Skills</h4>
          <SkillBadge skill="React" level="Expert" />
          <SkillBadge skill="Node.js" level="Intermediate" />
          <SkillBadge skill="UI/UX Design" level="Beginner" />
        </div>
      </ProfileCard>
    </div>
  );
}
export default App;