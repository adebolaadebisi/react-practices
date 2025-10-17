import './GreetingCard.css';
function GreetingCard({ name, message, color }) {
  return (
    <div className="greeting-box" style={{ backgroundColor: color }}>
      <h1>Hello, {name}!</h1>
      <p>{message}</p>
    </div>
  );
}
export default GreetingCard;