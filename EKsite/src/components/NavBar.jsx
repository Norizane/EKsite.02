import MediumLogo from "../assets/images/BigLogo.png"

const NavBar = () => {
  return (
    <>
      <div className="navBarContainer">
        <img src={MediumLogo} alt="MediumLogo" />
        <div className="navBarLinks">
          <a href="">HOME</a>
          <a href="">MEMBERS</a>
          <a href="">PROJECTS</a>
          <a href="">ABOUT</a>
        </div>
      </div>
    </>
  )
}

export default NavBar