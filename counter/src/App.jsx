import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCount] = useState(15);
  const addValue = () => {
    if (counter < 20) {
      setCount(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
