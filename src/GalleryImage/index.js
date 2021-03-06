import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GalleryImage extends Component {
  render() {
    const style = {
      margin: 0,
    };
    
    return (
      <img style={style} {...this.props} alt="" />
    );
  }
}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default GalleryImage;
