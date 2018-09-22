import React, { Component } from 'react';
import Desktop from './Desktop';
import Taskbar from './Taskbar';
import Fullscreen from 'react-full-screen';
import db from '../database';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fullscreen: false,
      processes: [],
      focusing: null,
      depth: 1
    };
  }

  loadingFinish = () => {
    this.setState({
      loading: false
    })
  }

  renderLoader() {
    return this.state.loading && <div id="preloader">
      <div className="center">Loading...</div>
      <div className="hidden-loading">
        <img src={db.background} alt='' onLoad={this.loadingFinish}/>
        { db.windows.map((w, i) => w.banners ? w.banners.map((b, ii) => <img key={i + '-' + ii} src={b} alt=''/>) : '') }
      </div>
    </div>
  }

  goFullscreen = () => {
    this.setState({fullscreen: true});
    this.state.processes.forEach(process => {
      if (process) {
        this.minimizeWindow(process);
      }
    });
  }

  openWindow = (window) => {
    this.focusWindow(window);
    if (this.state.processes.indexOf(window) === -1) {
      this.setState({
        processes: this.state.processes.concat(window)
      })
    }
  }

  closeWindow = (window) => {
    this.setState({
      processes: this.state.processes.map(w => w === window ? null : w)
    })
  }

  focusWindow = (window) => {
    window.depth = this.state.depth;
    this.setState(s => ({
      focusing: window,
      depth: s.depth + 1
    }))
  }

  minimizeWindow = (window) => {
    window.depth = -1;
    this.setState({
      focusing: null
    });
  }

  render() {
    const { fullscreen, processes, focusing } = this.state;
    return (
      <div>
        { this.renderLoader() }
        <Fullscreen enabled={fullscreen} onChange={fullscreen => this.setState({fullscreen})}>
          <Desktop processes={processes} closeWindow={this.closeWindow} focusWindow={this.focusWindow} minimizeWindow={this.minimizeWindow}/>
          <Taskbar processes={processes} openWindow={this.openWindow} focusWindow={this.focusWindow} focusing={focusing} goFullscreen={this.goFullscreen}/>
        </Fullscreen>
      </div>
    );
  }
}
