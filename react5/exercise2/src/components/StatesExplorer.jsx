
import React, { useState } from "react";
import statesData from "./statesData.jsx";

const Explorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Filter by state name or capital
  const filteredStates = statesData.filter(
    (state) =>
      state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="explorer-container">
      <h2 className="explorer-header">Nigeria States Explorer</h2>
      <input
        type="text"
        placeholder="Search by state or capital..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="explorer-input"
      />
      <p className="explorer-count">
        Total Results: {filteredStates.length}
      </p>
      {filteredStates.length > 0 ? (
        <ul className="explorer-list">
          {filteredStates.map((state, index) => (
            <li key={index} className="explorer-card">
              <h3>{state.name}</h3>
              <p><strong>Capital:</strong> {state.capital}</p>
              <p><strong>Region:</strong> {state.region}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-result">No result found</p>
      )}
    </div>
  );
};
export default Explorer;










