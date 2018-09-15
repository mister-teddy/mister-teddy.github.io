import React from 'react';
import Slider from 'react-slick';

export default class Showcase extends React.Component {

    render() {
        return <div className="showcase">
            <div className="banner">
                <Slider>
                    <div>
                        <img src="https://picsum.photos/1200/700/?random" alt=""/>
                    </div>
                    <div>
                        <img src="https://picsum.photos/1200/700/?random" alt=""/>
                    </div>
                    <div>
                        <img src="https://picsum.photos/1200/700/?random" alt=""/>
                    </div>
                </Slider>
            </div>
            <div className="info"></div>
            <div className="description"></div>
        </div>
    }
}