import React, { Component } from 'react';
import Desktop from './Desktop';
import Menu from './Menu';
import Taskbar from './Taskbar';
import Ring from './Ring';
import Fullscreen from 'react-full-screen';
import db from '../database';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            opacity: 1,
            showMenu: false,
            fullscreen: false,
            processes: [],
            focusing: null,
            depth: 1
        };
    }
    
    hideLoader = () => {
        this.setState({
            loading: false
        })
    }
    
    loadingFinish = () => {
        this.setState({
            opacity: 0
        })
        setTimeout(this.hideLoader, 500);
    }
    
    renderLoader() {
        const {loading, opacity} = this.state;
        return loading && <div className="preloader bg-black" style={{opacity: opacity}}>
            <div className="center">
                <Ring/>
            </div>
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
    
    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    
    openWindow = (window) => {
        this.toggleMenu();
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
        return <div>
            {this.renderLoader()}
            <Fullscreen enabled={fullscreen} onChange={fullscreen => this.setState({fullscreen})}>
                <Desktop processes={processes} closeWindow={this.closeWindow} focusWindow={this.focusWindow} minimizeWindow={this.minimizeWindow}/>
                <Menu showing={this.state.showMenu} openWindow={(w) => this.openWindow(w)} toggleMenu={() => this.toggleMenu()}/>
                <Taskbar processes={processes} showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} openWindow={this.openWindow} focusWindow={this.focusWindow} focusing={focusing} goFullscreen={this.goFullscreen}/>
            </Fullscreen>
        </div>
    }
}