import React from 'react';
import Profile from './Profile'
import Tile from './Tile'
import db from '../database'

export default class Menu extends React.Component {
  XSTile(window) {
    return <Tile window={window} size='xs' scale='1' openWindow={this.props.openWindow}/> 
  }

  SMTile(window) {
    return <Tile window={window} size='sm' scale='2' openWindow={this.props.openWindow}/> 
  }
  
  MDTile(window) {
    return <Tile window={window} size='md' scale='4' openWindow={this.props.openWindow}/> 
  }

  LGTile(window) {
    return <Tile window={window} size='lg' scale='8' openWindow={this.props.openWindow}/> 
  }

  render() {
    return <div className="menu bg-dark" style={{width: db.width, height: db.height}}>
      <div className="left">
        <Profile/>
      </div>
      <div className="right">
        <div className="wrapper">
          {this.MDTile(0)}
          <div className="break"/>
          {this.SMTile(0)}
          {this.SMTile(0)}
        </div>
          {this.LGTile(0)}
        <div className="break"/>
        {this.LGTile(1)}
        <div className="wrapper">
          {this.SMTile(0)}
          <div className="wrapper">
            {this.XSTile(0)}
            {this.XSTile(0)}
            <div className="break"/>
            {this.XSTile(0)}
            {this.XSTile(0)}
          </div>
          <div className="break"/>
          {this.MDTile(2)}
        </div>
        <div className="break"/>
        {this.SMTile(0)}
        {this.SMTile(0)}
        {this.SMTile(0)}
        {this.SMTile(0)}
      </div>
    </div>
  }
}