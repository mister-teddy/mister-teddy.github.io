import React, { Component } from 'react';
import Desktop from './Desktop';
import Taskbar from './Taskbar';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Desktop/>
        <Taskbar/>
      </div>
    );
  }
}
