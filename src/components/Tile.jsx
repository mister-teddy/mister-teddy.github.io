import React from 'react';
import db from '../database';


export default class Tile extends React.Component {
  
  capitalize(s) {
    return s.charAt(0).toUpperCase() + s.substr(1);
  }

  prop(name) {
    return db.windows[this.props.window][name];
  }

  tileClass() {
    return `
      tile 
      tile-${this.props.size} 
      fg-white bg-${this.prop('color')} 
      bg-dark${this.capitalize(this.prop('color'))}-active 
      bg-light${this.capitalize(this.prop('color'))}-hover
    `;
  }

  openWindow = () => {
    this.props.openWindow(db.windows[this.props.window]);
  }

  render() {
    return <button onClick={this.openWindow} className={this.tileClass()}>
      <span className={`tile-icon mif-${this.prop('icon')} mif-${this.props.scale}x`}/>
      { this.props.size !== 'xs' && <span className="tile-name">{this.prop('name')}</span> }
    </button>
  }
}
