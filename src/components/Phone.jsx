import React from "react";

export default ({ src }) => {
  return (
    <div className="phone">
      <img src={src} className="content" alt="Mobile screenshot" />
      <img src="img/phone-frame.png" className="frame" alt="Phone frame" />
    </div>
  );
};
