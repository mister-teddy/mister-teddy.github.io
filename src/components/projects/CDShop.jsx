import React from 'react';

export default class CDShop extends React.Component {
    render() {
        const {project, viewCategory} = this.props;
        return <div className="cd-project showcase">
            <div className="banner pb-4-md">
                <iframe title="CD Shop" src="https://nguyenhongphat0.github.io/phatcdshop/" frameBorder="0"></iframe>
            </div>
            <h3>Technologies</h3>
            <div className="meta">
                <div className="tags" title="Browse all projects with this technology">
                    { project.techs.map(tech => <span key={tech} className={tech.toLowerCase()} onClick={() => viewCategory(tech)}>{tech}</span>) }
                </div>
            </div>
            <h3>Description</h3>
            {project.description}
            {project.actions &&
                <div>
                    <h3>View more</h3>
                    <div className="tags">
                    {
                        project.actions.map(action => <a key={action.name} href={action.link} target="_blank" rel="noopener noreferrer" title="Open in a new tab">{action.name}</a>)
                    }
                    </div>
                </div>
            }
            <br/>
        </div>
    }
}