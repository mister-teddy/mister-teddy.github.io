import React from 'react';
import db from '../database'

export default () => <div className="profile fg-white">
  <div className="top">
    <div><img alt="avatar" className="avatar" src={db.avatar}></img> <span className="name">{db.name}</span></div>
    <div className="fg-gray" style={{marginBottom: -5}}>Contact me</div>
    <div><a href={`tel:${db.phone}`} target="_blank"><span className="mif-phone bg-blue icon"/> {db.phone}</a></div>
    <div><a href={`mailto:${db.email}`} target="_blank"><span className="mif-mail bg-blue icon"/> {db.email}</a></div>
    <div><a href={`https://www.google.com/maps/place/${db.address.replace('/', ' ')}`} target="_blank"><span className="mif-location bg-blue icon"/> {db.address}</a></div>
  </div>
  <div className="bottom">
    {
      db.links.map(
        link => <div key={link.name}><a href={link.url} target="_blank"><span className={`mif-${link.icon} bg-${link.color} icon`}/> {link.name}</a></div>
      )
    }
  </div>
</div>