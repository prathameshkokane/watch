// AnalogClock.js
import React, { useState, useEffect } from "react";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes * 60 + seconds) / 3600) * 360;
  const hourDeg = ((hours * 60 + minutes) / 720) * 360;

  return (
    <div className="analog-clock">
      <div
        className="hand"
        style={{ transform: `rotate(${secondDeg}deg)` }}
      ></div>
      <div
        className="hand"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      ></div>
      <div
        className="hand"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      ></div>
    </div>
  );
};

export default AnalogClock;
