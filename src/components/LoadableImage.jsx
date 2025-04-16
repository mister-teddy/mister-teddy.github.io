import React from "react";
import Ring from "./Ring";

export default class LoadableImage extends React.Component {
  state = {
    loading: true
  };

  finish = () => {
    this.setState({ loading: false });
  };

  render() {
    const { src, alt } = this.props;
    const { loading } = this.state;
    return (
      <div className="loadable-image">
        {loading && <Ring />}
        <img src={src} alt={alt} onLoad={this.finish} />
      </div>
    );
  }
}
