import React from 'react';
import Welcome from './Welcome';
import Counter from './Counter';
import SimpleForm from './SimpleForm';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Welcome />
      <Counter initial={0} />
      <SimpleForm />
    </div>
  );
}

export default App;
