import React, { Component } from 'react';
import GalleryRow from '../GalleryRow';
import arrayToChunks from '../lib/arrayToChunks';
import dummyData from '../data/dummyData';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: dummyData.images,
    };
  }

  render() {
    return (
      <div>
        {
          arrayToChunks(this.state.images, 3).map((images, index) => {
            return <GalleryRow key={index} images={images} />;
          })
        }
      </div>
    );
  }
}

export default GalleryContainer;
