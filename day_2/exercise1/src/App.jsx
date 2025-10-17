import './App.css';
import GreetingCard from './component/GreetingCard';
function App() {
  return (
    <div className="App">
      <GreetingCard
        name="Tunde"
        message=" have a great day!"
        color="green"
      />
      <GreetingCard
        name="Ayomikun"
        message="You’re doing amazing today!"
        color="#d8f3dc"
      />
      <GreetingCard
        name="ADebola"
        message="Keep shining and smiling "
        color="#fde2e4"
      />
    </div>
  );
}
export default App;
