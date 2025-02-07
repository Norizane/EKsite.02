import { useState, useEffect } from "react";

const FirstProjectSectionModal = () => {
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextAnimation(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`headerContainer ${textAnimation ? "animation" : ""}`}>
        <h1>Bringing Ideas to Life</h1>
      </div>
      <div className="aboutProjectsContainer">
        <div
          className={`paragraphContainer ${
            textAnimation ? "secondAnimation" : ""
          }`}
        >
          <p>
            Inspiration can come from anywhere. That's why our projects bring
            together different fields—quizzes, graphics, drawings, music, and
            much more. Each element is a unique way to express ourselves and
            experiment with new ideas. None of this would be possible without
            the incredible people who make up our team. Their talent,
            dedication, and passion bring every project to life. Together, we
            create a space full of creativity and limitless possibilities. If
            you want to see what we've been working on—welcome to our world!
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstProjectSectionModal;
