import React from "react";

export default ({ window }) => (
  <div className={window.name}>
    <iframe title={window.name} src={window.link} />
  </div>
);
