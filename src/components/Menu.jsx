import React from 'react';
import Profile from './Profile'
import Tile from './Tile'
import db from '../database'

export default class Menu extends React.Component {

  render() {
    return <div className="menu bg-dark" style={{width: db.width, height: db.height}}>
      <div className="left">
        <Profile/>
      </div>
      <div className="right">
        <div className="wrapper">
          <Tile name="Phat" color="blue" icon="location" scale="8" size="md"/>
          <div className="break"/>
          <Tile name="Phat" color="red" icon="location" scale="8" size="sm"/>
          <Tile name="Phat" color="red" icon="location" scale="8" size="sm"/>
        </div>
        <Tile name="Phat" color="red" icon="location" scale="8" size="lg"/>
        <div className="break"/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="lg"/>
        <div className="wrapper">
          <Tile name="Phat" color="red" icon="location" scale="8" size="sm"/>
          <div className="wrapper">
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs"/>
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs"/>
            <div className="break"/>
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs"/>
            <Tile name="Phat" color="red" icon="location" scale="2" size="xs"/>
          </div>
          <div className="break"/>
          <Tile name="Phat" color="red" icon="location" scale="8" size="md"/>
        </div>
        <div className="break"/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm"/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm"/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm"/>
        <Tile name="Phat" color="red" icon="location" scale="8" size="sm"/>
      </div>
    </div>
  }
}