import NavBar from "../../components/NavBar"
import photo from "../../assets/images/GrupPhotos/ekwador4.jpg"

const Projects = () => {
  return (
    <>
      <div className="projectsContainer">
        <NavBar/> 
        <h1>Projects</h1>
        <div className="projectCardsContainer">
          <div className="projectCard">
            <img className="projectImg" src={photo} alt="photo" />
            <div className="projectInformationContainer">
              <h1 className="projectHeader">header</h1>
              <p className="projectDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
              <button className="projectButton">read more</button>
            </div>
          </div>
          <div className="projectCard"></div>
          <div className="projectCard"></div>
          <div className="projectCard"></div>
        </div>
      </div>  
    </>
  )
}

export default Projects