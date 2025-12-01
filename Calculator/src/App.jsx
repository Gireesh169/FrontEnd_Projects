
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Use eval carefully in production
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ maxWidth: "200px", margin: "auto", textAlign: "center" }}>
      <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "100%", marginBottom: "10px", textAlign: "right" }}
      />
      <div>
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div>
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div>
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div>
        {["0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={btn === "=" ? handleCalculate : () => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
      <button onClick={handleClear} style={{ marginTop: "10px" }}>
        Clear
      </button>
    </div>
  );
};

export default Calculator;