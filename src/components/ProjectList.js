import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  const { projects } = props;

  return (
    <div>
      <h2>Projects:</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {/* Pass technologies as props to ProjectItem */}
          <ProjectItem technologies={project.technologies} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
