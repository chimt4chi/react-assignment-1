import { useState } from "react";
import Greetings from "./components/Greetings";

function App() {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState("");

  const handleCountDec = () => {
    if (count <= 0) {
      setWarning("Counter cannot be negative!");
      return;
    }
    setCount(count - 1);
    setWarning("");
  };

  const handleCountInc = () => {
    setCount(count + 1);
    setWarning("");
  };

  return (
    <>
      <h1>Q1. Counter App</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={handleCountDec}>-</button>
        <p>{`count is ${count} `} </p>
        <button onClick={handleCountInc}>+</button>
        {/* {count < 0 ? <p>Counter cannot be negative!</p> : null} */}
        {/* counter still gets updated */}
        {warning && <p>{warning}</p>}
      </div>
      <div>
        <h2>Q2. User Greeting Component</h2>
        <Greetings name={"Rohit"} />
        <Greetings />
      </div>
    </>
  );
}

export default App;
