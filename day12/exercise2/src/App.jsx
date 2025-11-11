import { AuthProvider } from "./Contexts/AuthContext";
import UserPanel from "./Components/UserPanel";

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>User Authentication Context</h1>
        <UserPanel />
      </div>
    </AuthProvider>
  );
}

export default App;
