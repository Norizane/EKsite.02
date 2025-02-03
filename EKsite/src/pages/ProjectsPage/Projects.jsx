import NavBar from "../../components/NavBar"
import FirstSectionModal from "../../components/Modals/firstProjectSectionModal"
import SecondSectionModal from "../../components/Modals/secondProjectSectionModal"
import ThirdSectionModal from "../../components/Modals/thirdProjectSectionModal"
const Projects = () => {
  return (
    <>
      <div className="projectsContainer">
        <NavBar/> 
        <div className="containers">
        <div className="fistProjectContainer">
          <FirstSectionModal/>
        </div>
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