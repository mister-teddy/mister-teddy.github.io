import React from 'react';
import Showcase from './Showcase';

export default class TruongBa extends React.Component {
    componentDidMount() {
        Array.from(document.querySelectorAll('.truongba .banner img')).forEach(e => e.style.objectPosition = 'top');
    }

    render() {
        return <div className="truongba">
            <Showcase window={this.props.window}/>
        </div>
    }
}