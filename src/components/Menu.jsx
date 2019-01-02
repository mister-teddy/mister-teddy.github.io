import React from 'react';
import App from './App';
import Profile from './Profile'
import Tile from './Tile'
import db from '../database'
import AppContext from '../context';
import { Scrollbars } from 'react-custom-scrollbars'

export default class Menu extends React.Component {
    static contextType = AppContext;

    random(a, b) {
        return Math.floor((Math.random() * (b - a)) + a);
    }
    
    changeBackground = () => {
        this.context.toggleMenu();
        this.context.startLoading();
        this.context.setBackground(`https://picsum.photos/1920/1080/?image=${this.random(1, 96)}`);
    }
    
    render() {
        return <div className={`menu bg-dark ${this.context.showMenu ? 'show' : ''}`} style={{width: db.width, height: db.height}}>
            <div className="left">
                <Profile/>
            </div>
            <div className="right">
                <Scrollbars>
                    <div className="tiles-grid">
                        <Tile window={1} size='wide'/>
                        <Tile window={2} size='medium'/>
                        <Tile window={4} size='small'/>
                        <Tile window={5} size='small'/>
                        <Tile window={6} size='small' className="col-1 row-4"/>
                        <Tile window={7} size='small' className="col-2 row-4"/>
                        <Tile window={0} size='large'/>
                        <Tile window={3} size='medium'/>
                        <div onClick={this.changeBackground} className="tile tile-wide">
                            <span className="icon mif-cog"/>
                            <span className="branding-bar">Change background</span>
                        </div>
                        {db.wordpress.map((w, i) => 
                            <a href={w.link} target="_blank" rel="noopener noreferrer" key={i} title={w.name} className="tile tile-small">
                                <span className={`icon mif-wordpress`}/>
                            </a>
                        )}
                    </div>
                </Scrollbars>
            </div>
        </div>
    }
}