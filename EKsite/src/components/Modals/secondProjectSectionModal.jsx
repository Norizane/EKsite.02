import ekMixtape from "../../assets/images/ProjectsImages/EKWADOREP.jpeg"
import djAdmin from "../../assets/images/ProjectsImages/DJADMIN.png"
import musicbasePhoto from "../../assets/images/ProjectsImages/musicbasePhoto.jpg"

const secondSectionModal = () => {
  return (
    <>
    <div className="secondSectionContainer">
      <div className="images-container">
          <img className="image image-1" src={ekMixtape} alt="ekMixtape" />
          <img className="image image-3" src={djAdmin} alt="ekMixtape" />
          <img className="image image-2" src={musicbasePhoto} alt="ekMixtape" />
      </div>
      <div className="descriptionContainer">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    </>
  )
}

export default secondSectionModal