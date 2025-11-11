import { Link } from "react-router-dom";

export default function Menu() {
  const categories = ["breakfast", "lunch", "dinner", "snacks"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Food Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/menu/${cat}`}>{cat.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
