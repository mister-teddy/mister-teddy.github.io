import React from 'react';
import Profile from './Profile'
import Tile from './Tile'
import db from '../database'
import { Scrollbars } from 'react-custom-scrollbars'

export default class Menu extends React.Component {
  random(a, b) {
    return Math.floor((Math.random() * (b - a)) + a);
  }

  changeBackground = () => {
    this.props.toggleMenu();
    db.background = `https://picsum.photos/1920/1080/?image=${this.random(1, 96)}`;
    window.setBackground(db.background);
  }

  render() {
    return <div className="menu bg-dark" style={{width: db.width, height: db.height}}>
      <div className="left">
        <Profile/>
      </div>
      <div className="right">
      <Scrollbars>
        <div className="tiles-grid">
          <Tile window={1} size='wide' openWindow={this.props.openWindow}/>
          <Tile window={2} size='medium' openWindow={this.props.openWindow}/>
          <Tile window={4} size='small' openWindow={this.props.openWindow}/>
          <Tile window={5} size='small' openWindow={this.props.openWindow}/>
          <Tile window={6} size='small' className="col-1 row-4" openWindow={this.props.openWindow}/>
          <Tile window={7} size='small' className="col-2 row-4" openWindow={this.props.openWindow}/>
          <Tile window={0} size='large' openWindow={this.props.openWindow}/>
          <Tile window={3} size='medium' openWindow={this.props.openWindow}/>
          <div onClick={this.changeBackground} className="tile tile-wide">
            <span className="icon mif-cog"/>
            <span className="branding-bar">Change background</span>
          </div>
          {db.wordpress.map((w, i) => 
            <a href={w.link} target="_blank" key={i} title={w.name} className="tile tile-small">
                <span className={`icon mif-wordpress`}/>
            </a>
            
          )}
        </div>
      </Scrollbars>
      </div>
    </div>
  }
}