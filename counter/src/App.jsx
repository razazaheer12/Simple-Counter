import React, { useState } from 'react';
import './index.css';

function CounterApp() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => { if (counter > 0) setCounter(counter - 1); };
  const reset = () => setCounter(0);

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <div className="counter-display"><h2>{counter}</h2></div>
      <div className="button-group">
        <button onClick={increase} className="btn btn-increase">Increase</button>
        <button onClick={decrease} className="btn btn-decrease" disabled={counter === 0}>Decrease</button>
        <button onClick={reset} className="btn btn-reset">Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
