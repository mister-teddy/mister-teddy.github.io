import React from 'react';
import ScrollBar from 'react-custom-scrollbars';

export default class VolunteerWorld extends React.Component {
    state = {
        hoverArch: false,
        showingSystem: ''
    }

    renderTechnology(name, src, link) {
        return <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={src} title={name} alt={name} style={{height: 40, margin: 5}}></img>
        </a>
    }

    renderScreenshot(src) {
        return <a href={src} target="_blank" rel="noopener noreferrer">
            <img src={src} title="Click to see full size image" alt="Screenshot"></img>
        </a>
    }

    toggleShowingSystem(system) {
        let showingSystem = '';
        if (this.state.showingSystem !== system) {
            showingSystem = system;
        }
        this.setState({showingSystem})
    }

    renderSystem() {
        const { showingSystem, hoverArch } =  this.state;
        return hoverArch && <div style={{position: 'absolute', top: 0, left: 0}}>
            <div className={`arch-system ${showingSystem === 'webadmin' ? 'active' : ''}`} style={{width: 73, height: 40, top: 86, left: 216}} onClick={() => this.toggleShowingSystem('webadmin')}>Web Admin</div>
            <div className={`arch-system ${showingSystem === 'mobileapp' ? 'active' : ''}`} style={{width: 73, height: 37, top: 176, left: 216}} onClick={() => this.toggleShowingSystem('mobileapp')}>Mobile App</div>
            <div className={`arch-system ${showingSystem === 'api' ? 'active' : ''}`} style={{width: 67, height: 40, top: 125, left: 390}} onClick={() => this.toggleShowingSystem('api')}>API</div>
        </div>
    }

    renderWebAdminDetail() {
        const show = this.state.showingSystem === 'webadmin';
        return <div className="system-detail-container" style={{height: show ? 400 : 0, top: 0, left: 500, background: 'white', border: show ? '2px solid black' : 'none'}}>
            <ScrollBar>
                <div className="content">
                    <h3>Web Admin</h3>
                    <p>Managing system entities, monitoring system status,...</p>
                    <p>
                        <b>Technologies used:</b><br/>
                        {this.renderTechnology('VueJS', 'https://vuejs.org/images/logo.png', 'https://vuejs.org')}
                        {this.renderTechnology('Core UI', 'https://coreui.io/assets/img/coreui-sygnet-white.png', 'https://coreui.io')}
                        {this.renderTechnology('Bootstrap', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg', 'https://getbootstrap.com')}
                        {this.renderTechnology('Flatpickr', 'https://flatpickr.js.org/images/logo.png', 'https://flatpickr.js.org')}
                    </p>
                    <div className="screenshots">
                        {this.renderScreenshot('img/volunteerworld/webadmin1.png')}
                        {this.renderScreenshot('img/volunteerworld/webadmin2.png')}
                        {this.renderScreenshot('img/volunteerworld/webadmin3.png')}
                        {this.renderScreenshot('img/volunteerworld/webadmin4.png')}
                    </div>
                </div>
            </ScrollBar>
        </div>
    }

    renderAPIDetail() {
        const show = this.state.showingSystem === 'api';
        return <div className="system-detail-container" style={{height: show ? 400 : 0, top: 20, left: 20, background: 'white', border: show ? '2px solid black' : 'none'}}>
            <ScrollBar>
                <div className="content">
                    <h3>RESTful API</h3>
                    <p>Providing comunication with system database, used by both Web Admin and Mobile Application.</p>
                    <p>
                        <b>Technologies used:</b><br/>
                        {this.renderTechnology('ASP.NET', 'https://cdn4.iconfinder.com/data/icons/logos-3/504/ASP.Net-512.png', 'https://asp.net')}
                        {this.renderTechnology('Microsoft SQL Server', 'https://azurecomcdn.azureedge.net/cvt-cf58e036f3a90892f94ad7c7e3793eca0f3c6a6f55e2745bb083941a1d34ed8a/images/page/services/sql-database/sql-db.svg', 'https://www.microsoft.com/en-us/sql-server')}
                        {this.renderTechnology('Azure', 'https://www.fixedbuffer.com/wp-content/uploads/2019/01/Azure.png', 'https://azure.microsoft.com')}
                        {this.renderTechnology('Swagger', 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png', 'https://swagger.io')}
                    </p>
                    <div className="screenshots">
                        {this.renderScreenshot('img/volunteerworld/openapi1.png')}
                        {this.renderScreenshot('img/volunteerworld/openapi2.png')}
                        {this.renderScreenshot('img/volunteerworld/openapi3.png')}
                    </div>
                </div>
            </ScrollBar>
        </div>
    }

    renderMobileAppDetail() {
        const show = this.state.showingSystem === 'mobileapp';
        return <div className="system-detail-container" style={{height: show ? 400 : 0, top: 40, left: 450, background: 'white', border: show ? '2px solid black' : 'none'}}>
            <ScrollBar>
                <div className="content">
                    <h3>Mobile Application</h3>
                    <p>Used by users who would like to search for nearby events, finding poor situation needing help via news, join and manages organizations,...</p>
                    <p>
                        <b>Technologies used:</b><br/>
                        {this.renderTechnology('Java', 'https://www.softexia.com/wp-content/uploads/2017/04/Java-logo.png', 'https://www.java.com')}
                        {this.renderTechnology('Android', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png', 'https://www.android.com/')}
                        <br/>
                        <i>+ Volley, Gson, GeoCoding and more,...</i>
                    </p>
                    <div className="screenshots">
                        {this.renderScreenshot('img/volunteerworld/mobile1.png')}
                        {this.renderScreenshot('img/volunteerworld/mobile2.png')}
                    </div>
                </div>
            </ScrollBar>
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
                <img src="img/volunteerworld/sa.png" alt="System Architecture" title="Click on a system element to view detail"/>
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
            {this.renderAPIDetail()}
            {this.renderMobileAppDetail()}
        </div>
    }
}