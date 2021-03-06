import React, { Component } from 'react';
import GalleryRow from '../GalleryRow';
import RowSizeControls from '../RowSizeControls';
import AddImageInput from '../AddImageInput';
import arrayToChunks from '../lib/arrayToChunks';
import dummyData from '../data/dummyData';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: dummyData.images,
      rowSize: 4,
      width: 1140, /* container max-width - container padding */
    };
  }

  render() {
    return (
      <div ref={element => { this.element = element }}>
        <RowSizeControls value={this.state.rowSize} onChange={this.updateRowSize.bind(this)} />
        <AddImageInput onChange={this.addImage.bind(this)} />
        {this.getImageRows()}
      </div>
    );
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth.bind(this));
  }

  updateWidth() {
    this.setState({ width: this.element.clientWidth });
  }

  getImageRows() {
    return arrayToChunks(this.state.images, this.state.rowSize).map((images, index) => {
      return <GalleryRow key={index} images={images} maxWidth={this.state.width - 40} />;
    })
  }

  updateRowSize(e) {
    this.setState({ rowSize: e.target.value });
  }

  addImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const newImage = { src: ev.target.result, height: 1000, width: 1000 };
      this.setState({
        images: [newImage, ...this.state.images.slice(0)],
      });
    };

    reader.readAsDataURL(file);
  }
}

export default GalleryContainer;
