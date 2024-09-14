import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(t => t + 1), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Timer: {time}</h1>
    </div>
  );
};

export default TimerComponent;
