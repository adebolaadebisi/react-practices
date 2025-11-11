import { useParams, useNavigate } from "react-router-dom";

export default function CategoryDetail() {
  const { category } = useParams();
  const navigate = useNavigate();

  const dishes = {
    breakfast: ["Akara & Pap", "Yam & Egg Sauce", "Moi Moi"],
    lunch: ["Jollof Rice", "Efo Riro", "Amala & Ewedu"],
    dinner: ["Fried Rice", "Egusi Soup", "Pounded Yam"],
    snacks: ["Puff Puff", "Chin Chin", "Plantain Chips"],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{category.toUpperCase()} Menu</h2>
      <ul>
        {dishes[category]?.map((dish) => (
          <li key={dish}>{dish}</li>
        )) || <p>No dishes found.</p>}
      </ul>

      <button
        onClick={() => navigate("/menu")}
        style={{ marginTop: "20px", padding: "8px 12px", background: "orange", border: "none", borderRadius: "5px", color: "#fff" }}
      >
        Back to Menu
      </button>
    </div>
  );
}






