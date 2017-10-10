import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GalleryImage extends Component {
  render() {
    const style = {
      width: '33.33%',
    };

    return (
      <img style={style} src={this.props.src} alt="" />
    );
  }
}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
}

export default GalleryImage;
