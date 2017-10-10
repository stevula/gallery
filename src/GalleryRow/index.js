import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryImage from '../GalleryImage';

class GalleryRow extends Component {
  render() {
    const imgs = this.props.imgSrcs.map(imgSrc => <GalleryImage key={imgSrc} src={imgSrc} />);

    const style = {
      height: this.props.height,
    };

    return (
      <div style={style}>
        {imgs}
      </div>
    );
  }
}

GalleryRow.propTypes = {
  imgSrcs: PropTypes.array.isRequired,
}

export default GalleryRow;
