import { useState } from "react";
import ExpensiveTree from "./ExpensiveTree";

export default function App() {
    return (
      <ColorPicker>
        <p>Hello, world!</p>
        <ExpensiveTree />
      </ColorPicker>
    );
  }
  
  type Props = {
    children: JSX.Element | JSX.Element[]
  }

  function ColorPicker({ children }: Props) {
    let [color, setColor] = useState("red");
    return (
      <div style={{ color }}>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        {children}
      </div>
    );
  }