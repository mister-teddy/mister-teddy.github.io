import React from 'react';
import Window from './Window';
import Ring from './Ring';
import db from '../database';

export default class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: db.background,
      loading: false
    }
    window.setBackground = this.setBackground;
  }
  
  setBackground = (background) => {
    this.setState({
      background: background,
      loading: true
    });
  }
  
  loadingFinish = () => {
    this.setState({
      loading: false
    })
  }
  
  render() {
    return <div className="desktop" style={{backgroundImage: `url(${this.state.background})`, backgroundSize: 'cover'}}>
      {this.state.loading && <div className="preloader">
        <div className="center">
          <Ring/>
        </div>
      </div>}
      <img src={this.state.background} alt="preloader" style={{display: 'none'}} onLoad={this.loadingFinish}/>
      { this.props.processes.map((process, i) => process && <Window key={i} process={process} closeWindow={this.props.closeWindow} focusWindow={this.props.focusWindow} minimizeWindow={this.props.minimizeWindow}/>) }
    </div>;
  }
}