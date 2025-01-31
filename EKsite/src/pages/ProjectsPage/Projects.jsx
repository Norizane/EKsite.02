import NavBar from "../../components/NavBar"
import SecondSectionModal from "../../components/Modals/secondSectionModal"
import ThirdSectionModal from "../../components/Modals/thirdSectionModal"
const Projects = () => {
  return (
    <>
      <div className="projectsContainer">
        <NavBar/> 
        <div className="containers">
        <div className="fistProjectContainer"></div>
        <div className="secondProjectContainer">
          <SecondSectionModal/>
        </div>
        <div className="thirdProjectContainer">
          <ThirdSectionModal/>
        </div>
        </div>
      </div>  
    </>
  )
}

export default Projects