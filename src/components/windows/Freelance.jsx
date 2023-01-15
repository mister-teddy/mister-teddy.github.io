import React from "react";
import ScrollBar from "react-custom-scrollbars";
import ListView from "../ListView";
import LoadableImage from "../LoadableImage";
import db from "../../database";
import Ring from "../Ring";

export default class Freelance extends React.Component {
  state = {
    currentProject: "",
    address: "",
    loading: false,
  };

  getFavicon = (site) => `https://www.google.com/s2/favicons?domain=${site}`;

  preview = (project) => {
    this.setState({
      currentProject: project,
      address: project,
      loading: true,
    });
  };

  go = (e) => {
    if (e.keyCode === 13) {
      this.preview(this.state.address);
    }
  };

  finish = () => {
    this.setState({ loading: false });
  };

  render() {
    const { currentProject, address, loading } = this.state;
    return (
      <div className="freelance-window navview navview-expand-sm">
        <nav className="navview-pane bg-white p-4">
          <h1>Sites</h1>
          <ScrollBar
            style={{ height: "calc(100% - 106px)", width: "100%" }}
            renderTrackHorizontal={(props) => (
              <div
                {...props}
                className="track-horizontal"
                style={{ display: "none" }}
              />
            )}
          >
            <ul className="listview view-list">
              {Object.keys(db.freelance).map((platform, i) => (
                <ListView
                  key={i}
                  name={`${db.freelance[platform].length} ${platform} sites`}
                  open
                >
                  {db.freelance[platform].map((project, j) => (
                    <li
                      key={j}
                      className={`node ${
                        project === currentProject
                          ? "current current-select"
                          : ""
                      }`}
                      onClick={() => this.preview(project)}
                    >
                      <span className="icon">
                        <LoadableImage
                          src={this.getFavicon(project)}
                          alt={project}
                        />
                      </span>
                      <div className="data">{project}</div>
                    </li>
                  ))}
                </ListView>
              ))}
            </ul>
          </ScrollBar>
          <div className="address-bar input">
            <input
              type="text"
              value={address}
              placeholder="Enter an url..."
              onChange={(e) => this.setState({ address: e.target.value })}
              onKeyUp={this.go}
            />
            <div className="button-group">
              <a
                className="button input-search-button"
                href={`//${address}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in new tab"
              >
                <span className="mif-chevron-thin-right"></span>
              </a>
            </div>
          </div>
        </nav>
        <div className="navview-content bg-light">
          {loading && (
            <div className="d-flex">
              <div className="flex-self-center">
                <Ring />
                <h1 className="text-center">Took too long?</h1>
                <p className="text-center p-4">
                  Open in a new tab instead:{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`http://${address}`}
                  >
                    {address}
                  </a>
                </p>
              </div>
            </div>
          )}
          {currentProject ? (
            <iframe
              title="preview"
              src={`//${currentProject}`}
              onLoad={this.finish}
            />
          ) : (
            <div className="p-4">
              <h1>Introduction</h1>
              <div className="row">
                <div className="cell-md-8">
                  <p>
                    These are websites that have me
                    scaffolding/developing/participating in developing. Most of
                    them are landing pages & e-commerce websites for small to
                    medium businesses (except Zalo Help). Please click the site
                    name on the left panel to check it out.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
