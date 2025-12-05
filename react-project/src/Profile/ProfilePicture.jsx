import rada from '../assets/rada.jpg';

function ProfilePicture() {

  const handleClick = (e) => {
    e.target.style.display = "none";
  }

  return (
    <img 
      onClick={handleClick} 
      src={rada} 
      width="150" // optional
    />
  );
}

export default ProfilePicture;
