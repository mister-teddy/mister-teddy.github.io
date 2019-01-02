import React from 'react';
import Window from './Window';
import AppContext from '../context';

export default class Desktop extends React.Component {
    static contextType = AppContext;
    
    render() {
        return <div className="desktop" style={{backgroundImage: `url(${this.context.background})`, backgroundSize: 'cover'}}>
            <img src={this.context.background} alt="preloader" style={{display: 'none'}} onLoad={this.context.loadingFinish}/>
            {this.context.processes.map((process, i) => process && <Window key={i} process={process}/>)}
        </div>
    }
}