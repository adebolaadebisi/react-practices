import "./profile.css";
function Profile(props) {
  return (
    <div className="profile-card">
      <img
        src={props.image}
        alt={props.name}
      />
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <p>{props.bio}</p>
    </div>
  );
}
export default Profile;