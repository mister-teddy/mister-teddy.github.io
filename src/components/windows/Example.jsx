import React from 'react';
import Showcase from './Showcase';

export default class Example extends React.Component {
    render() {
        return <div className="example">
            <Showcase window={this.props.window}/>
        </div>
    }
}