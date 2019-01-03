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
        const {name, icon, children} = this.props;
        const {open} = this.state;
        return <div className="pt-4-md">
            <div className="panel">
                <div className="panel-content" style={{display: open ? 'block' : 'none'}}>
                    {children}
                </div>
                <div className="panel-title">
                    <span className="caption">{name}</span>
                    <span className={`icon mif-${icon}`}></span>
                    <span className={`dropdown-toggle marker-center${open ? ' active-toggle' : ''}`} onClick={this.toggle}></span>
                </div>
            </div>
        </div>
    }
}