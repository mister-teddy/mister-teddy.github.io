import React from 'react';
import AppContext from '../../context';
import db from '../../database';

export default class Projects extends React.Component {
    static contextType = AppContext;

    openWindow = () => this.context.openWindow(this.props.window);

    sum = () => {
        let sum = 0;
        Object.keys(db.freelance).forEach(platform => db.freelance[platform].forEach(project => sum++));
        return sum;
    }
    
    render() {
        return <div onClick={this.openWindow} title="Freelance Logs" className="freelance-tile tile-wide effect-hover-zoom-up bg-dark">
            <div className="slide-front">
                {Object.keys(db.freelance).map((platform, i) => <img key={i} src={`img/platforms/${platform}.png`} alt={platform}/>)}
            </div>
            <div className="slide-back d-flex flex-justify-center flex-align-center p-4 op-blue">
                <p className="text-center">
                    Completed 100+ tasks on {this.sum()} websites!
                </p>
            </div>
            <span className="branding-bar fg-dark"></span>
        </div>
    }
}