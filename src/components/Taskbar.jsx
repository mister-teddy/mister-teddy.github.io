import React from 'react';
import Menu from './Menu';
import Clock from './Clock';
import Window from './Window';

export default class Taskbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      focusing: null,
      openingWindows: []
    }

  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  focusWindow(window) {
    this.setState({focusing: window})
  }

  openWindow(window) {
    if (this.state.openingWindows.indexOf(window) === -1) {
      this.setState({
        openingWindows: this.state.openingWindows.concat(window)
      }) 
    }
    this.toggleMenu();
    this.focusWindow(window);
  }

  closeWindow(window) {
    this.setState({
      openingWindows: this.state.openingWindows.filter(w => w !== window)
    })
  }

  render() {
    return <div className="taskbar bg-black fullwidth">
      { this.state.showMenu && <Menu openWindow={(w) => this.openWindow(w)}/>}
      <span className={"start icon mif-windows fg-white mif-lg fg-blue-hover bg-dark-active" + (this.state.showMenu ? ' bg-dark' : '')} onClick={() => this.toggleMenu()}></span>
      { this.state.openingWindows.map((window, i) => <Window key={i} window={window} focusWindow={(w) => this.focusWindow(w)} closeWindow={(w) => this.closeWindow(w)} focus={this.state.focusing === window}/>) }
      <Clock/>
    </div>
  }
}