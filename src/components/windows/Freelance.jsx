import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import ListView from '../ListView';
import LoadableImage from '../LoadableImage';
import db from '../../database';
import Ring from '../Ring';

export default class Freelance extends React.Component {
    state = {
        currentProject : '',
        loading: false
    }

    getFavicon = (site) => `https://www.google.com/s2/favicons?domain=${site}`;

    preview = (project) => {
        this.setState({
            currentProject: project,
            loading: true
        })
    }

    finish = () => {
        this.setState({loading: false});
    }

    render() {
        const {currentProject, loading} = this.state;
        return <div className="navview expanded-fs">
            <nav className="navview-pane bg-white">
                <ScrollBar>
                    <ul className="listview view-list">
                        {Object.keys(db.freelance).map((platform, i) => 
                            <ListView key={i} name={`${db.freelance[platform].length} ${platform} sites`} open>
                                {db.freelance[platform].map((project, j) => 
                                    <li key={j} className={`node ${project === currentProject ? 'current current-select': ''}`} onClick={() => this.preview(project)}>
                                        <span className="icon"><LoadableImage src={this.getFavicon(project)} alt={project}/></span>
                                        <div className="data">{project}</div>
                                    </li>
                                )}
                            </ListView>
                        )}
                    </ul>
                </ScrollBar>
            </nav>
            <div className="navview-content bg-light">
                {loading && <div style={{display: 'flex'}}><Ring/></div>}
                {
                    currentProject ?
                    <iframe title="preview" src={`//${currentProject}`} onLoad={this.finish}/> :
                    <div className="pl-4-md pr-4-md">
                        <h1>Click on a site name to preview</h1>
                    </div>
                }
            </div>
        </div>
    }
}