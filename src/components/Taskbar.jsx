import React from 'react';
import Clock from './Clock';
import AppContext from '../context';

export default class Taskbar extends React.Component {
    static contextType = AppContext;

    showDesktop = () => {
        this.context.goFullscreen();
    }
    
    render() {
        return <div className="taskbar bg-black fullwidth">
            <span className={"start taskbar-icon mif-windows fg-white mif-lg fg-blue-hover bg-dark-active" + (this.context.showMenu ? ' bg-dark' : '')} onClick={() => this.context.toggleMenu()}></span>
            {this.context.processes.map((process, i) => process &&
                <span key={i} className={`mif-${process.icon} mif-lg ${this.context.focusingWindow === process ? 'focus' : ''} taskbar-icon process-icon bg-black fg-white`} onClick={() => this.context.focusWindow(process)}></span>
            )}
            <div className="show-desktop" onClick={this.showDesktop}></div>
            <Clock/>
        </div>
    }
}