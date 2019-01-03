import React from 'react';
import AppContext from '../context';

export default class Tile extends React.Component {
    static contextType = AppContext;

    prop(name) {
        return this.props.window[name];
    }
    
    openWindow = () => this.context.openWindow(this.props.window);
    
    render() {
        return <div onClick={this.openWindow} title={this.prop('name')} className={`tile tile-${this.prop('size')} bg-${this.prop('color')} ${this.props.className}`}>
            <span className={`icon mif-${this.prop('icon')}`}/>
            <span className="branding-bar">{this.prop('shortName') ? this.prop('shortName') : this.prop('name')}</span>
        </div>
    }
}
