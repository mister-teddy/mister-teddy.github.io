import React, { Component } from 'react';
import Desktop from './Desktop';
import Taskbar from './Taskbar';
import Fullscreen from 'react-full-screen';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      fullscreen: false
    };
  }

  isMobile() {
    return window.matchMedia("(max-width: 1000px)").matches;
  }

  renderFullscreenRequire() {
    return <div className="fullscreen-require bg-dark fg-white" onClick={() => this.setState({fullscreen: true})}>
      <div> 
        <h1>Click any where to go fullscreen</h1>
        <div><span className="mif-icon mif-enlarge2 mif-4x"></span></div>
      </div>
    </div>
  }

  render() {
    return (
      <div>
        { (this.isMobile() && !this.state.fullscreen) && this.renderFullscreenRequire() }
        <Fullscreen enabled={this.state.fullscreen} onChange={fullscreen => this.setState({fullscreen})}>
          <Desktop/>
          <Taskbar/>
        </Fullscreen>
      </div>
    );
  }
}
