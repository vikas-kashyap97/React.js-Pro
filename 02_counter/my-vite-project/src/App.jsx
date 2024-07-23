import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 6
  const addvalue = () => {
    // counter = counter + 1
    
    if (counter < 20) {
      setCounter(counter + 1);
    }
    setCounter(prevCounter => prevCounter + 1);   // it is for direct jump to 4 number for interview question
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };
  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  );
}

export default App;
