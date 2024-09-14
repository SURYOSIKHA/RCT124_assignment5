import React from 'react';
import FetchData from './components/FetchData';
import MouseTracker from './components/MouseTracker';
import TitleUpdater from './components/TitleUpdater';

const App = () => {
  return (
    <div>
      <FetchData />
      <MouseTracker />
      <TitleUpdater />
    </div>
  );
};

export default App;
