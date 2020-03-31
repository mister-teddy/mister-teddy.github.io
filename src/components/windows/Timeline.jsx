import React from 'react';
import TimelineItem from './TimelineItem';
import db from '../../database';

export default class Timeline extends React.Component {

    render() {
        const { categories } = db.timeline;

        return <div className="timeline">
            <div className="streamer-expand-sm streamer">
                <div className="streams">
                    <div className="streamer-actions">
                        <button className="streamer-action"><span className="mif-print" /></button>
                        <button className="streamer-action"><span className="mif-file-pdf" /></button>
                        <button className="streamer-action"><span className="mif-envelop" /></button>
                        <button className="streamer-action fg-darkCyan"><span className="mif-facebook" /></button>
                        <button className="streamer-action"><span className="mif-twitter" /></button>
                    </div>
                    {categories.map(category => <div key={category.name} className={`stream bg-${category.color} fg-white`}>
                            <div className="stream-title">{category.name}</div>
                            <div className="stream-secondary">{category.description}</div><span className={`mif-${category.icon} stream-icon`} />
                        </div>
                    )}
                </div>
                <div className="events-area">
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