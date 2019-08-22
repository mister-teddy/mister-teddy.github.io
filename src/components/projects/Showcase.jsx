import React from 'react';
import Slider from 'react-slick';

export default class Showcase extends React.Component {

    render() {
        const settings = {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          };
        const {project, viewCategory} = this.props;
        return <div className="showcase">
            <h3>Technologies</h3>
            <div className="meta">
                <div className="tags" title="Browse all projects with this technology">
                    { project.techs.map(tech => <span key={tech} className={tech.toLowerCase()} onClick={() => viewCategory(tech)}>{tech}</span>) }
                </div>
            </div>
            <h3>Description</h3>
            {project.description}
            {project.actions &&
                <div>
                    <h3>View more</h3>
                    <div className="tags">
                    {
                        project.actions.map(action => <a key={action.name} href={action.link} target="_blank" rel="noopener noreferrer" title="Open in a new tab">{action.name}</a>)
                    }
                    </div>
                </div>
            }
            {project.banners && <div className="banner">
                <h3>Screenshots</h3>
                <Slider {...settings}>
                    { project.banners.map((banner, i) => 
                        <div key={i}>
                            <img src={banner} alt=""/>
                        </div>)
                    }
                </Slider>
            </div>}
        </div>
    }
}