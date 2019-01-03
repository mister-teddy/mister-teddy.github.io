import React from 'react';
import AppContext from '../../context';
import db from '../../database';

export default class Projects extends React.Component {
    static contextType = AppContext;

    state = {
        count: 0,
        projects: db.projects.length,
        interval: 100,
        counting: false
    }

    openWindow = () => this.context.openWindow(this.props.window);
    
    componentDidMount(props) {
        this.counting();
    }

    counting = () => {
        if (this.context.showMenu) {
            this.setState(s => ({
                count: Math.min(s.projects, ++s.count),
                interval: 500/(s.projects - s.count)
            }));
        } else {
            this.setState({
                count: 0,
                interval: 100
            });
        }
        setTimeout(this.counting, this.state.interval)
    }

    render() {
        const {count, projects} = this.state;
        return <div onClick={this.openWindow} title="Projects" className={`tile tile-wide bg-green}`}>
            {[...Array(projects + 1).keys()].map(i => 
                <div key={i} className="slide" style={i === count ? {} : {left: '-100%'}}>
                    <div className="pos-absolute pos-center">
                        <h1>{i}</h1>
                        {i === projects && <h6 style={{whiteSpace: 'nowrap'}}> experienced projects</h6>}
                    </div>
                </div>
            )}
            <span className="badge-top">{projects}<span className={`icon mif-${this.props.window.icon}`}/></span>
        </div>
    }
}