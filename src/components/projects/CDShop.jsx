import React from 'react';

export default class CDShop extends React.Component {
    render() {
        const {project} = this.props;
        return <div className="cd-project showcase">
            <div className="banner pb-4-md">
                <iframe title="CD Shop" src="https://nguyenhongphat0.github.io/phatcdshop/" frameBorder="0"></iframe>
            </div>
            <div className="meta">
                <div className="techs" title="Used technologies">
                    { project.techs.map(tech => <span key={tech} className={tech.toLowerCase()}>{tech}</span>) }
                </div>
            </div>
            <p dangerouslySetInnerHTML={{__html: project.description}}></p>
        </div>
    }
}