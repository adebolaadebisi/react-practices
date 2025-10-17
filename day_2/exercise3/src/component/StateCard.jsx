

import "./StateCard.css";

const StateCard = ({ state, capital, region, population, children }) => {
  
  const getBackgroundColor = (region) => {
    switch (region.toLowerCase()) {
      case "north":
        return "#8B4513"; 
      case "south":
        return "#008751"; 
      case "east":
        return "#FFD700"; 
      case "west":
        return "#4169E1"; 
      default:
        return "#ccc";
    }
  };

  const cardStyle = {
    backgroundColor: getBackgroundColor(region),
    color: "#fff",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <h2>{state} State</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population}</p>
      {children && <div className="landmark"><strong>Landmark:</strong> {children}</div>}
    </div>
  );
};

export default StateCard;