import rada from "../assets/rada.jpg";

function Card(){
  return (
    <div className="card">
      <img className="card-image" src={rada} alt="React Logo" />
      <h2>I am learning React</h2>
      <p>This card can be used to display content in a styled container.</p>
    </div>
  );
}

export default Card;
