import React from 'react';
import Clock from './Clock';

export default class Taskbar extends React.Component {
    
    showDesktop = () => {
        this.props.goFullscreen();
    }
    
    render() {
        return <div className="taskbar bg-black fullwidth">
            <span className={"start taskbar-icon mif-windows fg-white mif-lg fg-blue-hover bg-dark-active" + (this.props.showMenu ? ' bg-dark' : '')} onClick={() => this.props.toggleMenu()}></span>
            {this.props.processes.map((process, i) => process &&
                <span key={i} className={`mif-${process.icon} mif-lg ${this.props.focusing === process ? 'focus' : ''} taskbar-icon process-icon bg-black fg-white`} onClick={() => this.props.focusWindow(process)}></span>
            )}
            <div className="show-desktop" onClick={this.showDesktop}></div>
            <Clock/>
        </div>
    }
}