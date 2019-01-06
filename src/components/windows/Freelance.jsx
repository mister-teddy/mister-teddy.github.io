import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import ListView from '../ListView';
import LoadableImage from '../LoadableImage';
import db from '../../database';
import Ring from '../Ring';

export default class Freelance extends React.Component {
    state = {
        currentProject : '',
        address: '',
        loading: false
    }

    getFavicon = (site) => `https://www.google.com/s2/favicons?domain=${site}`;

    preview = (project) => {
        this.setState({
            currentProject: project,
            address: project,
            loading: true
        })
    }

    go = (e) => {
        if (e.keyCode === 13) {
            this.preview(this.state.address);
        }
    }

    finish = () => {
        this.setState({loading: false});
    }

    render() {
        const {currentProject, address, loading} = this.state;
        return <div className="freelance-window navview expanded-fs">
            <nav className="navview-pane bg-white pl-4-md pr-4-md pt-4-md pb-4-md">
                <h1>Sites</h1>
                <ScrollBar style={{height: 'calc(100% - 96px)'}}>
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
                <div className="address-bar input">
                    <input type="text" value={address} onChange={e => this.setState({address: e.target.value})} onKeyUp={this.go}/>
                    <div className="button-group">
                        <a className="button input-search-button" href={`http://${address}`} target="_blank" rel="noopener noreferrer" title="Open in new tab">
                            <span className="mif-chevron-thin-right"></span>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="navview-content bg-light">
                {loading && <div style={{display: 'flex'}}><Ring/></div>}
                {
                    currentProject ?
                    <iframe title="preview" src={`http://${currentProject}`} onLoad={this.finish}>
                        <h1>Sorry</h1>
                        <p>Your browser does not support iframe, you can view it by click the `Open in new tab` button in the address bar</p>
                    </iframe> :
                    <div className="pl-4-md pr-4-md pt-4-md pb-4-md">
                        <h1>Home</h1>
                        <p>I've been worked as a freelancer for a Wordpress company. These are site that have task I've worked on. My primary task on these site is theme customization, plugin development and server maintainance.</p>
                        <p>Besides Wordpress, I also worked on some projects of other platform such as Prestashop or Joomla but less frequent. Click on anysite on the left to preview them.</p>
                    </div>
                }
            </div>
        </div>
    }
}