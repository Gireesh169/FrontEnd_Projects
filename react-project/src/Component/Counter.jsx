
import react, {useState} from "react";


function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

  return (
    <div style={{textAlign: "center", marginTop: "20px", backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px"}}>
      <h2>Counter Component</h2>
      <p>Count: <span style={{fontSize: "100px"}}>{count}</span></p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;