import React, { Component } from 'react';
import GalleryRow from '../GalleryRow';
import RowSizeControls from '../RowSizeControls';
import arrayToChunks from '../lib/arrayToChunks';
import dummyData from '../data/dummyData';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: dummyData.images,
      rowSize: 4,
    };
  }

  render() {
    return (
      <div>
        <RowSizeControls value={this.state.rowSize} onChange={this.updateRowSize.bind(this)} />
        {this.getImageRows()}
      </div>
    );
  }

  getImageRows() {
    return arrayToChunks(this.state.images, this.state.rowSize).map((images, index) => {
      return <GalleryRow key={index} images={images} />;
    })
  }

  updateRowSize(e) {
    this.setState({ rowSize: e.target.value });
  }
}

export default GalleryContainer;
