import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import db from '../../database';
import Panel from '../Panel';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            keyword: '',
            page: 'home',
            tech: '',
            project: null,
            history: []
        }
    }

    toggleExpand = () => {
        this.setState(s => ({expanded: !s.expanded}));
    }

    getTechs = () => {
        const techs = [];
        db.projects.forEach(project => {
            project.techs.forEach(tech => {
                if (techs.indexOf(tech) === -1) {
                    techs.push(tech);
                }
            })
        });
        return techs;
    }

    goto = (state) => {
        this.setState(s => ({
            history: s.history.concat(s),
            ...state
        }));
    }

    back = () => {
        const state = this.state.history.pop();
        if (state) {
            this.setState(state);
        } else {
            this.setState({page: 'home'});
        }
    }

    search = (e) => {
        let {keyword} = this.state;
        if (e.type.includes('change')) {
            keyword = e.target.value;
        }
        this.setState({
            expanded: true,
            page: 'search',
            keyword
        });
    }

    contain = (a, b) => {
        return a.trim().toLowerCase().includes(b.trim().toLowerCase());
    }

    filter = (project) => {
        const {keyword} = this.state;
        let result = false;
        if (this.contain(project.name, keyword)) {
            result = true;
        }
        if (this.contain(project.description, keyword)) {
            result = true;
        }
        if (this.contain(project.techs.join(' '), keyword)) {
            result = true;
        }
        return result;
    }
    
    render() {
        const {expanded, page, keyword} = this.state;
        return <div className={`projects-window navview ${expanded ? 'expanded-fs' : 'expanded-fs compacted'}`}>
            <nav className="navview-pane">
                <button className="pull-button" onClick={this.toggleExpand}>
                <span className="mif-menu"></span>
                </button>
                <div className="suggest-box">
                    <div className="input">
                        <input type="text" ref={searchbar => this.searchbar = searchbar} value={keyword} onChange={this.search}/>
                        <div className="button-group">
                            <button className="button input-search-button" type="submit" onClick={this.search}>
                                <span className="default-icon-search"></span>
                            </button>
                        </div>
                    </div>
                    <button className="holder" onClick={this.search}>
                        <span className="mif-search"></span>
                    </button>
                </div>
                <ul className="navview-menu">
                    <li>
                        <a href="#Home" onClick={() => this.goto({page: 'home'})}>
                        <span className="icon"><span className="mif-home"></span></span>
                        <span className="caption">Home</span>
                        </a>
                    </li>
                    <li className="item-separator"></li>
                    <li className="item-header">Technologies</li>
                    <li>
                        <a href="#All" onClick={() => this.goto({page: 'grid', tech: ''})}>
                        <span className="icon"><span className="mif-apps"></span></span>
                        <span className="caption">All</span>
                        </a>
                    </li>
                    <li className="item-separator"></li>
                    <ScrollBar style={{height: 'calc(100% - 144px)'}}>
                        {this.getTechs().map((tech, i) =>
                            <li key={i}>
                                <a href={`#${tech}`} onClick={() => this.goto({page: 'grid', tech})}>
                                <span className="icon"><span className="mif-folder"></span></span>
                                <span className="caption">{tech}</span>
                                </a>
                            </li>
                        )}
                    </ScrollBar>
                </ul>
            </nav>
            <div className="navview-content pl-4-md pr-4-md">
                {page === 'home' && this.renderHome()}
                {page === 'search' && this.renderSearch()}
                {page === 'grid' && this.renderGrid()}
                {page === 'detail' && this.renderProjectDetail()}
            </div>
        </div>
    }

    renderHome() {
        return <ScrollBar>
            <h1>Home</h1>
            <p>Thank you for viewing my portfolio. Take a look at what I have done!</p>
            <Panel name="Categories" icon="apps" open={false}>
                <div className="tiles-grid">
                    {this.getTechs().map((tech, i) =>
                        <div key={i} className={`tile-medium bg-blue`} onClick={() => this.goto({page: 'grid', tech})}>
                            <span className={`icon mif-folder`}/>
                            <span className="branding-bar">{tech}</span>
                        </div>
                    )}
                </div>
            </Panel>
            <Panel name="Spotlight projects" icon="star-empty" open={true}>
                <div className="tiles-grid">
                    {db.projects.map((project, i) => project.important &&
                        <div key={i} className={`tile-medium bg-${project.color}`} onClick={() => this.goto({page: 'detail', project})}>
                            <span className={`icon mif-${project.icon}`}/>
                            <span className="branding-bar">{project.shortName ? project.shortName : project.name}</span>
                        </div>
                    )}
                </div>
            </Panel>
            <Panel name="Still working on" icon="traffic-cone" open={true}>
                <div className="tiles-grid">
                    {db.projects.map((project, i) => project.working &&
                        <div key={i} className={`tile-medium bg-${project.color}`} onClick={() => this.goto({page: 'detail', project})}>
                            <span className={`icon mif-${project.icon}`}/>
                            <span className="branding-bar">{project.shortName ? project.shortName : project.name}</span>
                        </div>
                    )}
                </div>
            </Panel>
        </ScrollBar>
    }

    renderSearch() {
        const {keyword} = this.state;
        return <div>
            <h1>
                <a href="#Home" onClick={this.back}><span className="mif-backspace mif-5x fg-black"></span></a>
                Search Result for `{keyword}`
            </h1>
            <ScrollBar style={{height: 'calc(100% - 60px)'}}>
                <div className="tiles-grid">
                    {db.projects.filter(this.filter).map((project, i) =>
                        <div key={i} className={`tile-medium bg-${project.color}`} onClick={() => this.goto({page: 'detail', project})}>
                            <span className={`icon mif-${project.icon}`}/>
                            <span className="branding-bar">{project.shortName ? project.shortName : project.name}</span>
                        </div>
                    )}
                </div>
            </ScrollBar>
        </div>
    }

    renderGrid() {
        const {tech} = this.state;
        return <div>
            <h1>
                <a href="#Home" onClick={this.back}><span className="mif-backspace mif-5x fg-black"></span></a>
                {tech ? tech : 'All'}
            </h1>
            <ScrollBar style={{height: 'calc(100% - 60px)'}}>
                <div className="tiles-grid">
                    {db.projects.map((project, i) =>
                        (!tech || project.techs.indexOf(tech) >= 0) &&
                        <div key={i} className={`tile-medium bg-${project.color}`} onClick={() => this.goto({page: 'detail', project})}>
                            <span className={`icon mif-${project.icon}`}/>
                            <span className="branding-bar">{project.shortName ? project.shortName : project.name}</span>
                        </div>
                    )}
                </div>
            </ScrollBar>
        </div>
    }

    renderProjectDetail() {
        const {project} = this.state;
        const component = project.component || 'Showcase';
        const ProjectDetail = require(`../projects/${component}`).default;
        return <ScrollBar>
            <h1>
                <a href="#Home" onClick={this.back}><span className="mif-backspace mif-5x fg-black"></span></a>
                {project.name}
            </h1>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="fg-blue" title="Open this project in a new tab">LIVE PREVIEW</a>}
            <ProjectDetail project={project}/>
        </ScrollBar>
    }
}