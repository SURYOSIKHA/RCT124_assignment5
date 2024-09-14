import React, { useState, useEffect } from 'react';

 const FetchData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setItems(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h1>Data List:</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
