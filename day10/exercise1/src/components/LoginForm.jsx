import React, { useRef, useEffect, useState } from "react";
const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // Focus email input on mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  // Clear fields and reset focus
  const handleClear = () => {
    setEmail("");
    setPassword("");
    emailRef.current.focus();
    setLoggedIn(false);
  };
  // Move focus to password field when pressing Enter in email
  const handleEmailKeyPress = (e) => {
    if (e.key === "Enter") passwordRef.current.focus();
  };
  // Handle login logic (simple local validation)
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }
    // :white_tick: Simulate successful login
    setLoggedIn(true);
  };
  // :white_tick: Handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    setPassword("");
    // Keep email filled or clear it — your choice:
    // setEmail("");
    emailRef.current.focus();
  };
  return (
    <div className="login-container" style={{ maxWidth: "320px", margin: "2rem auto" }}>
      <h2>{loggedIn ? "Welcome!" : "Login"}</h2>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleEmailKeyPress}
            required
          />
          <label>Password:</label>
          <input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="btns" style={{ marginTop: "1rem" }}>
            <button type="submit">Login</button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      ) : (
        <div className="welcome" style={{ textAlign: "center" }}>
          <p>You are now logged in as:</p>
          <strong>{email}</strong>
          <div style={{ marginTop: "1rem" }}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginForm;