import React from 'react';
import Menu from './Menu';
import Clock from './Clock';

export default class Taskbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  openWindow(window) {
    this.props.openWindow(window);
    this.toggleMenu();
  }

  showDesktop = () => {
    this.props.goFullscreen();
  }

  render() {
    return <div className="taskbar bg-black fullwidth">
      {this.state.showMenu && <Menu openWindow={(w) => this.openWindow(w)} toggleMenu={() => this.toggleMenu()}/>}
      <span className={"start taskbar-icon mif-windows fg-white mif-lg fg-blue-hover bg-dark-active" + (this.state.showMenu ? ' bg-dark' : '')} onClick={() => this.toggleMenu()}></span>
      {this.props.processes.map((process, i) => process &&
        <span key={i} className={`mif-${process.icon} mif-lg ${this.props.focusing === process ? 'focus' : ''} taskbar-icon process-icon bg-black fg-white`} onClick={() => this.props.focusWindow(process)}></span>
      )}
      <div className="show-desktop" onClick={this.showDesktop}></div>
      <Clock/>
    </div>
  }
}