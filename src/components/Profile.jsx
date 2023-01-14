import React from "react";
import db from "../database";
import LinkTile from "./LinkTile";

export default () => (
  <div className="profile fg-white">
    <div className="top">
      <div>
        <img alt="avatar" className="avatar" src={db.avatar}></img>{" "}
        <span className="name">{db.name}</span>
      </div>
      <div className="fg-gray">Contact me</div>
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
          color={link.color}
          key={link.name}
        />
      ))}
    </div>
  </div>
);
