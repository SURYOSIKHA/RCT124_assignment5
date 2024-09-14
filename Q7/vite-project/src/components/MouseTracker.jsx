import React, { useState, useEffect } from 'react';

 const MouseTracker = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const trackMouse = (e) => setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', trackMouse);

    return () => window.removeEventListener('mousemove', trackMouse);
  }, []);

  return (
    <div>
      <h1>Mouse Position:</h1>
      <p>X: {pos.x}, Y: {pos.y}</p>
    </div>
  );
};

export default MouseTracker;
