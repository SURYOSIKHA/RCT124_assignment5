import React, { useState, useEffect } from 'react';

 const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => setCount(c => c + 1), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default TitleUpdater;
