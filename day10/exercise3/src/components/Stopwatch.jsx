import React, { useState, useRef, useEffect } from "react";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [laps, setLaps] = useState([]);
  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const reset = () => {
    stop();
    setTime(0);
    setLaps([]);
  };
  const lap = () => {
    setLaps([...laps, time]);
  };
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);
  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };
  return (
    <div className="stopwatch-container">
      <h2> Stopwatch</h2>
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        <button onClick={lap}>Lap</button>
      </div>
      {laps.length > 0 && (
        <ul className="laps">
          {laps.map((lapTime, index) => (
            <li key={index}>
              Lap {index + 1}: {formatTime(lapTime)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Stopwatch;