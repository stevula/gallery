import React, { Component } from 'react';

class GalleryImage extends Component {
  render() {
    const style = {
      width: '33%',
    };

    return (
      <img style={style} src={this.props.src} alt="" />
    );
  }
}

export default GalleryImage;
