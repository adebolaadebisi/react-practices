import React, { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-80 p-8 border rounded-lg flex flex-col gap-4 bg-white"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-orange-500" /> Remember me
        </label>
        <button
          type="submit"
          className="relative px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 active:scale-95 transition-all duration-200"
          disabled={loading}
        >
          {loading && (
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default App;
