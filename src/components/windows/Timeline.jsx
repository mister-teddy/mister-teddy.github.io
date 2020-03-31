import React from 'react';
import TimelineItem from './TimelineItem';
import db from '../../database';

export default class Timeline extends React.Component {

    handleScroll = e => {
        e.currentTarget.scrollLeft += e.deltaY;
    }

    handleLoad = e => {
        e.currentTarget.scrollLeft += e.currentTarget.scrollWidth;
    }

    render() {
        const { categories } = db.timeline;

        return <div className="timeline">
            <div className="streamer-expand-sm streamer">
                <div className="streams">
                    <div className="streamer-actions">
                        <button className="streamer-action" onClick={() => window.print()}><span className="mif-print" /></button>
                        <a href={db.links[0].url} target="_blank" rel="noopener noreferrer" className="streamer-action fg-darkCyan"><span className="mif-facebook" /></a>
                    </div>
                    {categories.map(category => <div key={category.name} className={`stream bg-${category.color} fg-white`}>
                            <div className="stream-title">{category.name}</div>
                            <div className="stream-secondary">{category.description}</div><span className={`mif-${category.icon} stream-icon`} />
                        </div>
                    )}
                </div>
                <div className="events-area" onWheel={this.handleScroll} onLoad={this.handleLoad}>
                    <ul className="streamer-timeline">
                        {[1998, '...', 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 'NOW'].map(year => <li key={year}><em>{year}</em></li>)}
                    </ul>
                    {categories.map(category => <div key={category.name} className="streamer-events">
                            <div className="event-group">
                                <div className="stream-events" style={{width: '2238px', height: '75px'}}>
                                    {category.events.map(event => <TimelineItem key={event.title} category={category} {...event} />)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    }
}