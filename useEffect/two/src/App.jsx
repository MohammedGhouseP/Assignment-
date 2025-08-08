// App.jsx
import { useState, useEffect, useCallback } from "react";
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("http://api.quotable.io/random");
      const data = await res.json();
      console.log(data)
      setQuote({ content: data.content, author: data.author });
    } catch (err) {
      console.error(err);
      setQuote({ content: "Failed to load quote.", author: "" });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
    const id = setInterval(fetchQuote, 30_000);
    return () => clearInterval(id);
  }, [fetchQuote]);

  return (
    <div className="quote-wrapper">
      {loading ? (
        <div className="spinner" />
      ) : quote ? (
        <>
          <p className="content">“{quote.content}”</p>
          <p className="author">— {quote.author}</p>
        </>
      ) : null}

      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "Loading…" : "Get New Quote"}
      </button>
    </div>
  );
}
