import React from "react";

export default class UpStage extends React.Component {
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
        <div>
          UpStage is an online venue for live performance: remote performers
          collaborate in real time using digital media. Online audiences
          anywhere in the world join events by clicking a link to open the
          virtual stage in their web browser.
          <br />
          UpStage is open source and available to anyone who would like to use
          it.
        </div>
        <h3>Demo</h3>
        <iframe
          style={{ aspectRatio: "16/9" }}
          title={project.name}
          src={project.demo}
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
}
