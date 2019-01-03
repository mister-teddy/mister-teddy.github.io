import React from 'react';
import Slider from 'react-slick';

export default class Showcase extends React.Component {

    render() {
        const {project} = this.props;
        return <div className="showcase">
            <div className="banner">
                <Slider autoplay autoplaySpeed={3000}>
                    { project.banners.map((banner, i) => 
                        <div key={i}>
                            <img src={banner} alt=""/>
                        </div>)
                    }
                </Slider>
            </div>
            <div className="meta">
                <div className="techs" title="Used technologies">
                    { project.techs.map(tech => <span key={tech} className={tech.toLowerCase()}>{tech}</span>) }
                </div>
            </div>
            <p dangerouslySetInnerHTML={{__html: project.description}}></p>
        </div>
    }
}