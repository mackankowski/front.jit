import { useState } from 'react';
import ExpensiveTree from './ExpensiveTree';

export default function App() {
  let [color, setColor] = useState('red');
  const referenceProps = {name: 'front.jit'}
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree referenceProps={referenceProps}/>
    </div>
  );
}


