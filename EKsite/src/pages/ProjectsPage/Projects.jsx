import NavBar from "../../components/NavBar"

const Projects = () => {
  return (
    <>
      <div className="projectsContainer">
        <NavBar/> 
        <h1>Projects</h1>
        <div className="projectCardsContainer">
          <div className="projectCard"></div>
          <div className="projectCard"></div>
          <div className="projectCard"></div>
          <div className="projectCard"></div>
        </div>
      </div>  
    </>
  )
}

export default Projects