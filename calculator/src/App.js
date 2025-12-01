import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue(value + val);
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="cal">
      <h2>Calculator</h2>

      <input value={value} readOnly />

      <div className="a">
        <button onClick={() => setValue("")}>C</button>
        <button onClick={() => setValue(value.slice(0, -1))}>DEL</button>
      </div>

      <div className="b">
        {"123".split("").map((n) => (
          <button key={n} onClick={() => handleClick(n)}>{n}</button>
        ))}
        <button onClick={() => handleClick("+")}>+</button>
      </div>

      <div className="c">
        {"456".split("").map((n) => (
          <button key={n} onClick={() => handleClick(n)}>{n}</button>
        ))}
        <button onClick={() => handleClick("-")}>-</button>
      </div>

      <div className="d">
        {"789".split("").map((n) => (
          <button key={n} onClick={() => handleClick(n)}>{n}</button>
        ))}
        <button onClick={() => handleClick("*")}>*</button>
      </div>

      <div className="e">
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}
