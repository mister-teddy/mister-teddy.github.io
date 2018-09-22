import React from 'react';
import Showcase from './Showcase';

export default class TVCGVN extends React.Component {
    componentDidMount() {
        Array.from(document.querySelectorAll('.tvcgvn .banner img')).forEach(e => e.style.objectFit = 'contain');
    }

    render() {
        return <div className="tvcgvn">
            <Showcase window={this.props.window}/>
        </div>
    }
}