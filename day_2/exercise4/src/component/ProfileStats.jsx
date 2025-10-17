//ProfileStats.jsx

import "./ProfileStats.css";
const ProfileStats = ({ projects, followers, following }) => {
  return (
    <div className="profile-stats">
      <div>
        <h4>{projects}</h4>
        <p>Projects</p>
      </div>
      <div>
        <h4>{followers}</h4>
        <p>Followers</p>
      </div>
      <div>
        <h4>{following}</h4>
        <p>Following</p>
      </div>
    </div>
  );
};
export default ProfileStats;
