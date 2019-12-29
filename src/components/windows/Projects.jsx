import React from 'react';
import ReactDOMServer from 'react-dom/server'
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
            techs: this.getTechs(),
            tech: null,
            project: null,
            history: []
        }
    }

    toggleExpand = () => {
        this.setState(s => ({expanded: !s.expanded}));
    }

    getTechs = () => {
        let techs = [], grouped = [];
        db.projects.forEach(project => {
            techs = techs.concat(project.techs);
        });
        while (techs.length > 0) {
            let count = 0;
            let index = 0;
            let tech = techs[0];
            while ((index = techs.indexOf(tech)) > -1) {
                count++;
                techs[index] = ''
            }
            grouped.push({name: tech, count});
            techs = techs.filter(t => t !== '');
        }
        grouped = grouped.sort((a, b) => b.count - a.count);
        return grouped;
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
        return ReactDOMServer.renderToString(a).trim().toLowerCase().includes(b.trim().toLowerCase());
    }

    filter = (project) => {
        const {keyword} = this.state;
        let result = false;
        if (this.contain(project.name, keyword)) {
            result = true;
        }
        if (this.contain(project.techs.join(' '), keyword)) {
            result = true;
        }
        if (project.description && this.contain(project.description, keyword)) {
            result = true;
        }
        return result;
    }
    
    render() {
        const {techs, expanded, page, keyword} = this.state;
        return <div className={`projects-window navview navview-compact-md navview-expand-lg ${expanded ? '' : 'compacted'}`}>
            <nav className="navview-pane">                
                {
                    page === 'home' ? 
                    <button className="pull-button" onClick={this.toggleExpand}>
                        <span className="mif-menu"></span>
                    </button> :
                    <button className="pull-button" onClick={this.back}>
                        <span className="mif-backspace"></span>
                    </button>
                }
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
                        <button onClick={() => this.goto({page: 'home'})}>
                        <span className="icon"><span className="mif-home"></span></span>
                        <span className="caption">Home</span>
                        </button>
                    </li>
                    <li className="item-separator"></li>
                    <li className="item-header">Technologies</li>
                    <li>
                        <button onClick={() => this.goto({page: 'grid', tech: null})}>
                        <span className="icon"><span className="mif-apps"></span></span>
                        <span className="caption">All</span>
                        </button>
                    </li>
                    <li className="item-separator"></li>
                    <ScrollBar style={{height: 'calc(100% - 144px)'}}>
                        {techs.map((tech, i) =>
                            <li key={i} className={this.state.tech === tech ? 'active' : ''}>
                                <button onClick={() => this.goto({page: 'grid', tech})}>
                                    <span className="icon"><span className="mif-folder"></span></span>
                                    <span className="caption">{tech.name}</span>
                                    <div className="badges"><span className="badge inline">{tech.count}</span></div>
                                </button>
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
                    {this.state.techs.map((tech, i) =>
                        <div key={i} className={`tile-medium bg-blue`} onClick={() => this.goto({page: 'grid', tech})}>
                            <span className={`icon mif-folder`}/>
                            <span className="branding-bar">{tech.name} ({tech.count})</span>
                        </div>
                    )}
                </div>
            </Panel>
            <Panel name="Spotlight projects" icon="star-empty" open={true}>
                <div className="tiles-grid">
                    {db.projects.map((project, i) => project.important && this.renderProjectTile(project, i))}
                </div>
            </Panel>
            <Panel name="Still working on" icon="traffic-cone" open={true}>
                <div className="tiles-grid">
                    {db.projects.map((project, i) => project.working && this.renderProjectTile(project, i))}
                </div>
            </Panel>
        </ScrollBar>
    }

    renderSearch() {
        const {keyword} = this.state;
        return <div>
            <h1>Search Result for `{keyword}`</h1>
            <ScrollBar style={{height: 'calc(100% - 60px)'}}>
                <div className="tiles-grid">
                    {db.projects.filter(this.filter).map((project, i) => this.renderProjectTile(project, i))}
                </div>
            </ScrollBar>
        </div>
    }

    renderGrid() {
        const {tech} = this.state;
        return <div>
            {tech ? <h1>{tech.name} <span>{tech.count}</span></h1> : <h1>All</h1>}
            <ScrollBar style={{height: 'calc(100% - 60px)'}}>
                <div className="tiles-grid">
                    {db.projects.map((project, i) => (!tech || (project.techs && project.techs.indexOf(tech.name) >= 0)) && this.renderProjectTile(project, i))}
                </div>
            </ScrollBar>
        </div>
    }

    renderProjectDetail() {
        const {project} = this.state;
        const component = project.component || 'Showcase';
        const ProjectDetail = require(`../projects/${component}`).default;
        return <ScrollBar>
            <h1>{project.name}</h1>
            <ProjectDetail project={project} viewCategory={tech => this.goto({page: 'grid', tech: this.state.techs.find(t => t.name === tech)})}/>
        </ScrollBar>
    }

    renderProjectTile(project, i) {
        return <div key={i} className={`tile-medium bg-${project.color}`} onClick={() => this.goto({page: 'detail', project})}>
            {project.icon && <span className={`icon mif-${project.icon}`}/>}
            {project.logo && <img src={project.logo} className="h-100 w-100 object-fit-contain" alt={project.name}/>}
            <span className="branding-bar">{project.shortName ? project.shortName : project.name}</span>
        </div>
    }
}