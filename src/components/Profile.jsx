import React from 'react';
import db from '../database'

function linkTile(text, link, icon, color, key) {
    return <div key={key}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={`tile no-hover tile-tiny bg-dark`}>
            <span className={`mif-${icon} icon bg-${color}`}></span>
            <span className="text">{text}</span>
        </a>
    </div>
}

export default () => <div className="profile fg-white">
    <div className="top">
        <div><img alt="avatar" className="avatar" src={db.avatar}></img> <span className="name">{db.name}</span></div>
        <div className="fg-gray" style={{marginBottom: -5}}>Contact me</div>
        {linkTile(db.phone, `tel:${db.phone}`, 'phone', 'blue', 'phone')}
        {linkTile(db.email, `mailto:${db.email}`, 'mail', 'blue', 'mail')}
        {linkTile(db.address, `https://www.google.com/maps/place/${db.address.replace('/', ' ')}`, 'location', 'blue', 'address')}
    </div>
    <div className="bottom">
        {db.links.map(link => linkTile(link.name, link.url, link.icon, link.color, link.name))}
    </div>
</div>