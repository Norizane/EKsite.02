import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectCard = ({ id, title, description, image,  }) => {
  return (
    <div className="projectCard" >
      <img className="projectImg" src={image} alt={title} />
      <div className="projectInformationContainer">
        <h1 className="projectHeader">{title}</h1>
        <p className="projectDescription">{description}</p>
        <Link to={`/projectInformation/${id}`}>
          <button className="projectButton">Read More</button>
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProjectCard;
