import { useState } from "react";
import ExpensiveTree from "./ExpensiveTree";

export default function App() {
    return (
      <>
        <Form />
        <ExpensiveTree />
      </>
    );
  }

  function Form() {
    let [color, setColor] = useState('red');
    return (
      <>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
      </>
    );
  }
