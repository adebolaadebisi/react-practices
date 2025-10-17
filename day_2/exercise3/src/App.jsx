//App.jsx
import StateCard from "./component/StateCard";
function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <StateCard state="Lagos" capital="Ikeja" region="South" population="14 million">
        National Theatre
      </StateCard>
      <StateCard state="Kano" capital="Kano" region="North" population="13 million">
        Gidan Rumfa (Emir’s Palace)
      </StateCard>
      <StateCard state="Enugu" capital="Enugu" region="East" population="3.3 million">
        Nike Lake Resort
      </StateCard>
      <StateCard state="Osun" capital="Osogbo" region="West" population="4.7 million">
        Osun-Osogbo Sacred Grove
      </StateCard>
    </div>
  );
}
export default App;