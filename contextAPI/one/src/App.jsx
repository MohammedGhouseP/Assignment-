// App.jsx – root component that owns the state
import {useState} from "react";
import TopMain from "./components/TopMain";
import "./index.css";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="app">
      <h1>Props-Drilling Demo</h1>

      {/* simple controlled input */}
      <input
        type="text"
        placeholder="Enter your name…"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      {/* pass `name` down the tree */}
      <TopMain name={name} />
    </div>
  );
}
