

const projectInformationModal = ({ project }) => {

  return (
    <div className="informationModalContainer">
      <div className="informationTitle">
        <h1>{project.title}</h1>
      </div>
      <div className="informationDescriptionContainer">    
         <img className="img" src={project.image} alt={project.title} />
        <div className="informationContainer">
          <p>lorem</p>
        </div>
      </div>
      {/* <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <div>
        <h3>Additional Images</h3>
        {project.projectInformation.images.map((image, index) => (
          <img key={index} src={image} alt={`Additional ${index}`} />
        ))}
      </div> */}
    </div>
  );
};

export default projectInformationModal;
