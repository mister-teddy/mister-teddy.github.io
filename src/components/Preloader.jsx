import React from "react";
import Ring from "./Ring";

export default props => (
  <div
    className={`preloader bg-${props.color}`}
    style={{ opacity: props.opacity }}
  >
    <div className="center">
      <Ring />
    </div>
  </div>
);
