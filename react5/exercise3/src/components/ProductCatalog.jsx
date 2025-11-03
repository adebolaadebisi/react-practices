import React, { useState } from "react";

const productsData = [
  { name: "Laptop", price: 450000, inStock: true, category: "Electronics" },
  { name: "Smart Phone", price: 150000, inStock: false, category: "Electronics" },
  { name: "Jeans", price: 20000, inStock: true, category: "Clothing" },
  { name: "T-Shirt", price: 5000, inStock: true, category: "Clothing" },
  { name: "Jollof Rice (Pack)", price: 1500, inStock: true, category: "Food" },
  { name: "Yam Chips", price: 2500, inStock: false, category: "Food" },
  { name: "Headphones", price: 30000, inStock: true, category: "Electronics" },
  { name: "Jacket", price: 40000, inStock: false, category: "Clothing" }
];

const categories = ["All", "Electronics", "Clothing", "Food"];
const sortOptions = ["None", "Low to High", "High to Low"];

const ProductCatalog = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOption, setSortOption] = useState("None");

  // filter by category
  let filtered = productsData.filter(p =>
    categoryFilter === "All" || p.category === categoryFilter
  );

  // sort by price if selected
  if (sortOption === "Low to High") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOption === "High to Low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="product-catalog">
      <h1>🛍️ Product Catalog</h1>

      <div className="controls">
        <div className="filter">
          <strong>Filter:</strong>{" "}
          {categories.map(cat => (
            <button
              key={cat}
              className={categoryFilter === cat ? "active" : ""}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort">
          <strong>Sort by Price:</strong>{" "}
          <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
            {sortOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <ul className="product-list">
        {filtered.map((p, index) => (
          <li
            key={index}
            className={`product-item ${p.inStock ? "in-stock" : "out-of-stock"}`}
          >
            <div className="product-info">
              <span className="product-name">{p.name}</span> – 
              <span className="product-price">₦{p.price.toLocaleString()}</span>
            </div>
            <div className="product-category">
              Category: {p.category}
            </div>
            <div className="product-action">
              {p.inStock ? (
                <button className="add-to-cart">Add to Cart</button>
              ) : (
                <span className="out-of-stock-label">OUT OF STOCK</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="summary">
        Showing {filtered.length} of {productsData.length} products
      </div>
    </div>
  );
};

export default ProductCatalog;
