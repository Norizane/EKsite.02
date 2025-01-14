import ProjectCard from "./projectCard";

const projectSection = ({ projects }) => {
  return (
    <>
      <div className="projectCardsContainer">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            className={index === projects.length - 1 ? "lastProject" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default projectSection;
