import React from 'react';

export default class TimelineItem extends React.Component {

    state = {
        popover: false
    }

    togglePopover = () => {
        this.setState(prevState => ({popover: !prevState.popover}));
    }

    calculateLeft = year => {
        if (year === 1998) {
            return 0
        } else {
            return 224*(year - 2008)-1;
        }
    }

    render() {
        const { popover } = this.state;
        const { title, subtitle, description, day, month, year, category, preview, icon, photos, detail } = this.props;
        return (
            <div className="stream-event size-1x exclude-select-class" style={{position: 'absolute', top: 0, left: this.calculateLeft(year)}}>
                <div className="stream-event-slide" onClick={this.togglePopover}>
                    <div className="slide-logo">
                        {preview && <img alt={title} className="icon" src={preview} />}
                        <span className={`time bg-${category.color} fg-white`}>{day}/{month}</span>
                    </div>
                    <div className="slide-data">
                        <div className="title">{title}</div>
                        <div className="subtitle">{subtitle}</div>
                        <div className="desc">{description}</div>
                    </div>
                    {icon && <span className={`mif-${icon} state-icon`} />}
                </div>
                {
                    ((detail || photos) && popover) && <div className="popover neb neb-n bottom">
                        <div className="popover-content">
                            {detail}
                            {photos && photos.map(photo => <img alt={title} src={photo} />)}
                        </div>
                        <button onClick={this.togglePopover} className="button square small popover-close-button bg-white">×</button>
                    </div>
                }
            </div>
        );
    }
}