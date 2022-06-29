import { useState } from 'react';
import ExpensiveTree from './ExpensiveTree';



export default function App() {
  let [color, setColor] = useState('red');

    // TODO: show difference between passing neither primitive type value or reference value to the ExpensiveTree

  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}


