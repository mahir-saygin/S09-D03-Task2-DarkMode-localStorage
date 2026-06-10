import React, { useState } from 'react';

import Charts from './components/Charts';
import Navbar from './components/Navbar';
import { useDarkMode } from './hooks/useDarkMode';
import { data } from './data.js';

const App = () => {
  const [coinData, setCoinData] = useState(data);
  const [geceModu, setGeceModu] = useDarkMode(false);

  return (
    <div className={geceModu ? 'dark-mode App' : 'App'}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
