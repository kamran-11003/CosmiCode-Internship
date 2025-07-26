import React, { useState, useEffect } from 'react';

function Welcome() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>Welcome to the React App!</h2>
      <p>Current date and time: {date.toLocaleString()}</p>
    </div>
  );
}

export default Welcome; 