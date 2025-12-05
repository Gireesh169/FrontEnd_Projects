



// function Button() {
//   let counter = 0;
//   const handleClick = (name) => {
// if(counter < 5){
//   counter += 1;
//   console.log(`Button clicked ${name} times`);
// } else {
//   console.log("Button click limit reached");
// }
//   }

//   return (
//     <button onClick={handleClick}>click me</button>
//   )
// }

// export default Button
function Button() {
  const handleClick = (e) => 
    e.target.textContent="clicked stop it now";
  

  return (
    <button onDoubleClick={(e) => handleClick(e)}>click me</button>
  )
}
export default Button