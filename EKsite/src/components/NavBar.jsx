import BigLogo from "../assets/images/EKLOGOv2.png"
import { useNavigate } from "react-router";

const NavBar = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="navBarContainer">
        <img className="BigLogo" src={BigLogo} alt="BigLogo" />
        <div className="navBarLinks">
          <a onClick={()=>{navigate("/home")}} href="">HOME</a>
          <a onClick={()=>{navigate("/members")}} href="">MEMBERS</a>
          <a onClick={()=>{navigate("/projects")}} href="">PROJECTS</a>
          <a onClick={()=>{navigate("/about")}} href="">ABOUT</a>
        </div>
      </div>
    </>
  )
}

export default NavBar