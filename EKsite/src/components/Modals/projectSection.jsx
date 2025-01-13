import ProjectCard from "./projectCard"

const projectSection = ({projects}) => {
  return (
    <>
       <div className="projectCardsContainer">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
    </>
  )
}

export default projectSection