import React from "react";

function ProjectItem(props) {
  const { technologies } = props;

  return (
    <div>
      <h3>Technologies:</h3>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>
            <span>{technology}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItem;
