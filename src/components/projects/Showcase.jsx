import React from 'react';
import Slider from 'react-slick';

export default class Showcase extends React.Component {

    render() {
        const {project} = this.props;
        return <div className="showcase">
            {project.banners && <div className="banner">
                <Slider autoplay autoplaySpeed={3000}>
                    { project.banners.map((banner, i) => 
                        <div key={i}>
                            <img src={banner} alt=""/>
                        </div>)
                    }
                </Slider>
            </div>}
            <div className="meta">
                <div className="techs" title="Used technologies">
                    { project.techs.map(tech => <span key={tech} className={tech.toLowerCase()}>{tech}</span>) }
                    <span className="bg-white fg-dark">{project.note}</span>
                </div>
            </div>
            {project.description}
        </div>
    }
}