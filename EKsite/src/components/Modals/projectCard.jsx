

const projectCard = ({ title, description, image, className}) => {
  return (
    <>
      <div className={`projectCard ${className}`}>
      <img className="projectImg" src={image} alt={title} />
        <div className="projectInformationContainer">
          <h1 className="projectHeader">{title}</h1>
          <p className="projectDescription">
           {description}
          </p>
          <button className="projectButton">read more</button>
        </div>
      </div>
    </>
  );
};

export default projectCard;