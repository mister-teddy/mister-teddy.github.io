import React from 'react';

export default ({window}) => <div className="cd-window">
    <iframe title={window.name} src={window.link} />
</div>