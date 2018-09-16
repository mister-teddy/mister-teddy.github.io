import React from 'react';
import Showcase from './Showcase';

export default class PVZShell extends React.Component {
    componentDidMount() {
        document.querySelector('.pvz .banner img').style.objectPosition = 'bottom';
    }

    render() {
        return <div className="pvz">
            <Showcase window={this.props.window}/>
        </div>
    }
}