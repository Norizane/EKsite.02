import { useState } from "react";
import { useNavigate } from "react-router";

const LogIn = () => {
  const [isActive, setIsActive] = useState(false);
  let navigate = useNavigate();
  
  const toggleClass = () => {
    setIsActive(!isActive);
    
    setTimeout(() => {
      navigate("/home");
  }, 1000);
  };
  return (
    <div className={`logInContainer ${isActive ? 'active' : ''}`}>
      <h1 className="formHeader">LogIn</h1>
      <div className="formGroup">
        <input id="Email" type="text" placeholder="Email"/>
        <input id="Password" className='secondInput' type="text" placeholder="Password"/>
      </div>
      <div className="buttonContainer">
        <button onClick={toggleClass} className="LogInButton">LogIn</button>
        <p><a href="">Sign Up</a></p>
      </div>
    </div>
  )
}

export default LogIn