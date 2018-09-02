import React from 'react';
import Menu from './Menu';
import Clock from './Clock';

export default class Taskbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    }

  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return <div className="taskbar bg-black fullwidth">
      { this.state.showMenu && <Menu/>}
      <span className={"start icon mif-windows fg-white mif-lg fg-blue-hover bg-dark-active" + (this.state.showMenu ? ' bg-dark' : '')} onClick={() => this.toggleMenu()}></span>
      <Clock/>
    </div>
  }
}