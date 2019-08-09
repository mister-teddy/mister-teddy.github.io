import React from 'react';

export default class Panel extends React.Component{
    state = {
        open: this.props.open
    }

    toggle = () => {
        this.setState(s => ({
            open: !s.open
        }))
    }

    render() {
        const {name, children} = this.props;
        const {open} = this.state;
        return <li className={`node-group ${open ? 'expanded' : ''}`}>
            <span className="node-toggle"></span>
            <div className="data" onClick={this.toggle}>{name}</div>
            <ul className={`${open ? '' : 'hidden'}`}>
                {children}
            </ul>
        </li>
    }
}