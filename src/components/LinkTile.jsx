import React from 'react';

export default ({text, link, icon, favicon, color}) => {
    return <div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={`tile tile-tiny bg-dark cursor-pointer`}>
            {favicon ? <img src={favicon} className={`icon bg-${color}`} alt={text} /> : <span className={`mif-${icon} icon bg-${color}`}></span>}
            <span className="text">{text}</span>
        </a>
    </div>
}