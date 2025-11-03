import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState("2025-11-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});
  const [isCustom, setIsCustom] = useState(false);

  // Function to calculate time difference
  const calculateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date(targetDate);
    const difference = eventDate - now;

    if (difference <= 0) return { expired: true };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, expired: false };
  };

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Handle date input
  const handleDateChange = (e) => {
    setTargetDate(e.target.value);
    setIsCustom(true);
  };

  return (
    <div className="countdown-container">
      <h2>Countdown to {isCustom ? "Your Event" : "Independence Day"}</h2>

      {timeLeft.expired ? (
        <h1 className="expired">Event Started!</h1>
      ) : (
        <h1>
          {timeLeft.days ?? "--"} Days : {timeLeft.hours ?? "--"} Hours :{" "}
          {timeLeft.minutes ?? "--"} Minutes : {timeLeft.seconds ?? "--"} Seconds
        </h1>
      )}

      <p>
        Target Date:{" "}
        {new Date(targetDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="date-picker">
        <label>Set Custom Date:</label>
        <input type="datetime-local" onChange={handleDateChange} />
      </div>
    </div>
  );
};

export default CountdownTimer;
