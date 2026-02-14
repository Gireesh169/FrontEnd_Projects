import rada from "../assets/rada.jpg";

function Card(){
  return (
    <div className="card">
      <img id ="hero" className="card-image" src={rada} alt="React Logo" />
      <h2>I am learning React</h2>
      <p>This card can be used to display content in a styled container.</p>
      <p>Click the image to hide it.      </p>
     <button type="button" onclick='document.getElementById("hero").innerHTML = "Hello JavaScript!"'>Click Me!</button>
    </div>
  );
}

export default Card;
