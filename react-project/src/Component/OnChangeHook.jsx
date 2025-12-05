import { useState } from "react";

function OnChangeHook() {
  
  const [name, setName] = useState("");   
  const [quantity, setQuantity] = useState(0);
  function handleChange(event) {
    setName(event.target.value);
  }
  function Quantity(quantity) {
    setQuantity(quantity.target.value);
  }

  return (
    <div style={{textAlign: "center", marginTop: "20px", background: "lightgray"}} >
      <input 
        value={name} 
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input type="text" onChange={Quantity}   />
      <p>Name : {name}</p>
      <p>Quantity : {quantity}</p>
    </div>
  );
}

export default OnChangeHook;
