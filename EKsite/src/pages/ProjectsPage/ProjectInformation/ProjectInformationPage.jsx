import NavBar from "../../../components/NavBar"
import ProjectInformationModal from "../../../components/Modals/projectInformationModal"
import { useParams } from "react-router-dom";
import projectsData from "../ProjectsData"
const ProjectInformationPage = () => {
  const { id } = useParams(); 
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <>
      <div className="ProjectInformationContainer">
        <NavBar/>
        <ProjectInformationModal project={project} />
      </div>
    </>
  )
}

export default ProjectInformationPage