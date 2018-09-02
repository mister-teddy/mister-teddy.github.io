import React from 'react';

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.substr(1);
}

export default class Tile extends React.Component {
  render() {
    return <button onClick={() => this.props.open()} className={`tile tile-${this.props.size} fg-white bg-${this.props.color} bg-dark${capitalize(this.props.color)}-active bg-light${capitalize(this.props.color)}-hover`}>
      <span className={`tile-icon mif-${this.props.icon} mif-${this.props.scale}x`}/>
      { this.props.size !== 'xs' && <span className="tile-name">{this.props.name}</span> }
    </button>
  }
}
