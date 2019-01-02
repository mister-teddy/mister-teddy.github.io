import React from 'react';
import AppContext from '../context';

export default class Window extends React.Component {
    static contextType = AppContext;

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
            maximized: true
        }
    }
    
    focus = () => {
        this.context.focusWindow(this.props.process);
    }
    
    clearDragGhost = (e) => {
        this.focus();
        if (e.type.includes('drag')) {
            e.dataTransfer.setData('text', '');
            let blank= new Image();
            blank.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
            e.dataTransfer.setDragImage(blank, 999999, 999999);
        }
    }

    getXY = (e) => {
        if (e.type.includes('drag')) {
            return {
                x: e.clientX,
                y: e.clientY
            };
        }
        const touch = e.targetTouches[0];
        return {
            x: touch.clientX,
            y: touch.clientY
        };
    }
    
    onMoveStart = (e) => {
        this.clearDragGhost(e);
        let {x, y} = this.getXY(e);
        x -= this.state.style.left;
        y -= this.state.style.top;
        if (this.state.maximized) {
            y = 0;
        }
        this.setState({
            offset: {
                x, y
            },
            maximized: false
        })
    }
    
    onMove = (e) => {
        let {x, y} = this.getXY(e);
        if (x === 0 && y === 0) {
            return;
        }
        x -= this.state.offset.x;
        y -= this.state.offset.y;
        this.setState(s => ({
            style: {
                ...s.style,
                left: x,
                top: y
            }
        }))
    }
    
    onResize = (e) => {
        let {x, y} = this.getXY(e);
        if (x === 0 && y === 0) {
            return;
        }
        let width = x - this.state.style.left;
        let height = y - this.state.style.top;
        this.setState(s => ({
            style: {
                ...s.style,
                width: width,
                height: height
            }
        }));
    }
    
    minimize = (e) => {
        this.context.minimizeWindow(this.props.process);
        e.stopPropagation();
    }
    
    maximize = (e) => {
        this.setState(s => ({
            maximized: !s.maximized
        }))
    }

    close = (e) => {
        this.context.closeWindow(this.props.process);
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
        const { process } = this.props;
        const Content = require(`./windows/${process.component}`).default;
        return <div
                className={`window ${this.state.maximized ? 'maximized' : ''}`}
                style={this.state.style}
                onClick={this.focus}>
            <div className={`window-caption bg-${process.color}`}
                    draggable
                    onDoubleClick={this.maximize}
                    onDragStart={this.onMoveStart}
                    onTouchStart={this.onMoveStart}
                    onDrag={this.onMove}
                    onTouchMove={this.onMove}>
                <span className={`icon mif-${process.icon}`}></span>
                <span className="title">{process.name}</span>
                <div className="buttons">
                    <span className="btn-min" onClick={this.minimize}></span>
                    <span className="btn-max" onClick={this.maximize}></span>
                    <span className="btn-close" onClick={this.close}></span>
                </div>
            </div>
            <div className="window-content">
                <Content window={process}/>
            </div>
            <span className="resize-element"
                    draggable
                    onDragStart={this.clearDragGhost}
                    onTouchStart={this.clearDragGhost}
                    onDrag={this.onResize}
                    onTouchMove={this.onResize}></span>
        </div>
    }
}
