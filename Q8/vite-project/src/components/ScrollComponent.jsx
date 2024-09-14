import React, { useState, useEffect } from 'react';

const ScrollComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <h1>Scroll Y Position: {scrollY}</h1>
    </div>
  );
};

export default ScrollComponent;
