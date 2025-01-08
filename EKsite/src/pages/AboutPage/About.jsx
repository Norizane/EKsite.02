import NavBar from "../../components/NavBar";
import Background from "../../assets/images/EKbackground.png";
import Video from "../../assets/video/video.mp4";
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

    const animatedContainers = document.querySelectorAll(
      ".descriptionContainer"
    );
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
          <video controls autoPlay loop muted className="video">
            <source src={Video} type="video/mp4" />
          </video>
          <div className="descriptionContainer">
            <h1>How it all started</h1>
            <p>Our story begins during a joyful return from the birthday party of one of our Ecuadorian ladies. During this fascinating party and the journey back, an idea was born, which then turned into a beautiful adventure that continues to this day. On that day, the founding fathers, led by Admin, not only created our group but also made a kind of vow. To this day, we all live in Ecuador according to these words: “Bo rodzina jest zawsze razem!!”</p>
          </div>
        </div>
        <div className="secondContainer">
          <div className="secondDescriptionContainer">
            <div className="descriptionContainer" id="secondSection">
              <div className="description">
                <p>
                {" "}
                  In the same year, the Ecuador International group was also
                  established to expand our horizons and develop skills by
                  playing with members from outside our country's borders in
                  various titles, starting with CS . This period is also crucial
                  for us as individuals wanting to expand our competencies and
                  enter an unknown chapter of our personal lives. This period
                  can be described with the words: "Ekwador JAZDAAAAAAAA!!".
                </p>
              </div>
              <div className="img"></div>
            </div>
            <div className="descriptionContainer" id="secondSection">
              <div className="description">
                <p>
                {" "}
                  After two years, our shared good times resulted in another
                  exciting chapter in the history of our group: the creation of
                  our Discord server. This gave us new opportunities not only in
                  terms of entertainment but also for meeting and integrating
                  new members into our community. I would describe this period
                  as "New Friends and Companions." However, it would not be
                  realistic if our beautiful history did not also include
                  challenges. This period could also be referred to as the{" "}
                  <a className="paraguayanRebellionLink" href="about.html">"Great Paraguayan Rebellion,"</a> from
                  which we emerged victorious and stronger than before.
                </p>
              </div>
              <div className="img"></div>
            </div>
            <div className="descriptionContainer" id="secondSection">
              <div className="description">
                <p>
                {" "}
                  We move to the present day, during which, among other things,
                  this website is being created. With many interesting projects
                  and experiences behind us, I can confidently say that the
                  people who contribute to this group are truly amazing. I am
                  sure that this project is not the last, and the website will
                  require updates in the future. Therefore, this period is best
                  described by the words: "Ciąg dalszy nastąpi"
                </p>
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
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-discord"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
