import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryImage from '../GalleryImage';

class GalleryRow extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {this.getScaledImageProperties().map(image => <GalleryImage key={image.src} {...image} /> )}
      </div>
    );
  }

  getScaledImageProperties(images = this.props.images) {
    const targetRowWidth = parseInt(this.props.maxWidth, 10);
    const tempImgHeight = 100;
    const tempImages = this.downsizeImages(images, tempImgHeight);
    const tempImagesCombinedWidth = tempImages.reduce((sum, img) => sum + img.width, 0);
    const adjustmentFactor = targetRowWidth / tempImagesCombinedWidth;
    return this.downsizeImages(images, tempImgHeight * adjustmentFactor)
  }

  downsizeImages(images, height) {
    return images.map((image) => {
      return {
        ...image,
        height,
        width: image.width * height / image.height,
      };
    });
  }
}

GalleryRow.propTypes = {
  images: PropTypes.array.isRequired,
};

export default GalleryRow;
