import React from 'react';
import Showcase from './Showcase';

export default class CDShop extends React.Component {
    render() {
        return <div className="cd">
            <Showcase window={this.props.window}/>
        </div>
    }
}