import React, { useState } from "react";
import "./GitHubSearch.css";

const GitHubSearch = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    setUser(null);
    setRepos([]);

    try {
      // Fetch user details
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");
      const userData = await userRes.json();

      // Fetch repositories
      const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoData = await repoRes.json();

      setUser(userData);
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="github-container">
      <h2>GitHub User Search</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUser}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {user && !loading && !error && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <h3>@{user.login}</h3>
          <p><strong>{user.name}</strong></p>
          <p>{user.bio || "No bio available"}</p>

          <p>Repos: {user.public_repos}</p>
          <p> Followers: {user.followers}</p>

          <h4>Repositories:</h4>
          <ul className="repo-list">
            {repos.slice(0, 5).map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GitHubSearch;

