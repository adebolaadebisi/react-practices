import { Link } from "react-router-dom";

const cities = [
  { name: "Lagos", state: "Lagos State" },
  { name: "Abuja", state: "FCT" },
  { name: "Ibadan", state: "Oyo State" },
  { name: "Kano", state: "Kano State" },
  { name: "Port Harcourt", state: "Rivers State" },
  { name: "Enugu", state: "Enugu State" },
];

function Cities() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Explore Nigerian Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.name}>
            <Link to={`/cities/${city.name.toLowerCase()}`}>{city.name} — {city.state}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cities;
