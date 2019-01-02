import React from 'react';

export default ({text, link, icon, color}) => {
    return <div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={`tile no-hover tile-tiny bg-dark`}>
            <span className={`mif-${icon} icon bg-${color}`}></span>
            <span className="text">{text}</span>
        </a>
    </div>
}