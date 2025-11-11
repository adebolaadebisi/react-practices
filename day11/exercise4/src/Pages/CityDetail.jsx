import { useParams, Link } from "react-router-dom";

const cityData = {
  lagos: {
    name: "Lagos",
    state: "Lagos State",
    population: "15 million",
    description: "Nigeria's largest city and economic hub.",
  },
  abuja: {
    name: "Abuja",
    state: "FCT",
    population: "3 million",
    description: "The capital city of Nigeria.",
  },
  ibadan: {
    name: "Ibadan",
    state: "Oyo State",
    population: "6 million",
    description: "Known for its ancient walls and rich history.",
  },
  kano: {
    name: "Kano",
    state: "Kano State",
    population: "5 million",
    description: "A major commercial and industrial center in northern Nigeria.",
  },
  "port harcourt": {
    name: "Port Harcourt",
    state: "Rivers State",
    population: "2 million",
    description: "A vibrant oil-producing city in southern Nigeria.",
  },
  Kano: {
    name: "Enugu",
    state: "Enugu State",
    population: "1 million",
    description: "Popularly called the 'Coal City'.",
  },
};

function CityDetail() {
  const { cityName } = useParams();
  const city = cityData[cityName];

  if (!city) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>City not found 😢</h2>
        <Link to="/cities">Back to Cities</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <p>
        <Link to="/">Home</Link> &gt; <Link to="/cities">Cities</Link> &gt; {city.name}
      </p>
      <h2>{city.name}</h2>
      <p><strong>State:</strong> {city.state}</p>
      <p><strong>Population:</strong> {city.population}</p>
      <p>{city.description}</p>
      <Link to="/cities">← Back to Cities</Link>
    </div>
  );
}

export default CityDetail;
