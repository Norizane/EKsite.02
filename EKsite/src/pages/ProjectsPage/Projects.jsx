import NavBar from "../../components/NavBar"
import ProjectSection from "../../components/Modals/projectSection"
import projectData from "./ProjectsData"
const Projects = () => {
  return (
    <>
      <div className="projectsContainer">
        <NavBar/> 
        <h1>Projects</h1>
        <ProjectSection projects={projectData}/>
      </div>  
    </>
  )
}

export default Projects