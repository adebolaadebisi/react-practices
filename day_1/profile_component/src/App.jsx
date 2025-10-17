import Profile from "./profile";
import amaka from "./assets/images/amaka_n.jpg"
import chidi from "./assets/images/chidi.jpg"
function App() {
  return (
    <div>
      <Profile
        image={amaka}
        name="Amaka Johnson"
        role="Student Developer"
        bio="Learning React to build amazing web apps in Nigeria."
      />
      <Profile
        image={chidi}
        name="Chidi Okafor"
        role="Frontend Engineer"
        bio="Passionate about creating modern, responsive web experiences."
      />
    </div>
  );
}
export default App;












