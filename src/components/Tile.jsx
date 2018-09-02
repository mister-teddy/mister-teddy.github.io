import React from 'react';

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.substr(1);
}

export default ({name, icon, color, size, scale}) => 
<button className={`tile tile-${size} fg-white bg-${color} bg-dark${capitalize(color)}-active bg-light${capitalize(color)}-hover`}>
  <span className={`tile-icon mif-${icon} mif-${scale}x`}/>
  { size !== 'xs' && <span className="tile-name">{name}</span> }
</button>