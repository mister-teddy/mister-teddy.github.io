import React from 'react';
import Showcase from './Showcase';

export default class PhatPhone extends React.Component {
    componentDidMount() {
        Array.from(document.querySelectorAll('.phatphone .banner img')).forEach(e => e.style.objectPosition = 'top');
    }

    render() {
        return <div className="phatphone">
            <Showcase window={this.props.window}/>
        </div>
    }
}