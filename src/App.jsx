import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <div>CALCUL</div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Divide by 2 or multiply by 6</p>
      <button onClick={() => setCount(count / 2)}>/</button>
      <button onClick={() => setCount(count * 6)}>*</button>
    </div>
  );
}

export default App;
