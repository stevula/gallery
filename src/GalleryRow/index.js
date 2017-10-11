import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryImage from '../GalleryImage';

class GalleryRow extends Component {
  render() {
    return (
      <div>
        {this.getScaledImageProperties().map(image => <GalleryImage key={image.src} {...image} /> )}
      </div>
    );
  }

  getScaledImageProperties(images = this.props.images, heightLimit = 100) {
    const downsized = this.downsizeImages(images, heightLimit);
    return downsized;
  }

  downsizeImages(images, height) {
    return images.map((image) => {
      return {
        ...image,
        height: `${height}`,
        width: `${height / image.height * image.width - 1}`,
      };
    });
  }
}

GalleryRow.propTypes = {
  images: PropTypes.array.isRequired,
};

export default GalleryRow;
