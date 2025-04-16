import React from "react";
import Phone from "../Phone";

export default class Showcase extends React.Component {
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
            {project.techs.map(tech => (
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
        {project.confidential && (
          <p
            className="text-bold fg-red"
            title="Due to the NDA, no screenshot and further information about the project is allowed to be sharing, sorry!"
          >
            <span className="mif-warning"></span> Confidential!
          </p>
        )}
        <p>{project.description}</p>
        {project.role && (
          <p>
            <i>Role/Responsibility: {project.role}</i>
          </p>
        )}
        {project.actions && (
          <div>
            <h3>View more</h3>
            <div className="tags">
              {project.actions.map(action => (
                <a
                  key={action.name}
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in a new tab"
                >
                  {action.name}
                </a>
              ))}
            </div>
          </div>
        )}
        {project.screenshots && (
          <div className="screenshot">
            <h3>Screenshots</h3>
            <div className={`my-4 ${project.mobile ? "mobile-slider" : ""}`}>
              {project.screenshots.map((screenshot, i) => (
                <div key={i}>
                  {project.mobile && !project.framed ? (
                    <Phone key={i} src={screenshot} />
                  ) : (
                    <img src={screenshot} alt="" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {project.src && (
          <div className="preview">
            <h3>Demo</h3>
            <iframe
              className="extended"
              title={project.name}
              src={project.src}
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    );
  }
}
