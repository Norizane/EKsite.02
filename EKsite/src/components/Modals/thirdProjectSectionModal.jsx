import moskaArt from '../../assets/images/ProjectsImages/MoskaArt2.png'

const thirdSectionModal = () => {
  return (
    <>  
      <div className='artTextContainer'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="artImageContainer">
        <img className='artImage' src={moskaArt} alt="jmArt" />
      </div>
    </>
  
  )
}

export default thirdSectionModal