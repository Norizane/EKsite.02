import NavBar from "../../components/NavBar";
import Background from "../../assets/images/EKbackground.png";
import { useEffect } from "react";
const About = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("showSection");
        } 
      });
    });


    const animatedContainers = document.querySelectorAll(".descriptionContainer");
    animatedContainers.forEach((el) => observer.observe(el));

    return () => {
      animatedContainers.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div
        className="aboutContainer"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <NavBar />
        <h1>Rodzina</h1>
        <div className="firstAboutContainer">
          <dir className="videoContainer"></dir>
          <div className="descriptionContainer"></div>
        </div>
        <div className="secondContainer">
          <div className="secondDescriptionContainer">
            <div className="descriptionContainer" id="secondSection">
              <div className="description">
                <h1></h1>
              </div>
              <div className="img"></div>
            </div>
            <div className="descriptionContainer" id="secondSection">
              <div className="description">
                <h1></h1>
              </div>
              <div className="img"></div>
            </div>
            <div className="descriptionContainer" id="secondSection">
              <div className="description">
                <h1></h1>
              </div>
              <div className="img"></div>
            </div>
          </div>
        </div>
        <div className="thirdContainer">
          <h1>Ask Us</h1>
          <div className="askUsContainer"></div>
          <h2>Social Media</h2>
          <div className="socialMediaContainer">
            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
            <div className="icon"><i className="fa-brands fa-facebook"></i></div>
            <div className="icon"><i className="fa-brands fa-discord"></i></div>
            <div className="icon"><i className="fa-brands fa-youtube"></i></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
