import React, { useState } from 'react';

function Counter({ initial }) {
  const [count, setCount] = useState(initial);
  return (
    <div>
      <h3>Counter App</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter; 