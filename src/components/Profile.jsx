import React from "react";
import db from "../database";
import LinkTile from "./LinkTile";

export default () => (
  <div className="profile fg-white">
    <div className="top">
      <div className="mb-2">
        <img alt="avatar" className="avatar" src={db.avatar}></img>{" "}
        <span className="name">{db.name}</span>
      </div>
      <LinkTile
        text={db.email}
        link={`mailto:${db.email}`}
        icon="mail"
        color="blue"
        key="mail"
      />
      <LinkTile
        text={db.phone}
        link={`tel:${db.phone}`}
        icon="phone"
        color="blue"
        key="phone"
      />
      <LinkTile
        text={db.address.name}
        link={db.address.link}
        icon="location"
        color="blue"
        key="address"
      />
    </div>
    <div className="bottom">
      {db.links.map((link) => (
        <LinkTile
          text={link.name}
          link={link.url}
          icon={link.icon}
          favicon={link.favicon}
          color={link.color}
          key={link.name}
        />
      ))}
    </div>
  </div>
);
