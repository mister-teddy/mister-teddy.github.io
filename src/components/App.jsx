import React, { Component } from 'react';
import Desktop from './Desktop';
import Menu from './Menu';
import Taskbar from './Taskbar';
import Fullscreen from 'react-full-screen';
import db from '../database';
import AppContext from '../context';
import Preloader from './Preloader';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: db.background,
            loading: true,
            opacity: 1,
            showMenu: false,
            fullscreen: false,
            processes: [],
            focusingMenu: null,
            depth: 1
        };
    }
    
    hideLoader = () => {
        this.setState({
            loading: false
        })
    }

    startLoading = () => {
        this.setState({
            loading: true,
            opacity: 1
        })
    }

    loadingFinish = () => {
        this.setState({
            opacity: 0
        })
        setTimeout(this.hideLoader, 500);
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
            focusingMenu: window,
            depth: s.depth + 1
        }))
    }
    
    minimizeWindow = (window) => {
        window.depth = -1;
        this.setState({
            focusingMenu: null
        });
    }
    
    setBackground = (background) => {
        this.setState({
            background: background,
            loading: true
        });
    }
    
    getAppContext = () => ({
        background: this.state.background,
        processes: this.state.processes,
        focusingWindow: this.state.focusingMenu,
        showMenu: this.state.showMenu,
        toggleMenu: this.toggleMenu,
        openWindow: this.openWindow,
        closeWindow: this.closeWindow,
        focusWindow: this.focusWindow,
        minimizeWindow: this.minimizeWindow,
        goFullscreen: this.goFullscreen,
        setBackground: this.setBackground,
        startLoading: this.startLoading,
        loadingFinish: this.loadingFinish
    })

    render() {
        return <AppContext.Provider value={this.getAppContext()}>
            {this.renderLoader()}
            <Fullscreen enabled={this.state.fullscreen} onChange={fullscreen => this.setState({fullscreen})}>
                <Desktop/>
                <Menu/>
                <Taskbar/>
            </Fullscreen>
        </AppContext.Provider>
    }
    
    renderLoader() {
        const {loading, opacity} = this.state;
        return loading && <div>
            <Preloader color="black" opacity={opacity}/>
            <div className="hidden-loading">
                <img src={db.background} alt='' onLoad={this.loadingFinish}/>
                {db.projects.map((p, i) => p.banners ? p.banners.map((b, ii) => <img key={i + '-' + ii} src={b} alt=''/>) : '')}
            </div>
        </div>
    }
}