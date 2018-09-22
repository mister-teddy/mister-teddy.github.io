import React from 'react';
import Showcase from './Showcase';

export default class Linuxlover extends React.Component {
    componentDidMount() {
        Array.from(document.querySelectorAll('.linuxlover .banner img')).forEach(e => e.style.objectFit = 'contain');
    }

    render() {
        return <div className="linuxlover">
            <Showcase window={this.props.window}/>
        </div>
    }
}