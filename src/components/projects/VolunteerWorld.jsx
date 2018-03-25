import React from 'react';

export default class VolunteerWorld extends React.Component {
    render() {
        const {project} = this.props;
        return <div className="volunteer-world showcase">
            <p>{project.description}</p>
            <img src="img/volunteerworld/background.png" style={{
                transform: 'rotate(30deg)',
                position: 'absolute',
                right: 0,
                bottom: -300,
                }} alt="Background"/>
            <img src="img/volunteerworld/sa.png" alt="System Architecture"/>
        </div>
    }
}