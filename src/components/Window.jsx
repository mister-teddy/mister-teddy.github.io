import React from 'react';

export default class Window extends React.Component {
  constructor(props) {
    super(props);
    const width = window.innerWidth/2;
    const height = width*9/16;
    const left = Math.random()*(window.innerWidth - width);
    const top = Math.random()*(window.innerHeight - height);
    const zIndex = props.process.depth;
    this.state = {
      style: {
        left, top, width, height, zIndex
      },
      offset: {
        x: 0,
        y: 0
      },
      maximized: false
    }
  }

  focus = () => {
    this.props.focusWindow(this.props.process);
  }

  clearDragGhost = (e) => {
    this.focus();
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  }

  onDragStart = (e) => {
    this.clearDragGhost(e);
    const x = e.clientX - this.state.style.left;
    const y = e.clientY - this.state.style.top;
    this.setState({
      offset: {
        x, y
      }
    })
  }

  onDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) {
      return;
    }
    const x = e.clientX - this.state.offset.x;
    const y = e.clientY - this.state.offset.y;
    this.setState(s => ({
      style: {
        ...s.style,
        left: x,
        top: y
      }
    }));
  }

  onResize = (e) => {
    if (e.clientX === 0 && e.clientY === 0) {
      return;
    }
    const width = e.clientX - this.state.style.left;
    const height = e.clientY - this.state.style.top;
    this.setState(s => ({
      style: {
        ...s.style,
        width: width,
        height: height
      }
    }));
  }

  minimize = (e) => {
    this.props.minimizeWindow(this.props.process);
    e.stopPropagation();
  }

  maximize = (e) => {
    this.setState(s => ({
      maximized: !s.maximized
    }))
  }

  componentWillReceiveProps(props) {
    this.setState(s => ({
      style: {
        ...s.style,
        zIndex: props.process.depth
      }
    }))
  }
  
  render() {
    const { process, closeWindow } = this.props;
    const Content = require(`./windows/${process.component}`).default;
    return <div className={`window ${this.state.maximized ? 'maximized' : ''}`}
        style={this.state.style}
        onClick={this.focus}>
      <div className={`window-caption bg-${process.color}`}
          draggable
          onDragStart={this.onDragStart}
          onDrag={this.onDrag}>
        <span className={`icon mif-${process.icon}`}></span>
        <span className="title">{process.name}</span>
        <div className="buttons">
          <span className="btn-min" onClick={this.minimize}></span>
          <span className="btn-max" onClick={this.maximize}></span>
          <span className="btn-close" onClick={() => closeWindow(process)}></span>
        </div>
      </div>
      <div className="window-content">
        <Content window={process}/>
      </div>
      <span className="resize-element"
          draggable
          onDragStart={this.clearDragGhost}
          onDrag={this.onResize}></span>
    </div>
  }
}