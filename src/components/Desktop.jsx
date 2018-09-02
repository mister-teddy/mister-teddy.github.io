import React from 'react';
import db from '../database'

export default () => <div className="desktop" style={{backgroundImage: `url(${db.background})`, backgroundSize: 'cover'}}></div>;
