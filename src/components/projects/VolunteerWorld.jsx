import React from 'react';
import Ring from '../Ring'

export default class VolunteerWorld extends React.Component {
    state = {
        hoverArch: false,
        showWebAdmin: false
    }

    renderSystem() {
        return this.state.hoverArch && <div style={{position: 'absolute', top: 0, left: 0}}>
            <div className="arch-system" style={{width: 73, height: 40, top: 86, left: 216}} onClick={() => this.setState({showWebAdmin: !this.state.showWebAdmin})}>Web Admin</div>
            <div className="arch-system" style={{width: 73, height: 37, top: 176, left: 216}}>Mobile App</div>
            <div className="arch-system" style={{width: 67, height: 39, top: 126, left: 390}}>API</div>
        </div>
    }

    renderWebAdminDetail() {
        const show = this.state.showWebAdmin;
        return <div className="system-detail-container" style={{height: show ? 400 : 0}}>
            <div style={{top: 180, display: show ? 'block' : 'none'}}><Ring/></div>
        </div>
    }

    render() {
        const {project} = this.props;
        return <div className="volunteer-world showcase">
            {project.description}
            <div
                onMouseEnter={() => this.setState({hoverArch: true})}
                onMouseLeave={() => this.setState({hoverArch: false})}
                style={{
                    position: 'relative'
                }}>
                <img src="img/volunteerworld/sa.png" alt="System Architecture"/>
                {this.renderSystem()}
            </div>
            <div style={{
                    overflow: 'hidden',
                    position: 'absolute',
                    right: 0,
                    bottom: -200,
                    paddingLeft: 50
                }}>
                <img src="img/volunteerworld/background.png"
                    alt="Background"
                    style={{
                        transformOrigin: '0px 300px',
                        transform: `rotate(30deg)`
                    }}/>
            </div>
            {this.renderWebAdminDetail()}
        </div>
    }
}