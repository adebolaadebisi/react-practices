import React, { useState, useEffect } from "react";
import "./UniversityDirectory.css";

const UniversityDirectory = () => {
  const [universities, setUniversities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch universities from API
  const fetchUniversities = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://universities.hipolabs.com/search?country=Nigeria");
      if (!res.ok) throw new Error("Failed to fetch universities");

      const data = await res.json();

      // Sort alphabetically by name
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

      setUniversities(sortedData);
      setFiltered(sortedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchUniversities();
  }, []);

  // Filter results based on search
  useEffect(() => {
    const results = universities.filter((uni) =>
      uni.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, universities]);

  return (
    <div className="uni-container">
      <h2>Nigerian Universities</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <p className="count">
            Showing {filtered.length} universities
          </p>

          <ul className="uni-list">
            {filtered.map((uni, index) => (
              <li key={index} className="uni-item">
                <h3>{uni.name}</h3>
                <p>{uni["state-province"] || "N/A"}</p>
                {uni.web_pages && (
                  <a
                    href={uni.web_pages[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     {uni.web_pages[0]}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UniversityDirectory;
