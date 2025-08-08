// App.jsx
import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [seconds, setSeconds] = useState(0); // elapsed time
  const [running, setRunning] = useState(false); // stopwatch flag
  const [target, setTarget] = useState(10); // alarm threshold
  const alarmRef = useRef(
    new Audio("https://assets.mixkit.co/sfx/preview/mixkit-bell-ring-586.mp3")
  );

  /* -------- handle start / stop -------- */
  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setSeconds(0);
    setRunning(false);
  };

  /* -------- core timing logic -------- */
  useEffect(() => {
    if (!running) return; // do nothing when paused

    const id = setInterval(() => setSeconds((s) => s + 1), 1_000);

    return () => clearInterval(id); // cleanup on stop/unmount
  }, [running]);

  /* -------- fire sound once -------- */
  useEffect(() => {
    if (seconds === target && seconds !== 0) {
      alarmRef.current.currentTime = 0; // rewind in case user hits twice
      alarmRef.current.play().catch(console.error);
    }
  }, [seconds, target]);

  /* -------- UI -------- */
  return (
    <div className="wrapper">
      <h1>{seconds}s</h1>

      <div className="btn-row">
        <button onClick={handleStart} disabled={running}>
          Start
        </button>
        <button onClick={handleStop} disabled={!running}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <label className="target">
        Target&nbsp;
        <input
          type="number"
          min="1"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
        />
        &nbsp;s
      </label>
    </div>
  );
}
