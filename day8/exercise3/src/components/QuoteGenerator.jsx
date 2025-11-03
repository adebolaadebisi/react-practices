import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"
      );
      if (!res.ok) throw new Error("Failed to fetch quote");
      const data = await res.json();
      const quoteData = data[0];
      setQuote({
        q: quoteData.q,
        a: quoteData.a,
      });
      setCount((prev) => prev + 1);
    } catch (err) {
      setError("Could not fetch quote. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const copyQuote = () => {
    if (quote)
      navigator.clipboard.writeText(`"${quote.q}" - ${quote.a}`);
    alert("Quote copied to clipboard!");
  };

  return (
    <div className="quote-container">
      <h2>Daily Inspiration</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {quote && !loading && !error && (
        <div className="quote-box">
          <p className="quote-text">"{quote.q}"</p>
          <p className="quote-author">- {quote.a}</p>
          <p className="quote-length">
            Length: {quote.q.length} characters
          </p>
          <p className="quote-count">Quotes viewed: {count}</p>
        </div>
      )}

      <div className="buttons">
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={copyQuote}>Copy Quote</button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
