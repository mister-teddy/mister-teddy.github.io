import React from 'react';
import Showcase from './Showcase';

export default class Fujioh extends React.Component {
    componentDidMount() {
        Array.from(document.querySelectorAll('.fujioh .banner img')).forEach(e => e.style.objectPosition = 'top');
    }

    render() {
        return <div className="fujioh">
            <Showcase window={this.props.window}/>
        </div>
    }
}