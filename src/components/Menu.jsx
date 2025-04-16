import React from "react";
import Profile from "./Profile";
import Tile from "./Tile";
import db from "../database";
import AppContext from "../context";
import { Scrollbars } from "react-custom-scrollbars";

export default class Menu extends React.Component {
  static contextType = AppContext;

  random(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  changeBackground = () => {
    this.context.toggleMenu();
    this.context.startLoading();
    this.context.setBackground(
      `https://picsum.photos/1920/1080/?image=${this.random(1, 96)}`
    );
  };

  render() {
    return (
      <div
        className={`menu bg-dark ${this.context.showMenu ? "show" : ""}`}
        style={{ width: db.width, height: db.height }}
      >
        <div className="left">
          <Profile />
        </div>
        <div className="right">
          <Scrollbars>
            <div className="tiles-grid">
              {db.windows.map((window, i) => {
                if (window.tileComponent) {
                  const TileComponent = require(`./tiles/${window.tileComponent}`)
                    .default;
                  return <TileComponent window={window} key={i} />;
                } else {
                  return <Tile window={window} key={i} />;
                }
              })}
              <div onClick={this.changeBackground} className="tile tile-medium">
                <span className="icon mif-cog" />
                <span className="branding-bar">Change background</span>
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}
