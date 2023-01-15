import React from "react";

export default class QBCS2 extends React.Component {
  render() {
    const { project, viewCategory } = this.props;
    return (
      <div className="showcase">
        <h3>Technologies</h3>
        <div className="meta">
          <div
            className="tags"
            title="Browse all projects with this technology"
          >
            {project.techs.map((tech) => (
              <span
                key={tech}
                className={tech.toLowerCase()}
                onClick={() => viewCategory(tech)}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <h3>Description</h3>
        {project.description}
        <h3>Document</h3>
        <iframe
          className="extended"
          title={project.name}
          src={project.src}
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
}
