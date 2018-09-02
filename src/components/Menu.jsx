import React from 'react';
import Profile from './Profile'
import Tile from './Tile'
import db from '../database'

export default class Menu extends React.Component {

  render() {
    var window = (i) => () => this.props.openWindow(db.windows[i]); 
    return <div className="menu bg-dark" style={{width: db.width, height: db.height}}>
      <div className="left">
        <Profile/>
      </div>
      <div className="right">
        <div className="wrapper">
          <Tile name="Phat" color="blue" icon="location" scale="8" size="md" open={window(0)}/>
          <div className="break"/>
          <Tile name="Phat" color="red" icon="location" scale="8" size="sm" open={window(0)}/>
          <Tile name="Phat" color="red" icon="location" scale="8" size="sm" open={window(0)}/>
        </div>
        <Tile name="Phat" color="red" icon="location" scale="8" size="lg" open={window(1)}/>
        <div className="break"/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="lg" open={window(0)}/>
        <div className="wrapper">
          <Tile name="Phat" color="red" icon="location" scale="8" size="sm" open={window(0)}/>
          <div className="wrapper">
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs" open={window(0)}/>
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs" open={window(0)}/>
            <div className="break"/>
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs" open={window(0)}/>
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs" open={window(0)}/>
          </div>
          <div className="break"/>
          <Tile name="Phat" color="red" icon="location" scale="8" size="md" open={window(0)}/>
        </div>
        <div className="break"/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm" open={window(0)}/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm" open={window(0)}/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm" open={window(0)}/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm" open={window(0)}/>
      </div>
    </div>
  }
}