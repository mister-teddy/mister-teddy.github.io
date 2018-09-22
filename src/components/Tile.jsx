import React from 'react';
import db from '../database';


export default class Tile extends React.Component {
  prop(name) {
    return db.windows[this.props.window][name];
  }

  openWindow = () => {
    this.props.openWindow(db.windows[this.props.window]);
  }

  render() {
    return <div onClick={this.openWindow} title={this.prop('name')} className={`tile tile-${this.props.size} bg-${this.prop('color')} ${this.props.className}`}>
      <span className={`icon mif-${this.prop('icon')}`}/>
      <span className="branding-bar">{this.prop('shortName') ? this.prop('shortName') : this.prop('name')}</span>
    </div>
  }
}
