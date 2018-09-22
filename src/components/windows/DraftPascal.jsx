import React from 'react';
import Showcase from './Showcase';

export default class DraftPascal extends React.Component {
    componentDidMount() {
    }

    render() {
        return <div className="draftpascal">
            <Showcase window={this.props.window}/>
        </div>
    }
}