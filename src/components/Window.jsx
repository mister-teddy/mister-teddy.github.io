import React from 'react';

export default class Window extends React.Component {

  close() {
    this.props.closeWindow(this.props.window);
  }
  
  toggleFocus() {
    if (this.props.focus) {
      this.props.focusWindow(null);
    } else {
      this.props.focusWindow(this.props.window);
    }
  }
  
  render() {
    var Content = require(`./windows/${this.props.window.component}`).default;
    return <div className={`window fg-white`}>
      <div className={`form ${this.props.focus ? 'focus' : ''}`}>
        <div className="title bg-blue">
          <div className="left">
            <span className={`mif-${this.props.window.icon}`}></span>
            <span className="name">{this.props.window.name}</span>
          </div>
          <div className="right">
            <span className="navigator mif-minus fg-white bg-lightBlue-hover" onClick={() => this.toggleFocus()}></span>
            <span className="navigator mif-cross fg-white bg-red-hover" onClick={() => this.close()}></span>
          </div>
        </div>
        <div className="content fg-black">
          <Content/>
        </div>
      </div>
      <span className={`mif-${this.props.window.icon} mif-lg ${this.props.focus ? 'focus' : ''} icon`} onClick={() => this.toggleFocus()}></span>
    </div>
  }
}