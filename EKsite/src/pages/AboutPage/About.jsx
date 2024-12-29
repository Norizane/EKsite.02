import NavBar from "../../components/NavBar"
import Background from "../../assets/images/EKbackground.png"
const About = () => {
  return (
    <>
    <div className="aboutContainer" style={{backgroundImage: `url(${Background})`,}}>
     <NavBar/>  
     <h1>Rodzina</h1>
     <div className="firstAboutContainer">
      <dir className="videoContainer"></dir>
      <div className="descriptionContainer">
      </div>
     </div>
     <div className="secondContainer">
      <div className="secondDescriptionContainer">
       <div className="descriptionContainer">
          <div className="description"><h1></h1></div>
          <div className="img"></div>
       </div>
       <div className="descriptionContainer">
          <div className="description"><h1></h1></div>
          <div className="img"></div>
       </div>
       <div className="descriptionContainer">
          <div className="description"><h1></h1></div>
          <div className="img"></div>
       </div>
      </div>
     </div>
     <div className="thirdContainer">
      <h1>Ask Us</h1>
      <div className="askUsContainer"></div>
      <h2>Social Media</h2>
      <div className="socialMediaContainer">
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
     </div>
    </div>   
    </>
  )
}

export default About